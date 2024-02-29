import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) { }

  @Get('getBooks')
  getAllBooks() {
    return this.bookService.getAllBook();
  }

  @Post('createBook')
  createBook(@Body() payload: any) {
    return this.bookService.createBook(payload);
  }
}
