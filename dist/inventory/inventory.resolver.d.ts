import { DbService } from 'src/db/db.service';
import { CreateInventoryDto } from './dto/inventory.create.dto';
import { InventoryDto } from 'src/db/dto/inventory.dto';
export declare class InventoryResolver {
    private DbService;
    constructor(DbService: DbService);
    createInventory(body: CreateInventoryDto): CreateInventoryDto;
    getInventory(): InventoryDto[];
    book(parent: InventoryDto): import("../db/dto/book.dto").BookDto;
}
