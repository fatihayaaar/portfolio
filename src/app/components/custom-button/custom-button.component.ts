import {Component, Input} from "@angular/core";

@Component({
  selector: "app-custom-button-component",
  templateUrl: "custom-button.component.html",
  styleUrls: ["custom-button.component.scss"],
  standalone: true,
})
export class CustomButtonComponent {
  @Input() text = "Download";

  onClick() {

  }
}
