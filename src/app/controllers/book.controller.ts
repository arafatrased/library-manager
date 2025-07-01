import { Request, Response, Router } from 'express';
import { Book } from '../models/book.model';

export const bookRouter: Router = Router();

// Posting a book
bookRouter.post('/', async (req: Request, res: Response) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json({
      success: true,
      message: 'Book created successfully',
      data: book,
    });
  } catch (error:any) {
    res.status(400).json({
      success: false,
      message: 'Validation faileds',
      error: error.message,
    });
  }
});

// All Books
bookRouter.get('/', async (req: Request, res: Response) => {
  const { filter, sortBy = 'createdAt', sort = 'desc', limit = '10' } = req.query;

  const query: any = {};
  if (filter) query.genre = filter;

  const sortOrder = (sort === 'asc' || sort === 'desc') ? sort : 'desc';
  const books = await Book.find(query)
    .sort({ [sortBy as string]: sortOrder })
    .limit(parseInt(limit as string));

  res.json({
    success: true,
    message: 'Books retrieved successfully',
    data: books,
  });
});

// having single book
bookRouter.get('/:bookId', async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const book = await Book.findById(bookId);
  console.log(book)
  if (!book) {
      res.status(404).json({
      success: false,
      message: 'Book not found',
    });
  }
  res.json({
    success: true,
    message: 'Book retrieved successfully',
    data: book,
  });
});

// Update Book
bookRouter.put('/:bookId', async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.bookId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) {
        res.status(404).json({
        success: false,
        message: 'Book not found',
      });
    }
    res.json({
      success: true,
      message: 'Book updated successfully',
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Validation failed',
      error: error
    });
  }
});

// Delete a Book
bookRouter.delete('/:bookId', async (req: Request, res: Response) => {
  await Book.findByIdAndDelete(req.params.bookId);
  res.json({
    success: true,
    message: 'Book deleted successfully',
    data: null,
  });
});


