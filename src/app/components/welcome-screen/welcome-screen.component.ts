import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  slideInDownOnEnterAnimation,
  slideInLeftAnimation,
  slideInLeftOnEnterAnimation,
  slideInRightAnimation, slideInRightOnEnterAnimation,
  slideInUpOnEnterAnimation,
  slideOutDownOnLeaveAnimation,
  slideOutLeftOnLeaveAnimation,
  slideOutRightOnLeaveAnimation,
  slideOutUpOnLeaveAnimation
} from 'angular-animations';

@Component({
  selector: 'client-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss'],
  animations: [
    slideInRightOnEnterAnimation(),
    slideInLeftOnEnterAnimation(),
    slideOutLeftOnLeaveAnimation(),
    slideOutRightOnLeaveAnimation(),
  ]
})
export class WelcomeScreenComponent implements OnInit {
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

    if (scrollPosition >= componentPosition) {
      this.state = true;
    } else {
      this.state = false;
    }
  }
}
