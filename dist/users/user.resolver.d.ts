import { CreateUserDto } from './dto/create.user.dto';
import { DbService } from 'src/db/db.service';
import { UserDto } from 'src/db/dto/user.dto';
export declare class UserResolver {
    private DbService;
    constructor(DbService: DbService);
    createUser(body: CreateUserDto): CreateUserDto;
    getUsers(): UserDto[];
    books(parent: UserDto): import("../db/dto/book.dto").BookDto[];
}
