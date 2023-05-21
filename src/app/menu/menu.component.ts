import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedIn: boolean = true;
  userName: string = "user";

  constructor() { }

  ngOnInit(): void {
  }

  logOut(isLogin: boolean): void {
    this.isLoggedIn = isLogin;
  }

}
