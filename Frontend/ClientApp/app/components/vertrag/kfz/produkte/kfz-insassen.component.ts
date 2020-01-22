import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

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
    selector: 'kfz-insassen',
    templateUrl: 'kfz-insassen.component.html'
})
export class KfzInsassenComponent {
    @Input()
    kfz: any;
    @Input()
    isEdited: boolean;

    @Output()
    emitToggleInsassen = new EventEmitter<Kfz>();

    onToggle(kfz: any) {
        this.emitToggleInsassen.emit(kfz);
    }
}