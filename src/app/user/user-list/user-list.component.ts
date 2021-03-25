import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(public userService: UserService) { }

    searchValue: string;

  ngOnInit(): void {
    //get list user 
    this.userService.getUSerList().subscribe(
      (response: any) => {
        console.log(response);
        this.userService.usersList = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
