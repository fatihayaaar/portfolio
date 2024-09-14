import {Component} from "@angular/core";
import {EducationComponent} from "../../components/education/education.component";

@Component({
  selector: 'app-education-layout',
  templateUrl: 'education.layout.html',
  styleUrls: ['education.layout.scss'],
  standalone: true,
  imports: [
    EducationComponent
  ]
})
export class EducationLayout {
  educationList = [{
    name: 'Namik Kemal University',
    logo: 'assets/logo/global-bilgi.jpeg',
    area: 'Computer Engineering',
    degree: 'Bachelor’s Degree',
    gpa: '3.41 / 4',
    startDate: 'Ekim 2020',
    endDate: 'Ağustos 2024',
  }, {
    name: 'Istanbul Beykent University',
    logo: 'assets/logo/gamelab-istanbul.jpeg',
    area: 'Computer Programming',
    degree: 'Associate’s Degree',
    gpa: '3.7 / 4',
    startDate: 'Ekim 2018',
    endDate: 'Haziran 2020',
  }];
}
