import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

import { Vp } from '../vp/_model/vp.model';

@Component({
    selector: 'fp-new',
    templateUrl: 'fp-new.component.html'
})
export class FpNewComponent {
    @Input()
    modus: string;
    @Input()
    vp: any;

    @Output()
    onEmitVp = new EventEmitter<Vp>();

    constructor() { }

    onOk(vp: any): void {
        this.onEmitVp.emit(vp);
    }

    onCancel(): void {
        this.onEmitVp.emit(undefined);
    }
}