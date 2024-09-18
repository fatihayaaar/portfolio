import {Component} from "@angular/core";
import {EducationComponent} from "../../components/education/education.component";
import {TranslatePipe} from "../../core/pipe/translate.pipe";
import {CustomButtonComponent} from "../../components/custom-button/custom-button.component";

@Component({
    selector: 'app-education-layout',
    templateUrl: 'education.layout.html',
    styleUrls: ['education.layout.scss'],
    standalone: true,
    imports: [EducationComponent, TranslatePipe, CustomButtonComponent]
})
export class EducationLayout {
    educationList = [{
        name: 'Namik Kemal University',
        logo: 'assets/logo/namik-kemal-university.jpeg',
        area: 'Computer Engineering',
        degree: 'Bachelor’s Degree',
        startDate: 'Ekim 2020',
        endDate: 'Ağustos 2024',
    }, {
        name: 'Istanbul Beykent University',
        logo: 'assets/logo/beykent-university.jpeg',
        area: 'Computer Programming',
        degree: 'Associate’s Degree',
        startDate: 'Ekim 2018',
        endDate: 'Haziran 2020',
    }, {
        name: 'Beylikdüzü Çok Programlı Anadolu High School',
        logo: 'assets/logo/meb-logo.png',
        area: 'Web technologies',
        degree: "Information technologies",
        startDate: 'Eylül 2014',
        endDate: 'Haziran 2017',
    }];
}
