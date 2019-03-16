import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Photo } from '../../photo/photo';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
    selector: '[appPhotoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {

    @Input() ownedPhoto: Photo;

    constructor(
        private element: ElementRef<any>,
        private rederer: Renderer2,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.userService
            .getUser()
            .subscribe(user => {
                if (!user || user.id !== this.ownedPhoto.userId) {
                    this.rederer.setStyle(this.element.nativeElement, 'display', 'none');
                }
            });
    }
}
