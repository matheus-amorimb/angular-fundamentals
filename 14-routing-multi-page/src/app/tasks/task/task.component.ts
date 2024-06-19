import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() completeTask: EventEmitter<Task> = new EventEmitter<Task>();

  private tasksService = inject(TasksService);

  OnCompleteTask() {
    this.tasksService.removeTask(this.task);
  }
}
