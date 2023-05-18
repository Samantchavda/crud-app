import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  headerText: string = "test";
  users: User[] = [];

  user: User = {
    id: 0,
    name: '',
    email: ''
  };

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      if(id > 0){
        this.user = this.userService.getUser(id);
      }
    });
  }

  saveUser(user: User): void {
    console.log(user);
    if(user.id == 0){
      this.userService.addUser(user);
    }else{
      this.userService.updateUser(user);
    }
    this.router.navigate(['/users']);
  }

}
