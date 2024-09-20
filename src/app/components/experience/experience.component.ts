import {Component, HostListener, Input, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    standalone: true,
    imports: [
        NgForOf,
        NgIf
    ]
})
export class ExperienceComponent implements OnInit {
    @Input() experienceList: any[] = [];
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

    formatDescription(description: string): string {
        return description.replace(/\n/g, '<br>');
    }

    toggleCollapse(index : number): void {
        this.experienceList[index].isCollapsed = !this.experienceList[index].isCollapsed;
    }
}