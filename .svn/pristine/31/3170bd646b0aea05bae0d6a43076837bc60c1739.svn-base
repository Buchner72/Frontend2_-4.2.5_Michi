import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

import { Vp } from '../vp/_model/vp.model';

@Component({
    selector: 'fp-list',
    templateUrl: 'fp-list.component.html'
})
export class FpListComponent {
    @Input()
    modus: string;
    @Input()
    vpList: any[];

    @Output()
    onEmitVpUpdate = new EventEmitter<Vp>();
    @Output()
    onEmitVpDelete = new EventEmitter<Vp>();

    public vpUpdate: any;

    constructor() { }

    onUpdate(vp: any): void {
        this.vpUpdate = {
            id: 0,
            anrede: 0,
            titel: "",
            vorname: "",
            nachname: "",
            geburtsdatum: null,
            adresse: {
                strasseNr: "",
                plz: "",
                ort: "",
                land: ""
            },
            familienstand: 0,
            kontakt: {
                tel: "",
                mobil: "",
                email: ""
            }
        }
        this.vpUpdate.id = vp.id;
        this.vpUpdate.anrede = vp.anrede;
        this.vpUpdate.titel = vp.titel;
        this.vpUpdate.vorname = vp.vorname;
        this.vpUpdate.nachname = vp.nachname;
        // Date
        if (vp.geburtsdatum != null) {
            this.vpUpdate.geburtsdatum = new Date(vp.geburtsdatum.getFullYear(), vp.geburtsdatum.getMonth(), vp.geburtsdatum.getDate() + 1);
        }
        this.vpUpdate.adresse.strasseNr = vp.adresse.strasseNr;
        this.vpUpdate.adresse.plz = vp.adresse.plz;
        this.vpUpdate.adresse.ort = vp.adresse.ort;
        this.vpUpdate.adresse.land = vp.adresse.land;
        this.vpUpdate.familienstand = vp.familienstand;
        this.vpUpdate.kontakt.tel = vp.kontakt.tel;
        this.vpUpdate.kontakt.mobil = vp.kontakt.mobil;
        this.vpUpdate.kontakt.email = vp.kontakt.email;
    }

    onUpdateOk(vp: any): void {
        this.vpUpdate = undefined;
        this.onEmitVpUpdate.emit(vp);
    }

    onUpdateCancel(): void {
        this.vpUpdate = undefined;
        this.onEmitVpUpdate.emit(undefined);
    }

    onDelete(vp: any): void {
        this.onEmitVpDelete.emit(vp);
    }
}