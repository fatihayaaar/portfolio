import {Component, HostListener, Input, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss'],
    standalone: true,
    imports: [
        NgForOf,
        NgIf
    ]
})
export class EducationComponent implements OnInit {
    @Input() educationList: any[] = [];
    screenWidth: number = 0;

    ngOnInit(): void {
        this.getScreenWidth();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any): void {
        this.getScreenWidth();
    }

    getScreenWidth(): void {
        this.screenWidth = window.innerWidth;
    }
}