import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-video-component',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss'],
    standalone: true,
})
export class VideoComponent {
    videoUrl = 'https://www.youtube.com/embed/kME6I3g6qtw?autoplay=1&mute=1';
    sanitizedVideoUrl: SafeResourceUrl;

    constructor(private sanitizer: DomSanitizer) {
        this.sanitizedVideoUrl = this.sanitizeUrl(this.videoUrl);
    }

    sanitizeUrl(url: string): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}