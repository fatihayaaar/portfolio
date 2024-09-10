import {Component, HostListener, OnInit} from "@angular/core";
import {NgIf} from "@angular/common";

@Component({
  selector: "app-scroll-to-top-component",
  templateUrl: "scroll-top-top.component.html",
  styleUrls: ["scroll-top-top.component.scss"],
  standalone: true,
  imports: [
    NgIf
  ]
})
export class ScrollTopTopComponent implements OnInit {
  isVisible = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isVisible = window.scrollY > 300;
  }

  ngOnInit() {
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}