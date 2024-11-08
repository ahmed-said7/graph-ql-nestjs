import { Field, ObjectType } from '@nestjs/graphql';
import { UserType } from 'src/users/user.type';

@ObjectType()
export class LessonType {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  sells: number;

  @Field(() => UserType)
  user: string;
}
