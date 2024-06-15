import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { NgFor } from '@angular/common';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() users: any;
  @Input() selectedUser: any;
  @Output() selectUser = new EventEmitter();

  getImagePath(user: any): string {
    return 'assets/users/' + user.avatar;
  }

  onSelectUser(user: any) {
    this.selectUser.emit(user);
  }
}
