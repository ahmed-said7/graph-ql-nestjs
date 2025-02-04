import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { ReviewResolver } from './review.resolver';

@Module({
  controllers: [],
  providers: [ReviewResolver],
  imports: [DbModule],
})
export class ReviewModule {}
