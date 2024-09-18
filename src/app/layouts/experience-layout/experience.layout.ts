import {Component} from "@angular/core";
import {ExperienceComponent} from "../../components/experience/experience.component";
import {TranslatePipe} from "../../core/pipe/translate.pipe";
import {CustomButtonComponent} from "../../components/custom-button/custom-button.component";

@Component({
    selector: 'app-experience-layout',
    templateUrl: 'experience.layout.html',
    styleUrls: ['experience.layout.scss'],
    standalone: true,
    imports: [ExperienceComponent, TranslatePipe, CustomButtonComponent]
})
export class ExperienceLayout {
    experienceList = [{
        companyName: 'Turkcell Global Bilgi',
        companyLogo: 'assets/logo/global-bilgi.jpeg',
        isCollapsed: true,
        location: 'İstanbul, Türkiye',
        duration: '7 Ay',
        positions: [{
            title: 'Software Development Long-term Intern',
            startDate: 'Sub 2024',
            endDate: 'Agu 2024',
        }],
    }, {
        companyName: 'Gamelab Istanbul',
        companyLogo: 'assets/logo/gamelab-istanbul.jpeg',
        location: 'İstanbul, Türkiye',
        duration: '3 Ay',
        isCollapsed: true,
        positions: [{
            title: 'Game Programmer Intern',
            startDate: 'Sub 2020',
            endDate: 'May 2020',
        }]
    }, {
        companyName: 'Gamelab Istanbul',
        companyLogo: 'assets/logo/gamelab-istanbul.jpeg',
        location: 'İstanbul, Türkiye',
        duration: '7 Ay',
        isCollapsed: true,
        positions: [{
            title: 'Game Programmer Long-term Intern',
            type: 'Intern',
            startDate: 'Ara 2016',
            endDate: 'Haz 2017',
        }]
    }];
}
