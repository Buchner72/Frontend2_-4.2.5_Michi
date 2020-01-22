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
    selector: 'kfz-haftpflicht',
    templateUrl: 'kfz-haftpflicht.component.html'
})
export class KfzHaftpflichtComponent {
    @Input()
    vn: any;
    @Input()
    kfz: any;
    @Input()
    isEdited: boolean;

    @Output()
    emitToggleHaftpflicht = new EventEmitter<Kfz>();
    @Output()
    emitUpdateHaftpflicht = new EventEmitter<Kfz>();
    @Output()
    emitIsEditedHaftpflicht = new EventEmitter<boolean>();

    kfzHaftpflicht: any;

    onToggle(kfz: any) {
        this.emitToggleHaftpflicht.emit(kfz);
    }

    onUpdate(kfz: any) {
        this.emitIsEditedHaftpflicht.emit(true);
        this.kfzHaftpflicht = _.cloneDeep(kfz)
    }

    onOk(kfz: any) {
        this.emitUpdateHaftpflicht.emit(kfz);
        this.kfzHaftpflicht = undefined;
    }

    onCancel() {
        this.emitIsEditedHaftpflicht.emit(false);
        this.kfzHaftpflicht = undefined;
    }
}