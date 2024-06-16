import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { User } from '../models/user.model';
import { Task } from '../models/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input() selectedUser!: User;
  isAddingTask: boolean = false;
  counter: number = 7;

  tasks: Task[] = [];

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.selectedUser.id);
  }

  onCompleteTask($event: Task) {
    this.tasksService.removeTask($event);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
