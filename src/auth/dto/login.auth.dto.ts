import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class LoginDto {
  @Field()
  @IsString()
  name: string;
  @Field()
  @IsNumber()
  password: number;
}
