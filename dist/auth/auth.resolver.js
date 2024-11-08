'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.AuthResolver = void 0;
const graphql_1 = require('@nestjs/graphql');
const db_service_1 = require('../db/db.service');
const auth_type_1 = require('./auth.type');
const login_auth_dto_1 = require('./dto/login.auth.dto');
const jwt = require('jsonwebtoken');
const common_1 = require('@nestjs/common');
let AuthResolver = class AuthResolver {
  constructor(DbService) {
    this.DbService = DbService;
  }
  login(body) {
    const user = this.DbService.users.find((user) => user.name == body.name);
    if (!user) {
      throw new common_1.NotFoundException('User not found');
    }
    if (user.password != body.password) {
      throw new common_1.NotFoundException('Invalid password');
    }
    const token = jwt.sign({ userId: user.id }, 'secret');
    return { user, jwt: token };
  }
};
exports.AuthResolver = AuthResolver;
__decorate(
  [
    (0, graphql_1.Mutation)(() => auth_type_1.LoginType),
    __param(0, (0, graphql_1.Args)('body')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [login_auth_dto_1.LoginDto]),
    __metadata('design:returntype', void 0),
  ],
  AuthResolver.prototype,
  'login',
  null,
);
exports.AuthResolver = AuthResolver = __decorate(
  [
    (0, graphql_1.Resolver)(),
    __metadata('design:paramtypes', [db_service_1.DbService]),
  ],
  AuthResolver,
);
//# sourceMappingURL=auth.resolver.js.map
