import {Injectable} from "@angular/core";
import {DUMMY_USERS} from "../dummy-users";
import {User} from "../models/user.model";

@Injectable({providedIn: 'root'})
export class UserService {

  users: User[] = DUMMY_USERS;

  getUserById(id: string): User {
    return this.users.find(u => u.id === id) as User;
  }

  getAll(): User[] {
    return this.users;
  }

}
