import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [],
  providers: [UserResolver],
  imports: [DbModule],
})
export class UserModule {}
