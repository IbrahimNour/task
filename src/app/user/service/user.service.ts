import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/shared/shared.service';
import { User } from '../model/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
     private sharedService: SharedService) { }

  usersList: User[]; // users list data 
  user: User; //single user data
  searchValue: string; //search string 

  //return users list
  getUSerList() {
    return this.http.get( this.sharedService.ipRoot + "/users?page=2");
  }

  //get user by id 
  getUserById(id: number) {
    return this.http.get(this.sharedService.ipRoot + '/users/' + id);
  };

  //update users
  updateUser(id: number, data: User) {
    return this.http.put(this.sharedService.ipRoot + '/users/' + id, data);
  }

  //delete user
  deleteUser(id: number) {
    return this.http.delete(this.sharedService.ipRoot + '/users/' + id);
  }

  //add user 
  addUser(data: User) {
    return this.http.post(this.sharedService.ipRoot + '/users', data);
  }

}
