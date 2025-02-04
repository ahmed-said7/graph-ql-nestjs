import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { v4 } from 'uuid';
import { DbService } from 'src/db/db.service';
import { UseGuards } from '@nestjs/common';
import { AuthenticationGuard } from 'src/guards/auth.guard';
import { InventoryType } from './inventory.type';
import { CreateInventoryDto } from './dto/inventory.create.dto';
import { InventoryDto } from 'src/db/dto/inventory.dto';
import { BookType } from 'src/books/book.type';

@Resolver(() => InventoryType)
@UseGuards(AuthenticationGuard)
export class InventoryResolver {
  constructor(private DbService: DbService) {}
  @Mutation(() => InventoryType)
  createInventory(@Args('body') body: CreateInventoryDto) {
    body.id = v4();
    this.DbService.inventory.push(body);
    return body;
  }
  @Query(() => [InventoryType]!)
  getInventory() {
    return this.DbService.inventory;
  }

  @ResolveField(() => BookType, { nullable: true })
  book(@Parent() parent: InventoryDto) {
    return this.DbService.books.find((book) => book.id === parent.book);
  }
}
