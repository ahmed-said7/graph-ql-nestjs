import { DbService } from 'src/db/db.service';
import { CreateBookDto } from './dto/create.book.dto';
import { BookDto } from 'src/db/dto/book.dto';
import { PubSub } from 'graphql-subscriptions';
export declare class BookResolver {
    private DbService;
    private pubSub;
    constructor(DbService: DbService, pubSub: PubSub);
    createBook(body: CreateBookDto): Promise<CreateBookDto>;
    getBooks(): BookDto[];
    user(parent: BookDto): import("../db/dto/user.dto").UserDto;
    inventory(parent: BookDto): import("../db/dto/inventory.dto").InventoryDto;
    reviews(parent: BookDto): import("../db/dto/review.dto").ReviewDto[];
}
