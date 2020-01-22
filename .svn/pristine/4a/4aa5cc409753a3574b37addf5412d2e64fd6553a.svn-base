import {
    Component,
    Input,
    OnInit
} from '@angular/core';

import { VertragService } from '../vertrag.service';

import { He } from './_model/he.model';

@Component({
    selector: 'he',
    templateUrl: './he.component.html',
    providers: [VertragService]
})
export class HeComponent implements OnInit {
    @Input() isEnabledPHe: boolean;
    // He
    public isHeEdit: boolean = false;
    public he: He;
    public heNew: He;
    public heUpdate: He;
    //
    public errMsg: string;

    constructor(private vertragService: VertragService) { }

    ngOnInit(): void {
        //this.queryHe();
    }

    // ### He
    // query all He
    //queryHe(): void {
    //    this.vertragService
    //        .queryVp()
    //        .subscribe(
    //            heList => this.heList = heList,
    //            error => this.errMsg = <any>error
    //        );
    //}

    // new He
    //showHeNew(): void {
    //    this.heNew = new He();
    //}

    //hideHeNew(): void {
    //    this.heNew = undefined;
    //}

    //addHe(he: He): void {
    //    this.vertragService
    //        .createVn(he)
    //        .subscribe(
    //            he => this.he = he,
    //            error => this.errMsg = <any>error
    //        )
    //    this.heNew = undefined;
    //}

    // update He
    //showHeUpdate(he: He): void {
    //    this.heUpdate = he;
    //}

    //hideHeUpdate(): void {
    //    this.heUpdate = undefined;
    //}

    //updateHe(he: He): void {
    //    this.vertragService
    //        .updateVn(he)
    //        .subscribe(
    //            he => he,
    //            error => this.errMsg = <any>error
    //        )
    //    this.heUpdate = undefined;
    //}

    // delete He
    //deleteHe(): void {
    //    this.vertragService
    //        .deleteVn()
    //        .subscribe(
    //            he => this.he = he,
    //            error => this.errMsg = <any>error
    //        )
    //}
}