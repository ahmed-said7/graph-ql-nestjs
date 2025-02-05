import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { BookResolver } from './book.resolver';
import { GraphqlModule } from 'src/graphql/graphql.module';

@Module({
  controllers: [],
  providers: [BookResolver],
  imports: [DbModule, GraphqlModule],
  exports: [BookResolver],
})
export class BookModule {}
