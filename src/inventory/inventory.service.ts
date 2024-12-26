import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInventoryItemDto } from './dto/create-inventory-item.dto';
import { UpdateInventoryItemDto } from './dto/update-inventory-item.dto';

@Injectable()
export class InventoryService {
  private inventory = []; // Simulación de base de datos.

  getAll() {
    return this.inventory;
  }

  add(createInventoryItemDto: CreateInventoryItemDto) {
    const newItem = {
      id: Date.now().toString(),
      ...createInventoryItemDto,
      quantity: createInventoryItemDto.quantity || 0,
    };
    this.inventory.push(newItem);
    return newItem;
  }

  update(id: string, updateInventoryItemDto: UpdateInventoryItemDto) {
    const itemIndex = this.inventory.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      throw new NotFoundException('Item no encontrado.');
    }
    this.inventory[itemIndex] = {
      ...this.inventory[itemIndex],
      ...updateInventoryItemDto,
    };
    return this.inventory[itemIndex];
  }

  getLowStock() {
    return this.inventory.filter((item) => item.quantity <= item.lowStockThreshold);
  }
}
