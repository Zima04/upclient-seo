import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { zoomInOnEnterAnimation, zoomOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'client-garanties-screen',
  templateUrl: './garanties-screen.component.html',
  styleUrls: ['./garanties-screen.component.scss'],
  animations: [
    zoomInOnEnterAnimation(),
    zoomOutOnLeaveAnimation(),
  ]
})
export class GarantiesScreenComponent implements OnInit {

  state = false;

  constructor(public el: ElementRef) {
  }

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= componentPosition - window.innerHeight / 2) {
      this.state = true;
    } else {
      this.state = false;
    }
  }
}
