import {
    Component,
    Input,
    OnInit
} from '@angular/core';

import { VertragService } from '../vertrag.service';

import { Rs } from './_model/rs.model';

@Component({
    selector: 'rs',
    templateUrl: './rs.component.html',
    providers: [VertragService]
})
export class RsComponent implements OnInit {
    @Input() isEnabledPRs: boolean;
    // He
    public isRsEdit: boolean = false;
    public rs: Rs;
    public rsNew: Rs;
    public rsUpdate: Rs;
    //
    public errMsg: string;

    constructor(private vertragService: VertragService) { }

    ngOnInit(): void {
        //this.getRs();
    }

    // ### Rs
    //getRs(): void {
    //    this.vertragService
    //        .getVn()
    //        .subscribe(
    //            rs => this.rs = rs,
    //            error => this.errMsg = <any>error
    //        )
    //}

    // new Rs
    //showRsNew(): void {
    //    this.rsNew = new Rs();
    //}

    //hideRsNew(): void {
    //    this.rsNew = undefined;
    //}

    //addRs(rs: Rs): void {
    //    this.vertragService
    //        .createVn(rs)
    //        .subscribe(
    //            rs => this.rs = rs,
    //            error => this.errMsg = <any>error
    //        )
    //    this.rsNew = undefined;
    //}

    // update Vn
    //showRsUpdate(rs: Rs): void {
    //    this.rsUpdate = rs;
    //}

    //hideRsUpdate(): void {
    //    this.rsUpdate = undefined;
    //}

    //updateRs(rs: Rs): void {
    //    this.vertragService
    //        .updateVn(rs)
    //        .subscribe(
    //            rs => rs,
    //            error => this.errMsg = <any>error
    //        )
    //    this.rsUpdate = undefined;
    //}

    // delete Vn
    //deleteRs(): void {
    //    this.vertragService
    //        .deleteVn()
    //        .subscribe(
    //            rs => this.rs = rs,
    //            error => this.errMsg = <any>error
    //        )
    //}
}