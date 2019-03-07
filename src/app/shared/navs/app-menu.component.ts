import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {

  currentTab : number = TAB_LIST.HOME;
  tabList = TAB_LIST;

  constructor() { }

  ngOnInit() {
  }

}

const TAB_LIST = {
  HOME : 1,
  PROFILE : 2,
  NEW_REQUEST : 3
};
