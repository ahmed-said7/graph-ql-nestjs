import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { AppExceptionsFilter } from './common/base-filter';
import { APP_FILTER } from '@nestjs/core';
import { BookModule } from './books/book.module';
import { InventoryModule } from './inventory/inventory.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': true, // Enable WebSocket support
      },
      context: function ({ req, res }) {
        const headers = req?.headers;
        console.log(res);
        return { req, res, headers };
      },
    }),
    BookModule,
    UserModule,
    AuthModule,
    InventoryModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [{ provide: APP_FILTER, useClass: AppExceptionsFilter }],
})
export class AppModule {}
