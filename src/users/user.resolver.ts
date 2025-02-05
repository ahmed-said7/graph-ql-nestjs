import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { v1 } from 'uuid';
import { UserType } from './user.type';
import { CreateUserDto } from './dto/create.user.dto';
import { DbService } from 'src/db/db.service';
import { BookType } from 'src/books/book.type';
import { UserDto } from 'src/db/dto/user.dto';
import { PubSub } from 'graphql-subscriptions';
import { Inject } from '@nestjs/common';

@Resolver(() => UserType)
export class UserResolver {
  constructor(
    private DbService: DbService,
    @Inject('PUB_SUB') private pubSub: PubSub,
  ) {}
  @Mutation(() => UserType)
  createUser(@Args('body') body: CreateUserDto) {
    body.id = v1();
    this.DbService.users.push(body);
    return body;
  }
  @Query(() => [UserType]!)
  getUsers() {
    return this.DbService.users;
  }
  @ResolveField(() => [BookType], { nullable: true })
  books(@Parent() parent: UserDto) {
    const books = this.DbService.books.filter(
      (book) => book.user === parent.id,
    );
    return books;
  }
  @Subscription(() => BookType)
  bookAdded() {
    return this.pubSub.asyncIterableIterator('bookAdded');
  }
}
