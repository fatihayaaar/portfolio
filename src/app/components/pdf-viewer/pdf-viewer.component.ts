import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as pdfjsLib from 'pdfjs-dist';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  standalone: true,
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {
  @ViewChild('pdfContainer', { static: true }) pdfContainer!: ElementRef<HTMLDivElement>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { url: string }) {}

  ngOnInit() {
    (pdfjsLib as any).GlobalWorkerOptions.workerSrc = 'assets/pdf.worker.min.js';
    this.loadPdf(this.data.url);
  }

  loadPdf(url: string) {
    const loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then((pdf: any) => {
      const numPages = pdf.numPages;

      const pdfPagesDiv = this.pdfContainer.nativeElement.querySelector('.pdf-pages')!;
      pdfPagesDiv.innerHTML = '';

      for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
        pdf.getPage(pageNumber).then((page: any) => {
          const canvas = document.createElement('canvas');
          pdfPagesDiv.appendChild(canvas);
          this.renderPage(page, canvas);
        });
      }
    });
  }

  renderPage(page: any, canvas: HTMLCanvasElement) {
    const context = canvas.getContext('2d')!;
    const scale = this.pdfContainer.nativeElement.clientWidth / page.getViewport({ scale: 0.6 }).width;
    const viewport = page.getViewport({ scale });

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    page.render(renderContext);

    canvas.style.width = '100%';
  }
}