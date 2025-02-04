import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateUserDto {
  @IsString()
  @Field()
  name: string;

  @IsString()
  @Field()
  password: string;

  id: string;
}
