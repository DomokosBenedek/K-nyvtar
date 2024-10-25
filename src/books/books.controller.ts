import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
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
  @HttpCode(204)
  deleteBooks(@Param('id') id : string ){
    return this.booksService.remove(parseInt(id));
  }  

  @Post()
  @HttpCode(201)
  bookCreater(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }


  @Patch(':id')
  @HttpCode(200)
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(parseInt(id), updateBookDto);
  }
}
