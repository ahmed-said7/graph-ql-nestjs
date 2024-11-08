import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [],
  providers: [LessonResolver],
  imports: [DbModule],
})
export class LessonModule {}
