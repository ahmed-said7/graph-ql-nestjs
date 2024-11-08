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
exports.LessonResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const lesson_type_1 = require("./lesson.type");
const create_lesson_dto_1 = require("./dto/create.lesson.dto");
const uuid_1 = require("uuid");
const db_service_1 = require("../db/db.service");
const user_type_1 = require("../users/user.type");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../guards/auth.guard");
let LessonResolver = class LessonResolver {
    constructor(DbService) {
        this.DbService = DbService;
    }
    createLesson(body) {
        body.id = (0, uuid_1.v1)();
        this.DbService.lessons.push(body);
        return body;
    }
    getLessons() {
        return this.DbService.lessons;
    }
    user(parent) {
        return this.DbService.users.find((user) => user.id === parent.user);
    }
};
exports.LessonResolver = LessonResolver;
__decorate([
    (0, graphql_1.Mutation)(() => lesson_type_1.LessonType),
    __param(0, (0, graphql_1.Args)('body')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lesson_dto_1.CreateLessonDto]),
    __metadata("design:returntype", void 0)
], LessonResolver.prototype, "createLesson", null);
__decorate([
    (0, graphql_1.Query)(() => [lesson_type_1.LessonType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LessonResolver.prototype, "getLessons", null);
__decorate([
    (0, graphql_1.ResolveField)(() => user_type_1.UserType),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lesson_type_1.LessonType]),
    __metadata("design:returntype", void 0)
], LessonResolver.prototype, "user", null);
exports.LessonResolver = LessonResolver = __decorate([
    (0, graphql_1.Resolver)(() => lesson_type_1.LessonType),
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    __metadata("design:paramtypes", [db_service_1.DbService])
], LessonResolver);
//# sourceMappingURL=lesson.resolver.js.map