import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import {MatDialog} from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  constructor(public userService: UserService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  //handel delete user
  onhandelDelete(userId: number){
    const index = this.userService.usersList?.findIndex(user => user.id == userId);
    this.userService.deleteUser(userId).subscribe(
      (response) => {
        console.log(response);
        this.userService.usersList?.splice(index, 1);
      },
      (error) => {
        console.log(error);
      }
    )
  };

//open dialog to edit 
  openDialog(user: User) {
    console.log(user);
    this.userService.user = user;
    const dialogRef = this.dialog.open(UserFormComponent);
  }

}
