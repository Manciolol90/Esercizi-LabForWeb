import { Component, inject, Inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList implements OnInit {
  userService = inject(UserService);

  users: User[] = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: any) => {
      console.log(users);
      this.users = users;
    });
  }
}
