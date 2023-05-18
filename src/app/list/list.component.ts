import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  updateUser(user: User): void {
    this.router.navigate(['/users', user.id]);
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
    this.users = this.userService.getUsers();
  }

}
