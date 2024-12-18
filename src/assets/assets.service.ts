import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Injectable()
export class AssetsService {
  private assets = []; // Simulación de base de datos.

  getAll() {
    return this.assets;
  }

  getById(id: string) {
    const asset = this.assets.find((a) => a.id === id);
    if (!asset) {
      throw new NotFoundException('Activo no encontrado.');
    }
    return asset;
  }

  create(createAssetDto: CreateAssetDto) {
    const newAsset = { id: Date.now().toString(), ...createAssetDto };
    this.assets.push(newAsset);
    return newAsset;
  }

  update(id: string, updateAssetDto: UpdateAssetDto) {
    const index = this.assets.findIndex((a) => a.id === id);
    if (index === -1) {
      throw new NotFoundException('Activo no encontrado.');
    }
    const updatedAsset = { ...this.assets[index], ...updateAssetDto };
    this.assets[index] = updatedAsset;
    return updatedAsset;
  }

  delete(id: string) {
    const index = this.assets.findIndex((a) => a.id === id);
    if (index === -1) {
      throw new NotFoundException('Activo no encontrado.');
    }
    this.assets.splice(index, 1);
  }
}
