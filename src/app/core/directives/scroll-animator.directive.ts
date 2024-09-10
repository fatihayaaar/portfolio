import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appScrollAnimator]',
    standalone: true,
})
export class ScrollAnimatorDirective {

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const position = this.el.nativeElement.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom >= 0) {
            this.renderer.addClass(this.el.nativeElement, 'visible');
        }
    }
}