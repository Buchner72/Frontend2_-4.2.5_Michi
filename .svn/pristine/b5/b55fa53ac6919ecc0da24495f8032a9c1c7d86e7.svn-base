import {
    Component,
    Input,
    OnInit
} from '@angular/core';

import { VertragService } from '../vertrag.service';
import { VertragProgressService } from '../../progressbar/vertrag-progress.service';

import { CurrencyNumberFormatterDirective } from '../../formatter/currency-number-formatter.directive';
import { CurrencyNumberPipe } from '../../formatter/currency-number.pipe';

import { Vp } from '../vp/_model/vp.model';

@Component({
    selector: 'fp',
    templateUrl: './fp.component.html',
    providers: [
        VertragService,
        VertragProgressService
    ]
})
export class FpComponent implements OnInit {
    @Input()
    modus: string;
    @Input()
    isEnabledPFp: boolean;

    public isCollapsed: boolean;

    // Vp
    public vpList: Vp[];
    public vpNew: Vp;
    public vpUpdate?: Vp;
    //
    public errMsg: string;

    constructor(private vertragService: VertragService, private vertragProgressService: VertragProgressService) { }

    ngOnInit(): void {
        this.queryVp();
        this.getCollapse();
    }

    // ### Vp
    reset(): void {
        this.vpList = undefined;
    }

    load(): void {
        this.queryVp();
    }

    // Panel
    getCollapse(): void {
        this.vertragService.getCollapseablePFp()
            .subscribe(
                isCollapsedPFp => {
                    this.isCollapsed = isCollapsedPFp
                },
                error => this.errMsg = <any>error
            );
    }

    onToggleCollapse(): void {
        this.isCollapsed = !this.isCollapsed;
        this.vertragService.toggleCollapseablePFp(this.isCollapsed)
            .subscribe(
                isCollapsedPFp => this.isCollapsed = isCollapsedPFp,
                error => this.errMsg = <any>error
            );
    }
    // query all Vp
    queryVp(): void {
        this.vertragProgressService.increment(50);
        this.vertragService
            .queryVp()
            .subscribe(
                vpList => {
                    this.vertragProgressService.increment(75);
                    this.vpList = vpList;
                    this.vertragProgressService.increment(99);
                    setTimeout(() => { this.vertragProgressService.reset(); }, 250);
                },
                error => this.errMsg = <any>error
            );
    }

    // new Vp
    getVpNew(): void {
        this.vertragProgressService.increment(50);
        //
        this.vpNew = {
            id: 0,
            anrede: 0,
            titel: "",
            vorname: "",
            nachname: "",
            geburtsdatum: new Date(),
            adresse: {
                strasseNr: "",
                plz: "",
                ort: "",
                land: "",
            },
            familienstand: 0,
            kontakt: {
                tel: "",
                mobil: "",
                email: "",
            },
        };
        this.vertragService
            .newVp()
            .subscribe(
                vp => {
                    // Datum
                    //this.vpNew.versicherungsbeginn = new Date(vp.versicherungsbeginn.substr(0, 4), vp.versicherungsbeginn.substr(5, 2) - 1, vp.versicherungsbeginn.substr(8, 2));
                    this.vpNew.id = vp.id;

                    this.vpNew.anrede = vp.anrede;
                    this.vpNew.titel = vp.titel;
                    this.vpNew.vorname = vp.vorname;
                    this.vpNew.nachname = vp.nachname;
                    this.vpNew.geburtsdatum = vp.geburtsdatum;
                    this.vpNew.adresse.strasseNr = vp.adresse.strasseNr;
                    this.vpNew.adresse.plz = vp.adresse.plz;
                    this.vpNew.adresse.ort = vp.adresse.ort;
                    this.vpNew.adresse.land = vp.adresse.land;
                    this.vpNew.familienstand = vp.familienstand;
                    this.vpNew.kontakt.tel = vp.kontakt.tel;
                    this.vpNew.kontakt.mobil = vp.kontakt.mobil;
                    this.vpNew.kontakt.email = vp.kontakt.email;
                    // Antragsfragen
                    //
                },
                error => this.errMsg = <any>error
            );
        //
        this.vertragProgressService.increment(99);
        setTimeout(() => { this.vertragProgressService.reset() }, 250);
    }

    addVp(vp: any): void {
        this.vertragProgressService.increment(50);
        //
        if (vp !== undefined) {
            this.vertragService
                .addVp(vp)
                .subscribe(
                    vpList => {
                        this.vpList = vpList;
                    },
                    error => this.errMsg = <any>error
                )
        }
        // undefined (Cancel)
        this.vpNew = undefined;
        //
        this.vertragProgressService.increment(99);
        setTimeout(() => { this.vertragProgressService.reset(); }, 250);
    }

    updateVp(vp: any): void {
        this.vertragProgressService.increment(50);
        //
        if (vp !== undefined) {
            this.vertragService
                .updateVp(vp)
                .subscribe(
                    vpList => {
                        this.vpList = vpList;
                        this.vpUpdate = null;
                    },
                    error => this.errMsg = <any>error
                )
        } else {
            // undefined (Cancel)
            this.vpUpdate = vp;
        }
        //
        this.vertragProgressService.increment(99);
        setTimeout(() => { this.vertragProgressService.reset(); }, 250);
    }

    // delete Vp
    deleteVp(id: string): void {
        this.vertragProgressService.increment(50);
        //
        this.vertragService
            .deleteVp(id)
            .subscribe(
                vpList => this.vpList = vpList,
                error => this.errMsg = <any>error
            )
        //
        this.vertragProgressService.increment(99);
        setTimeout(() => { this.vertragProgressService.reset(); }, 250);
    }

    createVpList(vpList: any[]): void {
        this.vpList = [];
        vpList.forEach(item => {
            let vp = {
                id: 0,
                anrede: 0,
                titel: "",
                vorname: "",
                nachname: "",
                geburtsdatum: new Date(),
                adresse: {
                    strasseNr: "",
                    plz: "",
                    ort: "",
                    land: "",
                },
                familienstand: 0,
                kontakt: {
                    tel: "",
                    mobil: "",
                    email: "",
                },
            };
            vp.id = item.id;
            vp.anrede = item.anrede;
            vp.titel = item.titel;
            vp.vorname = item.vorname;
            vp.nachname = item.nachname;
            vp.geburtsdatum = item.geburtsdatum;
            vp.adresse.strasseNr = item.adresse.strasseNr;
            vp.adresse.plz = item.adresse.plz;
            vp.adresse.ort = item.adresse.ort;
            vp.adresse.land = item.adresse.land;
            vp.familienstand = item.familienstand;
            vp.kontakt.tel = item.kontakt.tel;
            vp.kontakt.mobil = item.kontakt.mobil;
            vp.kontakt.email = item.kontakt.email;
            //
            this.vpList.push(vp);
        });
    }    
}