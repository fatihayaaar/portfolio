import {Component, Input} from "@angular/core";
import {DownloadButtonComponent} from "../../components/downloand-button/download-button.component";
import {AvatarComponent} from "../../components/avatar/avatar.component";
import {TranslatePipe} from "../../core/pipe/translate.pipe";

@Component({
  selector: 'app-profile-layout',
  templateUrl: 'profile.layout.html',
  styleUrls: ['profile.layout.scss'],
  standalone: true,
    imports: [
        DownloadButtonComponent,
        AvatarComponent,
        TranslatePipe
    ]
})
export class ProfileLayout {
  @Input() fullName: String | undefined;
  @Input() title: String | undefined;
}
