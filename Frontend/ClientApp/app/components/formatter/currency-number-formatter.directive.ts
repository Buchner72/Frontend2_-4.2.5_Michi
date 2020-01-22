import { Directive, HostListener, ElementRef, OnInit } from "@angular/core";
import { CurrencyNumberPipe } from "./currency-number.pipe";

@Directive({ selector: '[currencyNumberFormatter]' })
export class CurrencyNumberFormatterDirective implements OnInit {

    private el: HTMLInputElement;

    constructor(
        private elementRef: ElementRef,
        private currencyNumberPipe: CurrencyNumberPipe
    ) {
        this.el = this.elementRef.nativeElement;
    }

    ngOnInit() {
        if (this.el.value != null && this.el.value != "") {
            this.el.value = this.currencyNumberPipe.transform(this.el.value);
        }
    }

    @HostListener("focus", ["$event.target.value"])
    onFocus(value) {
        if (value != null && this.el.value != "") {
            this.el.value = this.currencyNumberPipe.parse(value);
        }
    }

    @HostListener("blur", ["$event.target.value"])
    onBlur(value) {
        if (value != null && this.el.value != "") {
            this.el.value = this.currencyNumberPipe.transform(value);
        }
    }
}