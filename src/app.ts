import express, { Application, Request, Response } from 'express';
require('dotenv').config()

import { errorHandler } from './app/controllers/error.controller';
import { bookRouter } from './app/controllers/book.controller';
import { borrowRouter } from './app/controllers/borrow.controller';

export const app: Application = express();

//Middleware
app.use(express.json())

app.use('/api/books', bookRouter);
app.use('/api/borrow', borrowRouter);
app.use(errorHandler);

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to Library Management App")
})