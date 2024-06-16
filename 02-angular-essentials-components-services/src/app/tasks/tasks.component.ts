import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {User} from "../models/user.model";
import {Task} from "../models/task.model";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input() selectedUser!: User;
  tasks: Task[] = [];

  ngOnInit(): void {
    this.initializeTasks();
    console.log('inicializado');
  }

  private initializeTasks(): void {
    this.tasks = [
      {id: 't1', userId: 'u1', title: 'Master Angular', summary: 'Learn Angular.', dueDate: '2025-12-31'},
      {
        id: 't2',
        userId: 'u2',
        title: 'Build a React App',
        summary: 'Create a React application.',
        dueDate: '2025-10-15'
      },
      {id: 't3', userId: 'u3', title: 'Explore Vue.js', summary: 'Dive into Vue.js.', dueDate: '2025-11-30'},
      {id: 't4', userId: 'u4', title: 'Explore C#', summary: 'Dive into C#.', dueDate: '2025-11-30'},
      {id: 't5', userId: 'u2', title: 'Master Angular', summary: 'Learn Angular.', dueDate: '2025-12-31'},
      {
        id: 't6',
        userId: 'u1',
        title: 'Build a React App',
        summary: 'Create a React application.',
        dueDate: '2025-10-15'
      },
      {id: 't7', userId: 'u2', title: 'Explore Vue.js', summary: 'Dive into Vue.js.', dueDate: '2025-11-30'}
    ];
  }

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.selectedUser.id);
  }

  onCompleteTask($event: Task) {
    console.log(this.tasks)
    this.tasks = this.tasks.filter((task) => task.id !== $event.id);
  }
}
