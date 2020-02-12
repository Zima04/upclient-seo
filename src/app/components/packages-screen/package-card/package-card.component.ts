import { Component, Input, OnInit } from '@angular/core';
import { PackagesCardInterface } from '../../../interface/packages-card.interface';
import { MatDialog } from '@angular/material';
import { PopupScreenComponent } from '../../popup-screen/popup-screen.component';

@Component({
  selector: 'client-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss']
})
export class PackageCardComponent implements OnInit {
  @Input() public data: PackagesCardInterface;

  constructor() {
  }

  ngOnInit() {
  }

}
