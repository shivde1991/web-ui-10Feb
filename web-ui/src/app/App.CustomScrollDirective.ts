import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnScroll]'
})
export class OnScrollDirective {
  @Output() scrolled = new EventEmitter();

  constructor(private el: ElementRef) {}

  @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    alert();
    // const element = event.target as HTMLElement;
    // const atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
    // if (atBottom) {
    //   this.scrolled.emit();
    // }
  }
}