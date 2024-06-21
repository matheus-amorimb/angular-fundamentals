import {Component, inject} from '@angular/core';
import {NgFor} from '@angular/common';
import {User} from '../models/user.model';
import {CardComponent} from '../shared/card/card.component';
import {Router, RouterLink} from "@angular/router";
import {UserService} from "./user.service";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgFor, CardComponent, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  selected!: boolean;
  toUnselect: boolean = false;
  selectedUser!: User;

  userService = inject(UserService);

  constructor(private router: Router) {
  }

  get users(){
    return this.userService.getAll();
  }

  getImagePath(user: User): string {
    return 'assets/users/' + user.avatar;
  }

  onSelectUser(user: User) {
    if(user.id === this.selectedUser?.id){
      this.toUnselect = !this.toUnselect;
      this.router.navigate([''])
      this.selectedUser = {} as User;
      return
    }
    this.router.navigate(['/tasks', user.id]);
    this.selectedUser = user;
    this.toUnselect = false;

  }
}
