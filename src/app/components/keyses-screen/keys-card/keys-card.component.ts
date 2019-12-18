import { Component, Input, OnInit } from '@angular/core';
import { KeysCardInterface } from '../../../interface/keys-card.interface';

@Component({
  selector: 'client-keys-card',
  templateUrl: './keys-card.component.html',
  styleUrls: ['./keys-card.component.scss']
})
export class KeysCardComponent implements OnInit {

  @Input() public data: KeysCardInterface;
  constructor() { }

  ngOnInit() {
  }



}
