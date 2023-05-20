import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

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
      if (id > 0) {
        this.user = this.userService.getUser(id);
        this.userForm.patchValue({
          name: this.user.name,
          email: this.user.email
        });
      }
    });
  }

  saveUser(): void {
    if (this.userForm.valid && this.userForm.dirty) {
      // Then copy over the values from the form
      // This ensures values not on the form, such as the Id, are retained
      const user: User = { ...this.user, ...this.userForm.value };
      if (user.id == 0) {
        this.userService.addUser(user);
      } else {
        this.userService.updateUser(user);
      }
      this.router.navigate(['/users']);
    };
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
    this.router.navigate(['/users']);
  }
}
