import {Component, Input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from './dummy-users';
import {TasksComponent} from "./tasks/tasks.component";
import {User} from "./models/user.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedIdUser?: string;
  selected: boolean = true;

  onSelectUser(id: string) {
    if(this.selectedIdUser === id){
      this.selected = !this.selected;
      return;
    }
    this.selected = true;
    this.selectedIdUser = id;
  }

  get selectedUser(){
    return <User>this.users.find((user) => user.id === this.selectedIdUser);
  }
}
