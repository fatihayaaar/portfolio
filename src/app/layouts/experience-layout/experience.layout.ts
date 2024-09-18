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
            description: '• GPT application interface development with Angular\n' +
                '• API improvements for use in on-premises applications with Java Spring\n' +
                '• Fix datasets for AI models\n' +
                '• Conducting performance tests for the STT system\n' +
                '• Literature research\n' +
                '• Making screen designs with Angular',
        }]
    }, {
        companyName: 'Gamelab Istanbul',
        companyLogo: 'assets/logo/gamelab-istanbul.jpeg',
        location: 'İstanbul, Türkiye',
        duration: '11 Ay',
        isCollapsed: true,
        positions: [{
            title: 'Game Programmer Intern',
            startDate: 'Sub 2020',
            endDate: 'May 2020',
            description: '• Mobile game developments on 3D game engine written in C++\n' +
                '• Bug detection in the game written in Java',
        }, {
            title: 'Game Programmer Long-term Intern',
            type: 'Intern',
            startDate: 'Ara 2016',
            endDate: 'Haz 2017',
            description: '• Mobile game developments in 2D game engine written in Java\n' +
                '• Creating game graphics with Photoshop\n',
        }]
    }];
}
