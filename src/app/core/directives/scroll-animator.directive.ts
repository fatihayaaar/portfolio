import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appScrollAnimator]',
    standalone: true
})
export class ScrollAnimatorDirective {

    @Input() animationType: 'leftToRight' | 'rightToLeft' = 'leftToRight';

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const position = this.el.nativeElement.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom >= 0) {
            this.renderer.addClass(this.el.nativeElement, 'visible');
            if (this.animationType === 'leftToRight') {
                this.renderer.addClass(this.el.nativeElement, 'animate-left-to-right');
            } else if (this.animationType === 'rightToLeft') {
                this.renderer.addClass(this.el.nativeElement, 'animate-right-to-left');
            }
        }
    }
}