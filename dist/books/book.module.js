"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModule = void 0;
const common_1 = require("@nestjs/common");
const db_module_1 = require("../db/db.module");
const book_resolver_1 = require("./book.resolver");
const graphql_module_1 = require("../graphql/graphql.module");
let BookModule = class BookModule {
};
exports.BookModule = BookModule;
exports.BookModule = BookModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [book_resolver_1.BookResolver],
        imports: [db_module_1.DbModule, graphql_module_1.GraphqlModule],
        exports: [book_resolver_1.BookResolver],
    })
], BookModule);
//# sourceMappingURL=book.module.js.map