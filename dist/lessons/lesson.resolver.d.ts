import { LessonType } from './lesson.type';
import { CreateLessonDto } from './dto/create.lesson.dto';
import { DbService } from 'src/db/db.service';
import { UserType } from 'src/users/user.type';
export declare class LessonResolver {
    private DbService;
    constructor(DbService: DbService);
    createLesson(body: CreateLessonDto): CreateLessonDto;
    getLessons(): LessonType[];
    user(parent: LessonType): UserType;
}
