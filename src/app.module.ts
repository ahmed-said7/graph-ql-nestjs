import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { LessonModule } from './lessons/lesson.module';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { AppExceptionsFilter } from './common/base-filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
      context: function ({ req, res }) {
        const headers = req?.headers;
        return { req, res, headers };
      },
    }),
    LessonModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [{ provide: APP_FILTER, useClass: AppExceptionsFilter }],
})
export class AppModule {}
