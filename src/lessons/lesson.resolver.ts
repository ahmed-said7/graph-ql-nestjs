import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { CreateLessonDto } from './dto/create.lesson.dto';
import { v1 } from 'uuid';
import { DbService } from 'src/db/db.service';
import { UserType } from 'src/users/user.type';
import { UseGuards } from '@nestjs/common';
import { AuthenticationGuard } from 'src/guards/auth.guard';

@Resolver(() => LessonType)
@UseGuards(AuthenticationGuard)
export class LessonResolver {
  constructor(private DbService: DbService) {}
  @Mutation(() => LessonType)
  createLesson(@Args('body') body: CreateLessonDto) {
    body.id = v1();
    this.DbService.lessons.push(body);
    return body;
  }
  @Query(() => [LessonType]!)
  getLessons() {
    return this.DbService.lessons;
  }
  @ResolveField(() => UserType)
  user(@Parent() parent: LessonType) {
    return this.DbService.users.find((user) => user.id === parent.user);
  }
}
