import { Component, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

const style1 = style({
  opacity: 1,
  transform: "translateY(0)"
})

const style2 = style({
  opacity: 0,
  transform: "translateY(50%)"
})

@Component({
  selector: 'app-pro-package',
  templateUrl: './pro-package.component.html',
  styleUrls: ['./pro-package.component.scss'],
  animations: [
    trigger('foobar', [
      state('show', style1),
      state('hide', style2),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class ProPackageComponent {

  state = 'hide'

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= componentPosition - 850) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }

  }
}
