import {Component} from "@angular/core";
import {VideoComponent} from "../../components/video/video.component";
import {TranslatePipe} from "../../core/pipe/translate.pipe";

@Component({
    selector: 'app-projects-layout',
    templateUrl: 'projects.layout.html',
    styleUrls: ['projects.layout.scss'],
    standalone: true,
    imports: [
        VideoComponent,
        TranslatePipe
    ]
})
export class ProjectsLayout {
}
