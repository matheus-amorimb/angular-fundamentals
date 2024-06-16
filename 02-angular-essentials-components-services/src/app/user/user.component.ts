import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { User } from '../models/user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgFor, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() user!: User;
  @Input() selectedUser!: User;
  @Input() selected!: boolean;
  @Output() selectUser = new EventEmitter();

  getImagePath(user: User): string {
    return 'assets/users/' + user.avatar;
  }

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }
}
