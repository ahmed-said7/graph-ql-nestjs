import { ArgumentsHost, Catch, HttpException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { GqlArgumentsHost } from '@nestjs/graphql';

interface ServerError {
  message?: string;
  code?: number;
}

@Catch()
export class AppExceptionsFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost): void {
    const object: ServerError = {};
    object.code = 400;
    const ctx = GqlArgumentsHost.create(host).getContext();
    const res = ctx.res;
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
    res.json(object);
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
    object.message = object.message || `internal server error`;
    object.code = 500;
  }
}
