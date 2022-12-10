import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserAuthService } from './services/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  route: string;

  constructor(location: Location, router: Router) {
    this.route = location.path();
    /* router.events.subscribe((val) => {
      if (location.pathname) {
        this.route = location.pathname;
        console.log(this.route);
      }
    }); */
  }
  ngOnInit() {}
}
