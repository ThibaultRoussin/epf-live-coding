import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user.model';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(succes => {
      this.users = this.users.filter(user => user.id !== id)
    });
  }

}
