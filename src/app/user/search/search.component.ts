import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public userSer: UserService) { }

  ngOnInit(): void {
  }

}
