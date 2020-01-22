import {
    Component,
    ViewChild,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

import { Marke } from './_eurotax/_model/EutaxMarke.model';
import { Modell } from './_eurotax/_model/EutaxModell.model';
import { Typ } from './_eurotax/_model/EutaxTyp.model';
import { Fahrzeug } from './_eurotax/_model/EutaxFahrzeug.model';

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

import { EurotaxService } from './_eurotax/_service/eurotax.service';

import { EurotaxComponent } from './_eurotax/eurotax.component';

@Component({
    selector: 'kfz-edit',
    templateUrl: 'kfz-edit.component.html',
    providers: [EurotaxService]
})
export class KfzEditComponent {
    @Input()
    modus: string;
    @Input()
    kfz: any;

    @Output()
    onEmitKfz = new EventEmitter<Kfz>();

    @ViewChild(EurotaxComponent)
    private eurotaxComponent: EurotaxComponent;
    //
    public errMsg: string;

    constructor(private eurotaxService: EurotaxService) { }

    // Modus Eurotax/Manuell
    // Parent calls an @ViewChild()
    setModusNatCode(): void {
        this.eurotaxComponent.setModusNatCode();
    }

    setModusMarkeModell(): void {
        this.eurotaxComponent.setModusMarkeModell();
    }

    setModusManuell(): void {
        this.eurotaxComponent.setModusManuell();
    }


    // ###
    onOk(kfz: any): void {
        this.onEmitKfz.emit(kfz);
    }

    onCancel(): void {
        this.onEmitKfz.emit(undefined);
    }
}