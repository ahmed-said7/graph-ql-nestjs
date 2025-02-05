import { DbService } from 'src/db/db.service';
import { CreateReviewDto } from './dto/create.review.dto';
import { ReviewDto } from 'src/db/dto/review.dto';
export declare class ReviewResolver {
  private DbService;
  constructor(DbService: DbService);
  createReview(body: CreateReviewDto): CreateReviewDto;
  getReview(): ReviewDto[];
  book(parent: ReviewDto): import('../db/dto/book.dto').BookDto;
}
