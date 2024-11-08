import { ArgumentsHost, HttpException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
interface ServerError {
    message?: string;
    code?: number;
}
export declare class AppExceptionsFilter extends BaseExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
    handleNestError(exception: {
        message: string[];
        statusCode: number;
    }, object: ServerError): void;
    handleHttpException(exception: HttpException, object: ServerError): void;
    internalError(object: ServerError): void;
}
export {};
