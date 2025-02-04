import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { BookResolver } from './book.resolver';

@Module({
  controllers: [],
  providers: [BookResolver],
  imports: [DbModule],
})
export class BookModule {}
