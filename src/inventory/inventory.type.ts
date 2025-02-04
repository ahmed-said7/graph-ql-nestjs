import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class InventoryType {
  @Field()
  id: string;

  @Field()
  remaining: number;
}
