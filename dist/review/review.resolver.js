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
exports.ReviewResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const uuid_1 = require("uuid");
const db_service_1 = require("../db/db.service");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../guards/auth.guard");
const review_type_1 = require("./review.type");
const create_review_dto_1 = require("./dto/create.review.dto");
const review_dto_1 = require("../db/dto/review.dto");
const book_type_1 = require("../books/book.type");
let ReviewResolver = class ReviewResolver {
    constructor(DbService) {
        this.DbService = DbService;
    }
    createReview(body) {
        body.id = (0, uuid_1.v4)();
        this.DbService.reviews.push(body);
        return body;
    }
    getReview() {
        return this.DbService.reviews;
    }
    book(parent) {
        return this.DbService.books.find((book) => book.id === parent.book);
    }
};
exports.ReviewResolver = ReviewResolver;
__decorate([
    (0, graphql_1.Mutation)(() => review_type_1.ReviewType),
    __param(0, (0, graphql_1.Args)('body')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_review_dto_1.CreateReviewDto]),
    __metadata("design:returntype", void 0)
], ReviewResolver.prototype, "createReview", null);
__decorate([
    (0, graphql_1.Query)(() => [review_type_1.ReviewType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReviewResolver.prototype, "getReview", null);
__decorate([
    (0, graphql_1.ResolveField)(() => book_type_1.BookType, { nullable: true }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [review_dto_1.ReviewDto]),
    __metadata("design:returntype", void 0)
], ReviewResolver.prototype, "book", null);
exports.ReviewResolver = ReviewResolver = __decorate([
    (0, graphql_1.Resolver)(() => review_type_1.ReviewType),
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    __metadata("design:paramtypes", [db_service_1.DbService])
], ReviewResolver);
//# sourceMappingURL=review.resolver.js.map