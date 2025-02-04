import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { InventoryResolver } from './inventory.resolver';

@Module({
  controllers: [],
  providers: [InventoryResolver],
  imports: [DbModule],
})
export class InventoryModule {}
