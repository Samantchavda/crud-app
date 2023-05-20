import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
    { id: 4, name: 'stive', email: 'stive@example.com' },
    { id: 5, name: 'jack', email: 'jack@example.com' },
    { id: 6, name: 'mark', email: 'mark@example.com' },
    { id: 7, name: 'stella', email: 'stella@example.com' }
  ];

  private user: User = {
    id: 0,
    name: '',
    email: ''
  };
  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User {
    return this.users.find(u => u.id === id) || this.user;
  }

  addUser(user: User): void {
    if (this.users.length > 0) {
      user.id = this.users[this.users.length - 1].id + 1;
    }
    this.users.push(user);
  }

  updateUser(user: User): void {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  deleteUser(id: number): void {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}