import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/user/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent {

  currentTab : number = TAB_LIST.HOME;
  tabList = TAB_LIST;

  constructor(private authService: AuthService,
                private router: Router,) { }

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}

const TAB_LIST = {
  HOME : 1,
  PROFILE : 2,
  NEW_REQUEST : 3
};
