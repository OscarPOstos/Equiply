import { Injectable, NotFoundException } from '@nestjs/common';
import { ScheduleMaintenanceDto } from './dto/schedule-maintenance.dto';

@Injectable()
export class MaintenanceService {
  private maintenanceTasks = []; // Simulación de base de datos.

  getAll() {
    return this.maintenanceTasks;
  }

  schedule(scheduleMaintenanceDto: ScheduleMaintenanceDto) {
    const newTask = {
      id: Date.now().toString(),
      ...scheduleMaintenanceDto,
      status: 'scheduled',
    };
    this.maintenanceTasks.push(newTask);
    return newTask;
  }

  complete(id: string) {
    const taskIndex = this.maintenanceTasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      throw new NotFoundException('Tarea de mantenimiento no encontrada.');
    }
    this.maintenanceTasks[taskIndex].status = 'completed';
    return this.maintenanceTasks[taskIndex];
  }

  getAlerts() {
    return this.maintenanceTasks.filter((task) => task.status === 'scheduled');
  }
}
