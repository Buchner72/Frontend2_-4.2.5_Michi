import {
    Component,
    ViewChild,
    OnInit
} from '@angular/core';

import { VnComponent } from './vn/vn.component';
//...
import { KfzComponent } from './kfz/kfz.component';

import { VertragService } from './vertrag.service';
import { VertragProgressService } from '../progressbar/vertrag-progress.service';

@Component({
    selector: 'vertrag',
    templateUrl: './vertrag.component.html',
    providers: [VertragService, VertragProgressService],
})
export class VertragComponent implements OnInit {
    @ViewChild(VnComponent)
    private vnComponent: VnComponent;
    //...
    @ViewChild(KfzComponent)
    private kfzComponent: KfzComponent;
    //
    public visibilityFileSelector: boolean;
    // vertrags-funktionen
    public isLoadable: boolean;
    // vertrags-states
    public plattform: string; // muki/tis
    public modus: string;     // angebot/antrag
    public kunde: string;     // privat/firma
    // verfügbare Sparten
    public isAvailablePFp: boolean = false;
    public isAvailablePKv: boolean = false;
    public isAvailablePUv: boolean = false;
    public isAvailablePUvk: boolean = false;
    public isAvailablePKfz: boolean = false;
    public isAvailablePHe: boolean = false;
    public isAvailablePRs: boolean = false;
    public isAvailableGKfz: boolean = false;
    public isAvailableGGeb: boolean = false;
    // gewählte Sparten
    public isEnabledPFp: boolean;
    public isEnabledPKv: boolean;
    public isEnabledPUv: boolean;
    public isEnabledPUvk: boolean;
    public isEnabledPKfz: boolean;
    public isEnabledPHe: boolean;
    public isEnabledPRs: boolean;
    public isEnabledGKfz: boolean;
    public isEnabledGGeb: boolean;
    //
    public vn: any;
    //
    public errMsg: string;
    // Testen
    public modell: string[];

    constructor(private vertragService: VertragService, private vertragProgressService: VertragProgressService) { }

    ngOnInit(): void {
        this.getPlattform();
        this.getModus();
        this.getKunde();
        this.getEnableablePFp();
        this.getEnableablePKv();
        this.getEnableablePUv();
        this.getEnableablePKfz();
        this.getEnableablePHe();
        this.getEnableablePRs();
    }

    // Zum schnellen Testen
    onTest(): void {

    }
    // ### Vertrag laden/speichern
    onReset(): void {
        this.vertragService.reset()
            .subscribe(
                doReset => {
                    // ViewChild
                    this.vnComponent.doReset();
                    // ...unvollständig
                    this.kfzComponent.doReset();
                    // ...unvollständig

                    this.getPlattform();
                    this.getModus();
                    this.getKunde();
                    this.getEnableablePFp();
                    this.getEnableablePKv();
                    this.getEnableablePUv();
                    this.getEnableablePKfz();
                    this.getEnableablePHe();
                    this.getEnableablePRs();

                    this.vnComponent.getVn();
                    //
                    this.kfzComponent.queryKfz();
                },
                error => this.errMsg = <any>error
            );
    }

    onUploadChange(files: FileList): void {
        if (files && files.length > 0) {
            this.isLoadable = true;
        } else {
            this.isLoadable = false;
        }
    }

    onLoadOk(files: any): void {
        this.visibilityFileSelector = false;
        this.isLoadable = false;
        if (files.length > 0) {
            let file: File = files[0];
            this.vertragService.load(file)
                .subscribe(
                    doLoad => {
                        let bol = doLoad;
                        //
                        this.getPlattform();
                        this.getModus();
                        this.getKunde();
                        this.getEnableablePFp();
                        this.getEnableablePKv();
                        this.getEnableablePUv();
                        this.getEnableablePKfz();
                        this.getEnableablePHe();
                        this.getEnableablePRs();
                        // ViewChild
                        this.vnComponent.getVn();
                        // ...unvollständig
                        this.kfzComponent.queryKfz();
                        // ...unvollständig
                    },
                    error => this.errMsg = <any>error
                );
        }
    }

    onSaveOk(): void {
        this.vertragService.save()
            .subscribe(
                doSave => {
                    let bol = doSave;
                },
                error => this.errMsg = <any>error
            );
    }

    // ### Plattform
    getPlattform(): void {
        this.vertragService.getPlattform()
            .subscribe(
                plattform => this.plattform = plattform,
                error => this.errMsg = <any>error
            );
    }

    // ### Modus
    getModus(): void {
        this.vertragService.getModus()
            .subscribe(
                modus => this.modus = modus,
                error => this.errMsg = <any>error
            );
    }

    onSetModus(modus: string): void {
        this.vertragService.setModus(modus)
            .subscribe(
                modus => this.modus = modus,
                error => this.errMsg = <any>error
            );
    }

    // ### Kunde
    getKunde(): void {
        this.vertragService.getKunde()
            .subscribe(
                kunde => this.kunde = kunde,
                error => this.errMsg = <any>error
            );
    }

    onSetKunde(kunde: string): void {
        this.vertragService.setKunde(kunde)
            .subscribe(
                kunde => this.kunde = kunde,
                error => this.errMsg = <any>error
            );
    }

    // ### Sparte Selected
    // Fp
    onToggleEnableablePFp(value: boolean): void {
        this.vertragService.toggleEnableablePFp(value)
            .subscribe(
                isEnabledPFp => {
                    this.isEnabledPFp = isEnabledPFp
                    if (this.vnComponent.vn !== undefined) {
                        if (this.isEnabledPFp == true) {
                            this.vnComponent.doForwardedVnEdit();
                        } else {
                            console.log("Sparte wird deaktiviert und Daten müssen vom Vn gelöscht werden...");
                        }
                    }
                },
                error => this.errMsg = <any>error
            );
    }

    getEnableablePFp(): void {
        this.vertragService.getEnableablePFp()
            .subscribe(
                isEnabledPFp => this.isEnabledPFp = isEnabledPFp,
                error => this.errMsg = <any>error
            );
    }

    // Kv
    onToggleEnableablePKv(value: boolean): void {
        this.vertragService.toggleEnableablePKv(value)
            .subscribe(
                isEnabledPKv => this.isEnabledPKv = isEnabledPKv,
                error => this.errMsg = <any>error
            );
    }

    getEnableablePKv(): void {
        this.vertragService.getEnableablePKv()
            .subscribe(
                isEnabledPKv => this.isEnabledPKv = isEnabledPKv,
                error => this.errMsg = <any>error
            );
    }

    // Uv
    onToggleEnableablePUv(value: boolean): void {
        this.vertragService.toggleEnableablePUv(value)
            .subscribe(
                isEnabledPUv => this.isEnabledPUv = isEnabledPUv,
                error => this.errMsg = <any>error
            );
    }

    getEnableablePUv(): void {
        this.vertragService.getEnableablePUv()
            .subscribe(
                isEnabledPUv => this.isEnabledPUv = isEnabledPUv,
                error => this.errMsg = <any>error
            );
    }

    // Uvk
    onToggleEnableablePUvk(value: boolean): void {
        this.vertragService.toggleEnableablePUvk(value)
            .subscribe(
                isEnabledPUvk => this.isEnabledPUvk = isEnabledPUvk,
                error => this.errMsg = <any>error
            );
    }

    getEnableablePUvk(): void {
        this.vertragService.getEnableablePUvk()
            .subscribe(
            isEnabledPUvk => this.isEnabledPUvk = isEnabledPUvk,
            error => this.errMsg = <any>error
            );
    }

    // Kfz
    onToggleEnableablePKfz(value: boolean): void {
        this.vertragService.toggleEnableablePKfz(value)
            .subscribe(
                isEnabledPKfz => {
                    this.isEnabledPKfz = isEnabledPKfz
                    if (this.vnComponent.vn !== undefined) {
                        if (this.isEnabledPKfz) {
                            this.vnComponent.doForwardedVnEdit();
                        } else {
                            // Sparte deaktiviert -> ListKfz zurücksetzen und neu laden damit Daten wieder mit Server synchron sind
                            this.kfzComponent.queryKfz();
                        }
                    }
                },
                error => this.errMsg = <any>error
            );
    }

    getEnableablePKfz(): void {
        this.vertragService.getEnableablePKfz()
            .subscribe(
                isEnabledPKfz => {
                    this.isEnabledPKfz = isEnabledPKfz;
                },
                error => this.errMsg = <any>error
            );
    }

    // He
    onToggleEnableablePHe(value: boolean): void {
        this.vertragService.toggleEnableablePHe(value)
            .subscribe(
                isEnabledPHe => this.isEnabledPHe = isEnabledPHe,
                error => this.errMsg = <any>error
            );
    }

    getEnableablePHe(): void {
        this.vertragService.getEnableablePHe()
            .subscribe(
                isEnabledPHe => this.isEnabledPHe = isEnabledPHe,
                error => this.errMsg = <any>error
            );
    }

    // Rs
    onToggleEnableablePRs(value: boolean): void {
        this.vertragService.toggleEnableablePRs(value)
            .subscribe(
                isEnabledPRs => this.isEnabledPRs = isEnabledPRs,
                error => this.errMsg = <any>error
            );
    }

    getEnableablePRs(): void {
        this.vertragService.getEnableablePRs()
            .subscribe(
                isEnabledPRs => this.isEnabledPRs = isEnabledPRs,
                error => this.errMsg = <any>error
            );
    }

    // Vn
    doSetVn(vn: any): void {
        this.vn = vn;
    }
}