import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client-clients-screen',
  templateUrl: './clients-screen.component.html',
  styleUrls: ['./clients-screen.component.scss']
})
export class ClientsScreenComponent implements OnInit {
  slides = [
    {img: 'assets/block-7/logo-minskaya@2x.png'},
    {img: 'assets/block-7/logo-mic@2x.png'},
    {img: 'assets/block-7/logo-ux@2x.png'},
    {img: 'assets/block-7/logo-zrobym@2x.png'},

    {img: 'assets/block-7/logo-1akb@2x.png'},
    {img: 'assets/block-7/logo-falcon@2x.png'},
    {img: 'assets/block-7/logo-zvezda@2x.png'},
    {img: 'assets/block-7/logo-skoda@2x.png'},
  ];
  slideConfig = {'slidesToShow': 1, 'slidesToScroll': 1};

  constructor() {
  }

  ngOnInit() {
  }

}
