import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import {
  zoomInOnEnterAnimation, zoomOutOnLeaveAnimation
} from 'angular-animations';

@Component({
  selector: 'client-why-screen',
  templateUrl: './why-screen.component.html',
  styleUrls: ['./why-screen.component.scss'],
  animations: [
    zoomInOnEnterAnimation(),
    zoomOutOnLeaveAnimation(),
  ]
})
export class WhyScreenComponent implements OnInit {

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
