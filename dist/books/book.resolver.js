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
exports.BookResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const uuid_1 = require("uuid");
const db_service_1 = require("../db/db.service");
const user_type_1 = require("../users/user.type");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../guards/auth.guard");
const book_type_1 = require("./book.type");
const create_book_dto_1 = require("./dto/create.book.dto");
const book_dto_1 = require("../db/dto/book.dto");
const inventory_type_1 = require("../inventory/inventory.type");
const review_type_1 = require("../review/review.type");
const graphql_subscriptions_1 = require("graphql-subscriptions");
let BookResolver = class BookResolver {
    constructor(DbService, pubSub) {
        this.DbService = DbService;
        this.pubSub = pubSub;
    }
    async createBook(body) {
        body.id = (0, uuid_1.v1)();
        this.DbService.books.push(body);
        await this.pubSub.publish('bookAdded', { bookAdded: body });
        return body;
    }
    getBooks() {
        return this.DbService.books;
    }
    user(parent) {
        return this.DbService.users.find((user) => user.id === parent.user);
    }
    inventory(parent) {
        return this.DbService.inventory.find((inventory) => inventory.book === parent.id);
    }
    reviews(parent) {
        const reviews = this.DbService.reviews.filter((review) => review.book === parent.id);
        return reviews;
    }
};
exports.BookResolver = BookResolver;
__decorate([
    (0, graphql_1.Mutation)(() => book_type_1.BookType),
    __param(0, (0, graphql_1.Args)('body')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.CreateBookDto]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "createBook", null);
__decorate([
    (0, graphql_1.Query)(() => [book_type_1.BookType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "getBooks", null);
__decorate([
    (0, graphql_1.ResolveField)(() => user_type_1.UserType),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_dto_1.BookDto]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "user", null);
__decorate([
    (0, graphql_1.ResolveField)(() => inventory_type_1.InventoryType, { nullable: true }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_dto_1.BookDto]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "inventory", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [review_type_1.ReviewType], { nullable: true }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_dto_1.BookDto]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "reviews", null);
exports.BookResolver = BookResolver = __decorate([
    (0, graphql_1.Resolver)(() => book_type_1.BookType),
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    __param(1, (0, common_1.Inject)('PUB_SUB')),
    __metadata("design:paramtypes", [db_service_1.DbService,
        graphql_subscriptions_1.PubSub])
], BookResolver);
//# sourceMappingURL=book.resolver.js.map