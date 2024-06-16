import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() user!: User;
  @Input() selectedUser!: User;
  @Output() selectUser = new EventEmitter();

  getImagePath(user: User): string {
    return 'assets/users/' + user.avatar;
  }

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }
}

export default class User{
  id!: string;
  name!: string;
  avatar!: string;
}
