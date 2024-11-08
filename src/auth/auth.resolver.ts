import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { DbService } from 'src/db/db.service';
import { LoginType } from './auth.type';
import { LoginDto } from './dto/login.auth.dto';
import * as jwt from 'jsonwebtoken';
import { NotFoundException } from '@nestjs/common';

@Resolver()
export class AuthResolver {
  constructor(private DbService: DbService) {}
  @Mutation(() => LoginType)
  login(@Args('body') body: LoginDto) {
    const user = this.DbService.users.find((user) => user.name == body.name);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (user.password != body.password) {
      throw new NotFoundException('Invalid password');
    }
    const token = jwt.sign({ userId: user.id }, 'secret');
    return { user, jwt: token };
  }
}
