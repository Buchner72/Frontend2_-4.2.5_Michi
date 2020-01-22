import {
    Component,
    ViewChild,
    ElementRef,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

import * as _ from 'lodash';

import { Vn } from './_model/vn.model';

@Component({
    selector: 'vn-list',
    templateUrl: 'vn-list.component.html'
})
export class VnListComponent {
    @ViewChild('btnVnUpdate', { read: ElementRef })
    btnVnUpdate: ElementRef;

    @Input()
    modus: string;
    @Input()
    vn: any;
    @Input()
    isEnabledPVn: boolean;
    @Input()
    isEnabledPFp: boolean;
    @Input()
    isEnabledPKv: boolean;
    @Input()
    isEnabledPUv: boolean;
    @Input()
    isEnabledPKfz: boolean;
    @Input()
    isEnabledPHe: boolean;
    @Input()
    isEnabledPRs: boolean;

    @Output()
    onEmitVnUpdate = new EventEmitter<Vn>();
    @Output()
    onEmitVnDelete = new EventEmitter<Vn>();

    public vnUpdate: any;

    constructor() { }

    onUpdate(vn: any) {
        this.vnUpdate = _.cloneDeep(vn);
    }

    onUpdateOk(vn: any) {
        this.vnUpdate = undefined;
        this.onEmitVnUpdate.emit(vn);
    }

    onUpdateCancel() {
        this.vnUpdate = undefined;
        this.onEmitVnUpdate.emit(undefined);
    }

    onDelete() {
        this.onEmitVnDelete.emit();
    }

    doForwardedVnEdit(): void {
        if (this.vnUpdate === undefined) {
            this.btnVnUpdate.nativeElement.click();
        }
    }
}
