import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateReviewDto {
  @IsNumber()
  @Field()
  rating: number;

  @IsString()
  @Field()
  text: string;

  @IsString()
  @Field()
  book: string;

  id: string;
}
