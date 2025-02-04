import { ArgumentsHost, Catch, HttpException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';

interface ServerError {
  message?: string;
  code?: number;
}

@Catch()
export class AppExceptionsFilter
  extends BaseExceptionFilter
  implements GqlExceptionFilter
{
  catch(exception: any, host: ArgumentsHost): void {
    const gqlHost = GqlArgumentsHost.create(host);
    gqlHost.getInfo<GraphQLResolveInfo>();

    const object: ServerError = {};
    object.code = 400;

    if (
      exception?.response?.message &&
      Array.isArray(exception.response.message)
    ) {
      this.handleNestError(exception.response, object);
    } else if (exception instanceof HttpException) {
      this.handleHttpException(exception, object);
    } else {
      this.internalError(object);
    }

    // In GraphQL, you don't have direct access to the HTTP response object.
    // Instead, you can throw a new error or modify the exception.
    throw new HttpException(object, object.code);
  }

  handleNestError(
    exception: { message: string[]; statusCode: number },
    object: ServerError,
  ) {
    object.message = exception.message.join(' and ');
    object.code = exception.statusCode;
  }

  handleHttpException(exception: HttpException, object: ServerError) {
    object.message = exception.message;
    object.code = exception.getStatus();
  }

  internalError(object: ServerError) {
    object.message = object.message || 'Internal server error';
    object.code = 500;
  }
}
