import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {

  books : Book[] = [
    {
        id: 1,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        isbn: "978-0316769488",
        publishYear: 1951,
        reserved: false
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        isbn: "978-0061120084",
        publishYear: 1960,
        reserved: false
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        isbn: "978-0451524935",
        publishYear: 1949,
        reserved: false
    },
    {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        isbn: "978-0743273565",
        publishYear: 1925,
        reserved: false
    },
    {
        id: 5,
        title: "Moby Dick",
        author: "Herman Melville",
        isbn: "978-1503280786",
        publishYear: 1851,
        reserved: false
    },
    {
        id: 6,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        isbn: "978-1503290563",
        publishYear: 1813,
        reserved: false
    },
    {
        id: 7,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        isbn: "978-0547928227",
        publishYear: 1937,
        reserved: false
    },
    {
        id: 8,
        title: "Brave New World",
        author: "Aldous Huxley",
        isbn: "978-0060850524",
        publishYear: 1932,
        reserved: false
    },
    {
        id: 9,
        title: "War and Peace",
        author: "Leo Tolstoy",
        isbn: "978-1400079988",
        publishYear: 1869,
        reserved: false
    },
    {
        id: 10,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        isbn: "978-0486415871",
        publishYear: 1866,
        reserved: false
    }  
  ];

  createBook(createBookDto: CreateBookDto) { 
    const newBook ={
      id: this.books.length + 1,
      ...createBookDto,
      reserved : false,
    }
    this.books.push(newBook);
    return newBook;
  } 

  create(createBookDto: CreateBookDto) {
    return this.createBook(createBookDto);
  }

  findAll() {
    return JSON.stringify(this.books);
  }

  findOne(id: number) {
    return this.books.find(book => book.id === id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    const index = this.books.findIndex(book => book.id === id);
    if(index === -1){
      throw new NotFoundException("No product with id")
    }
    this.books[index] = {
      ...this.books[index],
      ...updateBookDto
    }
    return this.books;
  }

  remove(id: number) {
    if(this.books.find(book => book.id === id)){
      this.books.splice(this.books.findIndex(book => book.id === id)  ,1);
    } else{
      throw new NotFoundException("No product with id")
    }
  }
}
