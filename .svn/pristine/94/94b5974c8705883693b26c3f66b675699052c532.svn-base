import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

import { Vn } from './_model/vn.model';

@Component({
    selector: 'vn-edit',
    templateUrl: 'vn-edit.component.html'
})
export class VnEditComponent {
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
    onEmitVn = new EventEmitter<Vn>();

    constructor() { }

    onOk(vn: any) {
        this.onEmitVn.emit(vn);
    }

    onCancel() {
        this.onEmitVn.emit(undefined);
    }
}