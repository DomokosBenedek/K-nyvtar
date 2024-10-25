import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @IsOptional()
    @IsBoolean()
    reserved?: boolean;   
}
