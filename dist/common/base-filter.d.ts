import { ArgumentsHost, HttpException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { GqlExceptionFilter } from '@nestjs/graphql';
interface ServerError {
    message?: string;
    code?: number;
}
export declare class AppExceptionsFilter extends BaseExceptionFilter implements GqlExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
    handleNestError(exception: {
        message: string[];
        statusCode: number;
    }, object: ServerError): void;
    handleHttpException(exception: HttpException, object: ServerError): void;
    internalError(object: ServerError): void;
}
export {};
