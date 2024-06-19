import {Component, inject, Input, OnInit} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {User} from '../models/user.model';
import {Task} from '../models/task.model';
import {NewTaskComponent} from './new-task/new-task.component';
import {TasksService} from './tasks.service';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../user/user.service";
import {HeaderComponent} from "../header/header.component";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, HeaderComponent, HomeComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit {
  @Input() selectedUser!: User;
  selectedUserId!: string;
  isAddingTask: boolean = false;
  counter: number = 7;

  tasks: Task[] = [];

  private userService = inject(UserService);

  constructor(private tasksService: TasksService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedUserId = params['userId'];
      this.selectedUser = this.userService.getUserById(this.selectedUserId)
    })
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.selectedUserId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
