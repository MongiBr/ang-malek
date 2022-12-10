import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
session : any;

  constructor() { }
  ngOnInit(): void {
    this.getLocal();
  }
  
getLocal(){
  let user :any = localStorage.getItem('userData');
  this.session = JSON.parse(user)
}

clearLocalStorage(){
  localStorage.removeItem('userData')
}


}
