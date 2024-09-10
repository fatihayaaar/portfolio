import {Component, Input} from "@angular/core";
import {NgIf, NgStyle} from "@angular/common";

@Component({
  selector: "app-avatar-component",
  templateUrl: "avatar.component.html",
  styleUrls: ["avatar.component.scss"],
  standalone: true,
  imports: [
    NgStyle,
    NgIf
  ]
})
export class AvatarComponent {
  @Input() imagePath: string = '';
  @Input() width: string = '100px';
  @Input() height: string = '100px';

  get hasImage(): boolean {
    return !!this.imagePath && this.imagePath.trim() !== '';
  }
}