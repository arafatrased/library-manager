import { Schema, model } from 'mongoose';
import { IBookDocument } from '../interfaces/book.interface';

const bookSchema = new Schema<IBookDocument>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: {
    type: String,
    enum: ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'],
    required: true,
    uppercase: true
  },
  isbn: {
    type: String,
    required: true,
    unique: [true, "ISBN should be unique"],
    trim: true
  },
  description: String,
  copies: {
    type: Number,
    required: true,
    min: [0, "Copies must be a positive number"]
  },
  available: {
    type: Boolean,
    default: true
  },
},
  {
    timestamps: true,
    versionKey: false
  });

// instance method for availability
bookSchema.methods.updateAvailability = function () {
  this.available = this.copies > 0;
};

bookSchema.pre('save', function (next) {
  this.available = this.copies > 0;
  next();
});


bookSchema.post('save', function(){
  console.log(`${this.title} is created successfully in the document`)
})

export const Book = model<IBookDocument>('Book', bookSchema);
