import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

import * as _ from 'lodash';

import { Kfz } from '../_model/kfz.model';
import { Pkw } from '../_model/kfz-pkw.model';
import { Lkw } from '../_model/kfz-lkw.model';
import { Motorrad } from '../_model/kfz-motorrad.model';
import { Moped } from '../_model/kfz-moped.model';
import { Dreirad } from '../_model/kfz-dreirad.model';
import { VierradKl50 } from '../_model/kfz-vierradKl50.model';
import { VierradGr50 } from '../_model/kfz-vierradGr50.model';
import { Zugmaschine } from '../_model/kfz-zugmaschine.model';
import { Anhaenger } from '../_model/kfz-anhaenger.model';

@Component({
    selector: 'kfz-kasko',
    templateUrl: 'kfz-kasko.component.html'
})
export class KfzKaskoComponent {
    @Input()
    kfz: any;
    @Input()
    isEdited: boolean;

    @Output()
    emitToggleKasko = new EventEmitter<Kfz>();
    @Output()
    emitUpdateKasko = new EventEmitter<Kfz>();
    @Output()
    emitIsEditedKasko = new EventEmitter<boolean>();

    kfzKasko: any;

    onToggle(kfz: any) {
        this.emitToggleKasko.emit(kfz);
    }

    onUpdate(kfz: any) {
        this.emitIsEditedKasko.emit(true);
        this.kfzKasko = _.cloneDeep(kfz)
    }

    onOk(kfz: any) {
        this.emitUpdateKasko.emit(kfz);
        this.kfzKasko = undefined;
    }

    onCancel() {
        this.emitIsEditedKasko.emit(false);
        this.kfzKasko = undefined;
    }
}