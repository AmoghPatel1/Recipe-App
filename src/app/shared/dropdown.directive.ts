/**
 * Click Only on the dropdown button to close it.
 */

// import { Directive, HostBinding, HostListener } from "@angular/core";

// @Directive({
//     selector: '[appDropdown]'
// })
// export class DropdownDirective {
//     @HostBinding('class.open') isOpen = false;
//     @HostListener('click') onClick() {
//         this.isOpen = !this.isOpen;
//     }
// }

/**
 * Click anywhere to close the dropdown.
 */

import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";


@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) {}
}