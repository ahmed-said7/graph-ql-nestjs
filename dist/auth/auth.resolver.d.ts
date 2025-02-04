import { DbService } from 'src/db/db.service';
import { LoginDto } from './dto/login.auth.dto';
export declare class AuthResolver {
    private DbService;
    constructor(DbService: DbService);
    login(body: LoginDto): {
        user: import("../db/dto/user.dto").UserDto;
        jwt: string;
    };
}
