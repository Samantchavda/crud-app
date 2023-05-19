import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit {

  users: User[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<User>();
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();;
    this.dataSource = new MatTableDataSource<User>(this.users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
