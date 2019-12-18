import { Component, OnInit } from '@angular/core';
import { KEYSES_DATA } from '../../enums/keyses.data';
import { KeysCardInterface } from '../../interface/keys-card.interface';

@Component({
  selector: 'client-keyses-screen',
  templateUrl: './keyses-screen.component.html',
  styleUrls: ['./keyses-screen.component.scss']
})
export class KeysesScreenComponent implements OnInit {

  constructor() {
  }

  public keysesData: KeysCardInterface[] = KEYSES_DATA;

  ngOnInit() {
  }

}
