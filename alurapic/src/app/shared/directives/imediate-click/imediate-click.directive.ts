import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform.detector.service';

@Directive({
    selector: '[appImediateClick]'
})
export class ImediateClickDirective implements OnInit {

    constructor(
        private element: ElementRef<any>,
        private platformDetectorService: PlatformDetectorService
    ) {}

    ngOnInit() {
        // tslint:disable-next-line:no-unused-expression
        this.platformDetectorService.isPlatformBrowser() && this.element.nativeElement.click();
    }
}
