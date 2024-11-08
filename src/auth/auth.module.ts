import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { AuthResolver } from './auth.resolver';

@Module({
  controllers: [],
  providers: [AuthResolver],
  imports: [DbModule],
})
export class AuthModule {}
