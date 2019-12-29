import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public mobileMenuToggle: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  public toggleBurger() {
    this.mobileMenuToggle = !this.mobileMenuToggle;
  }

}
