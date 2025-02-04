import { Injectable } from '@nestjs/common';
import { BookDto } from './dto/book.dto';
import { UserDto } from './dto/user.dto';
import { InventoryDto } from './dto/inventory.dto';
import { ReviewDto } from './dto/review.dto';

@Injectable()
export class DbService {
  users: UserDto[] = [];
  books: BookDto[] = [];
  inventory: InventoryDto[] = [];
  reviews: ReviewDto[] = [];
}
