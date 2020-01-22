import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core'

import * as _ from 'lodash';

import { Vn } from '../vn/_model/vn.model';

import { Kfz } from './_model/kfz.model';
import { Pkw } from './_model/kfz-pkw.model';
import { Lkw } from './_model/kfz-lkw.model';
import { Motorrad } from './_model/kfz-motorrad.model';
import { Moped } from './_model/kfz-moped.model';
import { Dreirad } from './_model/kfz-dreirad.model';
import { VierradKl50 } from './_model/kfz-vierradKl50.model';
import { VierradGr50 } from './_model/kfz-vierradGr50.model';
import { Zugmaschine } from './_model/kfz-zugmaschine.model';
import { Anhaenger } from './_model/kfz-anhaenger.model';

@Component({
    selector: 'kfz-list',
    templateUrl: 'kfz-list.component.html'
})
export class KfzListComponent {
    @Input()
    modus: string;
    @Input()
    vn: any;
    @Input()
    kfzList: any[];
    // Kfz
    @Output()
    emitKfzUpdate = new EventEmitter<Kfz>();
    @Output()
    emitKfzDelete = new EventEmitter<Kfz>();
    // Kfz -> Produkte
    @Output()
    emitToggleHaftpflicht = new EventEmitter<Kfz>();
    @Output()
    emitUpdateHaftpflicht = new EventEmitter<Kfz>();
    @Output()
    emitToggleKasko = new EventEmitter<Kfz>();
    @Output()
    emitUpdateKasko = new EventEmitter<Kfz>();
    @Output()
    emitToggleRechtsschutz = new EventEmitter<Kfz>();
    @Output()
    emitToggleInsassen = new EventEmitter<Kfz>();

    public kfzUpdate: any;
    public isEdited: boolean;
    public hasHaftpflicht: boolean;

    constructor() { }

    onUpdate(kfz: any) {
        switch (kfz.typ) {
            case "Pkw":
                this.kfzUpdate = _.cloneDeep(kfz as Pkw);
                break;
            case "Lkw":
                this.kfzUpdate = _.cloneDeep(kfz as Lkw);
                break;
            case "Motorrad":
                this.kfzUpdate = _.cloneDeep(kfz as Motorrad);
                break;
            case "Moped":
                this.kfzUpdate = _.cloneDeep(kfz as Moped);
                break;
            case "Dreirad":
                this.kfzUpdate = _.cloneDeep(kfz as Dreirad);
                break;
            case "VierradKl50":
                this.kfzUpdate = _.cloneDeep(kfz as VierradKl50);
                break;
            case "VierradGr50":
                this.kfzUpdate = _.cloneDeep(kfz as VierradGr50);
                break;
            case "Zugmaschine":
                this.kfzUpdate = _.cloneDeep(kfz as Zugmaschine);
                break;
            case "Anhaenger":
                this.kfzUpdate = _.cloneDeep(kfz as Anhaenger);
                break;
        }
        // Datumswerte anpassen
        if (Object.prototype.toString.call(this.kfzUpdate.versicherungsbeginn) === '[object Date]') {
            this.kfzUpdate.versicherungsbeginn = new Date(kfz.versicherungsbeginn.getFullYear(), kfz.versicherungsbeginn.getMonth(), kfz.versicherungsbeginn.getDate(), 12);
        } else {
            if (this.kfzUpdate.versicherungsbeginn != null) {
                this.kfzUpdate.versicherungsbeginn = new Date(this.kfzUpdate.versicherungsbeginn.substr(0, 4), this.kfzUpdate.versicherungsbeginn.substr(5, 2), this.kfzUpdate.erstzulassungsDatum.substr(8, 2) + 1, 12);
            }
        }

        if (Object.prototype.toString.call(this.kfzUpdate.erstzulassungsDatum) === '[object Date]') {
            this.kfzUpdate.erstzulassungsDatum = new Date(kfz.erstzulassungsDatum.getFullYear(), kfz.erstzulassungsDatum.getMonth(), kfz.erstzulassungsDatum.getDate(), 12);
        } else {
            if (this.kfzUpdate.erstzulassungsDatum != null) {
                this.kfzUpdate.erstzulassungsDatum = new Date(this.kfzUpdate.erstzulassungsDatum.substr(0, 4), this.kfzUpdate.erstzulassungsDatum.substr(5, 2), this.kfzUpdate.erstzulassungsDatum.substr(8, 2) + 1, 12);
            }
        }

        if (Object.prototype.toString.call(this.kfzUpdate.anmeldeDatum) === '[object Date]') {
            this.kfzUpdate.anmeldeDatum = new Date(kfz.anmeldeDatum.getFullYear(), kfz.anmeldeDatum.getMonth(), kfz.anmeldeDatum.getDate(), 12);
        } else {
            if (this.kfzUpdate.anmeldeDatum != null) {
                this.kfzUpdate.anmeldeDatum = new Date(this.kfzUpdate.anmeldeDatum.substr(0, 4), this.kfzUpdate.anmeldeDatum.substr(5, 2), this.kfzUpdate.anmeldeDatum.substr(8, 2) + 1, 12);
            }
        }
    }

    onOk(kfz: any) {
        this.kfzUpdate = undefined;
        this.emitKfzUpdate.emit(kfz);
    }

    onCancel() {
        this.kfzUpdate = undefined;
        this.emitKfzUpdate.emit(undefined);
    }

    onDelete(kfz: any) {
        this.emitKfzDelete.emit(kfz);
    }

    // all Produkts
    doIsEditedHaftpflicht(value: boolean) {
        this.isEdited = value;
    }

    doIsEditedKasko(value: boolean) {
        this.isEdited = value;
    }

    // Haftpflicht
    doToggleHaftpflicht(kfz: any) {
        this.emitToggleHaftpflicht.emit(kfz);

        this.isEdited = false; //zurücksetzen
    }

    doUpdateHaftpflicht(kfz: any) {
        this.isEdited = false;
        this.emitUpdateHaftpflicht.emit(kfz);
    }

    // Kasko
    doToggleKasko(kfz: any) {
        this.emitToggleKasko.emit(kfz);

        this.isEdited = false; //zurücksetzen
    }

    doUpdateKasko(kfz: any) {
        this.isEdited = false;
        this.emitUpdateKasko.emit(kfz);
    }

    // Rechtsschutz
    doToggleRechtsschutz(kfz: any) {
        this.emitToggleRechtsschutz.emit(kfz);

        this.isEdited = false; //zurücksetzen
    }

    // Insassenunfall
    doToggleInsassen(kfz: any) {
        this.emitToggleInsassen.emit(kfz);

        this.isEdited = false; //zurücksetzen
    }
}