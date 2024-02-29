import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import mongoose from 'mongoose';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name)
    private bookModel: mongoose.Model<Book>
  ) { }

  async getAllBook() {
    const book = await this.bookModel.find();
    return book;
  }

  async createBook(payload: any) {
    return payload;
  }
}
