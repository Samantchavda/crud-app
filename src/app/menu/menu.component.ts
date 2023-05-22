import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  get isLoggedIn():boolean{
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    return this.authService.currentUser;
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
