import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksService {

  private books: BookDto[] = [
    {
      id: '1',
      title: 'Book 1',
      author: 'Author 1',
      rating: 5,
    },
    {
      id: '2',
      title: 'Book 2',
      author: 'Author 2',
      rating: 4,
    },
  ];

  create(createBookDto: CreateBookDto) {
    const book: BookDto = {
      id: (this.books.length + 1).toString(),
      ...createBookDto,
    };
    this.books.push(book);
    return book;
  }

  findAll() {
    return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
