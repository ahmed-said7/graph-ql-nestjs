import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class BookType {
  @Field()
  id: string;

  @Field()
  title: string;
}
