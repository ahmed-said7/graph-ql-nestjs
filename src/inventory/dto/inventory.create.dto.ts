import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateInventoryDto {
  @IsNumber()
  @Field()
  remaining: number;

  @IsString()
  @Field()
  book: string;

  id: string;
}
