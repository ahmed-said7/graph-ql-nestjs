import { UserType } from './user.type';
import { CreateUserDto } from './dto/create.user.dto';
import { DbService } from 'src/db/db.service';
export declare class UserResolver {
  private DbService;
  constructor(DbService: DbService);
  createUser(body: CreateUserDto): CreateUserDto;
  getUsers(): UserType[];
}
