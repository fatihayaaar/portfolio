import {Component, EventEmitter, Input, Output} from "@angular/core";
import {DownloadButtonComponent} from "../../components/downloand-button/download-button.component";
import {AvatarComponent} from "../../components/avatar/avatar.component";
import {TranslatePipe} from "../../core/pipe/translate.pipe";
import {NgClass} from "@angular/common";

@Component({
    selector: 'app-profile-layout',
    templateUrl: 'profile.layout.html',
    styleUrls: ['profile.layout.scss'],
    standalone: true,
    imports: [DownloadButtonComponent, AvatarComponent, TranslatePipe, NgClass]
})
export class ProfileLayout {
    @Input() fullName: String | undefined;
    @Input() title: String | undefined;
    @Input() description: string = "";
    @Output() showPdfOnClick = new EventEmitter();
    imageLoaded = false;

    showPdf() {
        this.showPdfOnClick.emit();
    }

    downloadFile(fileName: string): void {
        const link = document.createElement('a');
        link.href = `assets/${fileName}`;
        link.download = fileName;
        link.click();
    }

    formatDescription(description: string): string {
        return description.replace(/\n/g, '<br>');
    }

    onImageLoad() {
        this.imageLoaded = true;
    }
}
