import { Injectable, NotFoundException } from '@nestjs/common';
import { AssignAssetDto } from './dto/assign-asset.dto';
import { ReturnAssetDto } from './dto/return-asset.dto';

@Injectable()
export class AssignmentsService {
  private assignments = []; // Simulación de base de datos.

  assign(assignAssetDto: AssignAssetDto) {
    const assignment = {
      id: Date.now().toString(),
      assetId: assignAssetDto.assetId,
      assignedTo: assignAssetDto.assignedTo,
      assignmentDate: new Date(),
      returnDate: null,
    };
    this.assignments.push(assignment);
    return assignment;
  }

  return(returnAssetDto: ReturnAssetDto) {
    const assignment = this.assignments.find(
      (a) => a.assetId === returnAssetDto.assetId && !a.returnDate,
    );
    if (!assignment) {
      throw new NotFoundException('Asignación no encontrada.');
    }
    assignment.returnDate = new Date();
    return assignment;
  }

  getHistory(assetId: string) {
    const history = this.assignments.filter((a) => a.assetId === assetId);
    if (history.length === 0) {
      throw new NotFoundException('Activo no encontrado.');
    }
    return history;
  }
}