"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const user_module_1 = require("./users/user.module");
const auth_module_1 = require("./auth/auth.module");
const base_filter_1 = require("./common/base-filter");
const core_1 = require("@nestjs/core");
const book_module_1 = require("./books/book.module");
const inventory_module_1 = require("./inventory/inventory.module");
const review_module_1 = require("./review/review.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: true,
                driver: apollo_1.ApolloDriver,
                subscriptions: {
                    'graphql-ws': true,
                },
                context: function ({ req, res }) {
                    const headers = req?.headers;
                    console.log(res);
                    return { req, res, headers };
                },
            }),
            book_module_1.BookModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            inventory_module_1.InventoryModule,
            review_module_1.ReviewModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [{ provide: core_1.APP_FILTER, useClass: base_filter_1.AppExceptionsFilter }],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map