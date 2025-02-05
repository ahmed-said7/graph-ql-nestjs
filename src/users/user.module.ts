import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { DbModule } from 'src/db/db.module';
import { GraphqlModule } from 'src/graphql/graphql.module';

@Module({
  controllers: [],
  providers: [UserResolver],
  imports: [DbModule, GraphqlModule],
  exports: [UserResolver],
})
export class UserModule {}
