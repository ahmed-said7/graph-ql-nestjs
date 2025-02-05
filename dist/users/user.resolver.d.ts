import { CreateUserDto } from './dto/create.user.dto';
import { DbService } from 'src/db/db.service';
import { UserDto } from 'src/db/dto/user.dto';
import { PubSub } from 'graphql-subscriptions';
export declare class UserResolver {
  private DbService;
  private pubSub;
  constructor(DbService: DbService, pubSub: PubSub);
  createUser(body: CreateUserDto): CreateUserDto;
  getUsers(): UserDto[];
  books(parent: UserDto): import('../db/dto/book.dto').BookDto[];
  bookAdded(): import('graphql-subscriptions/dist/pubsub-async-iterable-iterator').PubSubAsyncIterableIterator<unknown>;
}
