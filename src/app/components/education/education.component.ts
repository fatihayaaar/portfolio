import { Component, Input } from '@angular/core';
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
export class EducationComponent {
    @Input() educationList: any[] = [];
}