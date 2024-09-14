import { Component, Input } from '@angular/core';
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
export class ExperienceComponent {
    @Input() experienceList: any[] = [];

    formatDescription(description: string): string {
        return description.replace(/\n/g, '<br>');
    }

    toggleCollapse(index : number): void {
        this.experienceList[index].isCollapsed = !this.experienceList[index].isCollapsed;
    }
}