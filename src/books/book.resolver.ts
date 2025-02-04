import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { v1 } from 'uuid';
import { DbService } from 'src/db/db.service';
import { UserType } from 'src/users/user.type';
import { UseGuards } from '@nestjs/common';
import { AuthenticationGuard } from 'src/guards/auth.guard';
import { BookType } from './book.type';
import { CreateBookDto } from './dto/create.book.dto';
import { BookDto } from 'src/db/dto/book.dto';
import { InventoryType } from 'src/inventory/inventory.type';
import { ReviewType } from 'src/review/review.type';

@Resolver(() => BookType)
@UseGuards(AuthenticationGuard)
export class BookResolver {
  constructor(private DbService: DbService) {}
  @Mutation(() => BookType)
  createBook(@Args('body') body: CreateBookDto) {
    body.id = v1();
    this.DbService.books.push(body);
    return body;
  }
  @Query(() => [BookType]!)
  getBooks() {
    return this.DbService.books;
  }
  @ResolveField(() => UserType)
  user(@Parent() parent: BookDto) {
    return this.DbService.users.find((user) => user.id === parent.user);
  }
  @ResolveField(() => InventoryType, { nullable: true })
  inventory(@Parent() parent: BookDto) {
    return this.DbService.inventory.find(
      (inventory) => inventory.book === parent.id,
    );
  }
  @ResolveField(() => [ReviewType], { nullable: true })
  reviews(@Parent() parent: BookDto) {
    const reviews = this.DbService.reviews.filter(
      (review) => review.book === parent.id,
    );
    return reviews;
  }
}
