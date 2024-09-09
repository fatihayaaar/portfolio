import {Component, Input} from "@angular/core";

@Component({
  selector: "app-download-component",
  templateUrl: "download-button.component.html",
  styleUrls: ["download-button.component.scss"],
  standalone: true,
})
export class DownloadButtonComponent {
  @Input() text = "Download";

  download() {

  }
}
