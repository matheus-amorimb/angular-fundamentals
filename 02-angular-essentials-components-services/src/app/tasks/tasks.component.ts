import {Component, Input} from '@angular/core';
import User from "../user/user.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input() selectedUser!: User;
}