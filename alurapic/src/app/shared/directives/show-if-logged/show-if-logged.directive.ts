import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
    selector: '[appShowIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

    constructor(
        private element: ElementRef<any>,
        private rederer: Renderer2,
        private userService: UserService
    ) {}

    ngOnInit() {
        // tslint:disable-next-line:no-unused-expression
        !this.userService.isLogged() && this.rederer.setStyle(this.element.nativeElement, 'display', 'none');
    }
}
