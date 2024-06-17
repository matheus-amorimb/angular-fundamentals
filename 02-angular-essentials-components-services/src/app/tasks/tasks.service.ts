import { Task } from '../models/task.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn Angular.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build a React App',
      summary: 'Create a React application.',
      dueDate: '2025-10-15',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Explore Vue.js',
      summary: 'Dive into Vue.js.',
      dueDate: '2025-11-30',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Explore C#',
      summary: 'Dive into C#.',
      dueDate: '2025-11-30',
    },
    {
      id: 't5',
      userId: 'u2',
      title: 'Master Angular',
      summary: 'Learn Angular.',
      dueDate: '2025-12-31',
    },
    {
      id: 't6',
      userId: 'u1',
      title: 'Build a React App',
      summary: 'Create a React application.',
      dueDate: '2025-10-15',
    },
    {
      id: 't7',
      userId: 'u2',
      title: 'Explore Vue.js',
      summary: 'Dive into Vue.js.',
      dueDate: '2025-11-30',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.saveTasks();
  }

  removeTask(taskToRemove: Task) {
    this.tasks = this.tasks = this.tasks.filter(
      (task) => task.id !== taskToRemove.id,
    );
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
