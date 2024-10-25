import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { findIndex } from 'rxjs';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.booksService.findOne(+id);
  }
  
  @Delete(':id')
  deleteBooks(@Param('id') id : string ){
    return this.booksService.remove(parseInt(id));
  }  

  @Post()
  bookCreater(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(parseInt(id), updateBookDto);
  }
}
