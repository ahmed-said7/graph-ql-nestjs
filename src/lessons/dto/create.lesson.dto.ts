import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateLessonDto {
  @IsString()
  @Field()
  title: string;
  @IsNumber()
  @Field()
  sells: number;
  @IsString()
  @Field()
  user: string;
  id: string;
}
