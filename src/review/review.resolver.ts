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
import { ReviewType } from './review.type';
import { CreateReviewDto } from './dto/create.review.dto';
import { ReviewDto } from 'src/db/dto/review.dto';
import { BookType } from 'src/books/book.type';

@Resolver(() => ReviewType)
@UseGuards(AuthenticationGuard)
export class ReviewResolver {
  constructor(private DbService: DbService) {}
  @Mutation(() => ReviewType)
  createReview(@Args('body') body: CreateReviewDto) {
    body.id = v4();
    this.DbService.reviews.push(body);
    return body;
  }
  @Query(() => [ReviewType]!)
  getReview() {
    return this.DbService.reviews;
  }

  @ResolveField(() => BookType, { nullable: true })
  book(@Parent() parent: ReviewDto) {
    return this.DbService.books.find((book) => book.id === parent.book);
  }
}
