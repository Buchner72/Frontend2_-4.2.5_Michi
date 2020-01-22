import { Component, OnInit } from '@angular/core';

import { VertragService } from '../vertrag/vertrag.service';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    providers: [VertragService]
})
export class NavMenuComponent implements OnInit {
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