import {
    Component,
    Input,
    OnInit
} from '@angular/core';

import { VertragService } from '../vertrag.service';

import { Vp } from '../vp/_model/vp.model';

@Component({
    selector: 'kv',
    templateUrl: './kv.component.html',
    providers: [VertragService]
})
export class KvComponent implements OnInit {
    @Input() isEnabledPKv: boolean;
    // Vp
    public vpList: Vp[];
    public vpNew: Vp;
    public vpUpdate: Vp;
    //
    public errMsg: string;

    constructor(private vertragService: VertragService) { }

    ngOnInit(): void {
        this.queryVp();
    }

    // ### Vp
    // query all Vp
    queryVp(): void {
        this.vertragService
            .queryVp()
            .subscribe(
            vpList => this.vpList = vpList,
            error => this.errMsg = <any>error
            );
    }

    // new Vp
    showVpNew(): void {
        this.vpNew = null;
    }

    hideVpNew(): void {
        this.vpNew = null;
    }

    addVp(vp: Vp): void {
        this.vertragService
            .addVp(vp)
            .subscribe(
            vpList => {
                this.vpList = vpList;
                this.vpNew = null;
            },
            error => this.errMsg = <any>error
            )
    }

    // update Vp
    showVpUpdate(vp: Vp): void {
        this.vpUpdate = vp;
    }

    hideVpUpdate(): void {
        this.vpUpdate = null;
    }

    updateVp(vp: Vp): void {
        this.vertragService
            .updateVp(vp)
            .subscribe(
            vpList => {
                this.vpList = vpList;
                this.vpUpdate = null;
            },
            error => this.errMsg = <any>error
            )
    }

    // delete Vp
    deleteVp(id: string): void {
        this.vertragService
            .deleteVp(id)
            .subscribe(
            vpList => this.vpList = vpList,
            error => this.errMsg = <any>error
            )
    }
}