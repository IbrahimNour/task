import { Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private modalService: BsModalService,
  public userService: UserService) { }
  modalRef: BsModalRef;
  
  @ViewChild('userForm') userForm: NgForm;

  ngOnInit(): void {
  }


  openModal(template: TemplateRef<any>, user: User) {
    this.modalRef = this.modalService.show(template);
  }


  //submitted user 
  onhandelSubmit() {
    const index = this.userService.usersList.findIndex(user => user.id === this.userService.user.id)
    this.userService.usersList[index] = {...this.userService.usersList[index] ,...this.userForm.value};
  }

}
