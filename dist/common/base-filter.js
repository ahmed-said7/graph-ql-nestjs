"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const graphql_1 = require("@nestjs/graphql");
let AppExceptionsFilter = class AppExceptionsFilter extends core_1.BaseExceptionFilter {
    catch(exception, host) {
        const object = {};
        object.code = 400;
        const ctx = graphql_1.GqlArgumentsHost.create(host).getContext();
        const res = ctx.res;
        if (exception?.response?.message &&
            Array.isArray(exception.response.message)) {
            this.handleNestError(exception.response, object);
        }
        else if (exception instanceof common_1.HttpException) {
            this.handleHttpException(exception, object);
        }
        else {
            this.internalError(object);
        }
        res.json(object);
    }
    handleNestError(exception, object) {
        object.message = exception.message.join(' and ');
        object.code = exception.statusCode;
    }
    handleHttpException(exception, object) {
        object.message = exception.message;
        object.code = exception.getStatus();
    }
    internalError(object) {
        object.message = object.message || `internal server error`;
        object.code = 500;
    }
};
exports.AppExceptionsFilter = AppExceptionsFilter;
exports.AppExceptionsFilter = AppExceptionsFilter = __decorate([
    (0, common_1.Catch)()
], AppExceptionsFilter);
//# sourceMappingURL=base-filter.js.map