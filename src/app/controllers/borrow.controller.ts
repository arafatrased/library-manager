import { Request, Response, Router } from 'express';
import { Book } from '../models/book.model';
import { Borrow } from '../models/borrow.model';

const borrowRouter: Router = Router();

// Borrow Book
borrowRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { book: bookId, quantity, dueDate } = req.body;

    const book = await Book.findById(bookId);

    if (!book) {
        res.status(404).json({
        success: false,
        message: 'Book not found',
      });
    }
    if(!book){
      return 
    }

    if (book.copies < quantity) {
        res.status(400).json({
        success: false,
        message: 'Not enough copies available',
      });
    }

    // Update book copies and availability
    book.copies -= quantity;
    book.updateAvailability();
    await book.save();

    const borrow = new Borrow({ book: bookId, quantity, dueDate });
    await borrow.save();

      res.status(201).json({
      success: true,
      message: 'Book borrowed successfully',
      data: borrow,
    });

  } catch (error) {
      res.status(400).json({
      success: false,
      message: 'Borrow failed',
      error,
    });
  }
});

// Borrowed Books Summary 
borrowRouter.get('/', async (req: Request, res: Response) => {
  const summary = await Borrow.aggregate([
    {
      $group: {
        _id: '$book',
        totalQuantity: { $sum: '$quantity' },
      },
    },
    {
      $lookup: {
        from: 'books',
        localField: '_id',
        foreignField: '_id',
        as: 'bookDetails',
      },
    },
    { $unwind: '$bookDetails' },
    {
      $project: {
        book: {
          title: '$bookDetails.title',
          isbn: '$bookDetails.isbn',
        },
        totalQuantity: 1,
      },
    },
  ]);

  res.json({
    success: true,
    message: 'Borrowed books summary retrieved successfully',
    data: summary,
  });
});

export default borrowRouter;
