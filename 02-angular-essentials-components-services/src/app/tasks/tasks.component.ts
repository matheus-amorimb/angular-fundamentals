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
  tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular.',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build a React App',
      summary: 'Create a full-featured React application from scratch.',
      dueDate: '2025-10-15'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Explore Vue.js',
      summary: 'Dive into Vue.js and its ecosystem of tools and libraries.',
      dueDate: '2025-11-30'
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Explore C#',
      summary: 'Dive into C# and its ecosystem of tools and libraries.',
      dueDate: '2025-11-30'
    },
    {
      id: 't1',
      userId: 'u2',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular.',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Build a React App',
      summary: 'Create a full-featured React application from scratch.',
      dueDate: '2025-10-15'
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Explore Vue.js',
      summary: 'Dive into Vue.js and its ecosystem of tools and libraries.',
      dueDate: '2025-11-30'
    }
  ]

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.selectedUser.id)
  }
}
