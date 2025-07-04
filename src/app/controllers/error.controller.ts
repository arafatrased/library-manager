import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: 'Book not Found',
    error: err
  });
  next()
};