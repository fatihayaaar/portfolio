import {Component, Input} from "@angular/core";
import {DownloadButtonComponent} from "../../components/downloand-button/download-button.component";
import {AvatarComponent} from "../../components/avatar/avatar.component";

@Component({
  selector: 'app-profile-layout',
  templateUrl: 'profile.layout.html',
  styleUrls: ['profile.layout.scss'],
  standalone: true,
    imports: [
        DownloadButtonComponent,
        AvatarComponent
    ]
})
export class ProfileLayout {
  @Input() fullName: String | undefined;
  @Input() title: String | undefined;
}
