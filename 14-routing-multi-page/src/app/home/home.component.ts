import {Component} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";
import {User} from "../models/user.model";
import {HeaderComponent} from "../header/header.component";
import {TasksComponent} from "../tasks/tasks.component";
import {UserComponent} from "../user/user.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  users = DUMMY_USERS;
  selectedIdUser?: string;
  selected: boolean = false;

  onSelectUser(id: string) {
    if (this.selectedIdUser === id) {
      this.selected = !this.selected;
      return;
    }
    this.selected = true;
    this.selectedIdUser = id;
  }

  get selectedUser() {
    return <User>this.users.find((user) => user.id === this.selectedIdUser);
  }
}
