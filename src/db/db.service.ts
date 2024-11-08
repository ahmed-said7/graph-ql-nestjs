import { Injectable } from '@nestjs/common';
import { LessonType } from 'src/lessons/lesson.type';
import { UserType } from 'src/users/user.type';

@Injectable()
export class DbService {
  users: UserType[] = [];
  lessons: LessonType[] = [];
}
