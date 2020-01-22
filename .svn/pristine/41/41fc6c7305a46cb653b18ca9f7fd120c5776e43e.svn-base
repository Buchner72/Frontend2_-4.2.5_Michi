import { Component, OnInit } from '@angular/core';

import { VertragService } from '../vertrag/vertrag.service';

@Component({
    selector: 'site-footer',
    templateUrl: './footer.component.html',
    providers: [VertragService]
})
export class FooterComponent implements OnInit {
    public plattform: string; // muki/tis
    //
    public errMsg: string;

    constructor(private vertragService: VertragService) { }

    ngOnInit(): void {
        this.getPlattform();
    }

    // ### Plattform
    getPlattform(): void {
        this.vertragService.getPlattform()
            .subscribe(
                plattform => this.plattform = plattform,
                error => this.errMsg = <any>error
            );
    }
}