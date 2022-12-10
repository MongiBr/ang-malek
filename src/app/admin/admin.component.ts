import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, public userAuthService:UserAuthService) { }

  ngOnInit(): void {
  }
  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/home']);
  }
}
