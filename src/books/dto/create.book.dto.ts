import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateBookDto {
  @IsString()
  @Field()
  title: string;

  @IsString()
  @Field()
  user: string;

  id: string;
}
