import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cleric-eshop-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() menus = [];

  constructor() { }

  ngOnInit(): void {
  }

}
