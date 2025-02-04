"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const uuid_1 = require("uuid");
const user_type_1 = require("./user.type");
const create_user_dto_1 = require("./dto/create.user.dto");
const db_service_1 = require("../db/db.service");
const book_type_1 = require("../books/book.type");
const user_dto_1 = require("../db/dto/user.dto");
let UserResolver = class UserResolver {
    constructor(DbService) {
        this.DbService = DbService;
    }
    createUser(body) {
        body.id = (0, uuid_1.v1)();
        this.DbService.users.push(body);
        return body;
    }
    getUsers() {
        return this.DbService.users;
    }
    books(parent) {
        const books = this.DbService.books.filter((book) => book.user === parent.id);
        return books;
    }
};
exports.UserResolver = UserResolver;
__decorate([
    (0, graphql_1.Mutation)(() => user_type_1.UserType),
    __param(0, (0, graphql_1.Args)('body')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Query)(() => [user_type_1.UserType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "getUsers", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [book_type_1.BookType], { nullable: true }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "books", null);
exports.UserResolver = UserResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_type_1.UserType),
    __metadata("design:paramtypes", [db_service_1.DbService])
], UserResolver);
//# sourceMappingURL=user.resolver.js.map