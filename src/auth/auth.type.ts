import { Field, ObjectType } from '@nestjs/graphql';
import { UserType } from 'src/users/user.type';

@ObjectType()
export class LoginType {
  @Field(() => UserType)
  user: UserType;
  @Field()
  jwt: string;
}
