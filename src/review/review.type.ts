import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ReviewType {
  @Field()
  id: string;

  @Field()
  text: string;

  @Field()
  rating: number;
}
