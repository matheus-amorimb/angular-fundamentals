import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Input() userId!: string;
  @Output() close = new EventEmitter<Task>();
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    let task: Task = {
      id: '',
      userId: this.userId,
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    };

    this.tasksService.addTask(task);
    this.close.emit(task);
  }
}
