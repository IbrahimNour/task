import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  ipRoot: string = 'https://reqres.in/api'; //ip server root 
}
