import { Component, OnInit } from '@angular/core';
import { PackagesCardInterface } from '../../interface/packages-card.interface';
import { PACKAGES_DATA } from '../../enums/packages.data';

@Component({
  selector: 'client-packages-screen',
  templateUrl: './packages-screen.component.html',
  styleUrls: ['./packages-screen.component.scss']
})
export class PackagesScreenComponent implements OnInit {

  public packages: PackagesCardInterface[] = PACKAGES_DATA;

  constructor() {
  }

  ngOnInit() {
  }

}
