import {
    Component,
    Input,
    OnInit,
    OnChanges
} from '@angular/core';

import { VertragService } from '../vertrag.service';
import { VertragProgressService } from '../../progressbar/vertrag-progress.service';

import { CurrencyNumberFormatterDirective } from '../../formatter/currency-number-formatter.directive';
import { CurrencyNumberPipe } from '../../formatter/currency-number.pipe';

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
    selector: 'kfz',
    templateUrl: './kfz.component.html',
    providers: [
        VertragService,
        CurrencyNumberPipe
    ]
})
export class KfzComponent implements OnInit, OnChanges {
    @Input()
    modus: string;
    @Input()
    isEnabledPKfz: boolean;
    @Input()
    vn: any;

    public isCollapsed: boolean;

    // Kfz
    public kfzList: Kfz[];
    public kfzNew: any;
    public kfzUpdate: any;
    //
    public errMsg: string;

    constructor(private vertragService: VertragService, private vertragProgressService: VertragProgressService) { }

    ngOnInit(): void {
        this.queryKfz();
        this.getCollapseable();
    }

    ngOnChanges(): void {
        // Änderungen von Vn übernehmen
        this.queryKfz();
    }

    // ### Kfz
    doReset(): void {
        this.kfzList = undefined;
        this.kfzNew = undefined;
        this.kfzUpdate = undefined;
    }

    // Panel
    getCollapseable(): void {
        this.vertragService.getCollapseablePKfz()
            .subscribe(
                isCollapsedPKfz => {
                    this.isCollapsed = isCollapsedPKfz
                },
                error => this.errMsg = <any>error
            );
    }

    onToggleCollapseable(): void {
        this.isCollapsed = !this.isCollapsed;
        this.vertragService.toggleCollapseablePKfz(this.isCollapsed)
            .subscribe(
                isCollapsedPKfz => this.isCollapsed = isCollapsedPKfz,
                error => this.errMsg = <any>error
            );
    }

    // query all Kfz
    queryKfz(): void {
        this.vertragProgressService.increment(50);
        this.vertragService
            .queryKfz()
            .subscribe(
                kfzList => {
                    this.vertragProgressService.increment(75);
                    this.kfzList = kfzList;
                    this.vertragProgressService.increment(99);
                    setTimeout(() => { this.vertragProgressService.reset(); }, 250);
                },
                error => this.errMsg = <any>error
            );
    }

    // new Kfz
    onKfzNew(typ: string): void {
        this.vertragProgressService.increment(50);
        //
        switch (typ) {
            case "Pkw":
                this.kfzNew = {
                    id: 0,
                    // Kfz
                    vertrag: 0,
                    fahrzeug: 0,
                    polNr: "",
                    versicherungsbeginn: new Date(),
                    wunschhauptfaelligkeit: "",
                    eingabeArt: "3",
                    nationalCode: "",
                    typ: "Pkw",
                    marke: "",
                    modell: "",
                    kennzeichen: "",
                    vbnr: "",
                    fahrgestellNr: "",
                    erstzulassungsDatum: null,
                    anmeldeDatum: null,
                    // Pkw
                    antrieb: "",
                    leistung: 0,
                    listenpreis: "",
                    sonderausstattung: "",
                    bonusstufe: "",
                    hasKat: false,
                    hasSitze7Plus: false,
                    isOldtimer: false,
                    isSteuerbefreit: false,
                    // Antragsfragen
                    antragsfragen: {
                        isBonusMalus: 0,
                        bonusMalusVersicherer: "",
                        bonusMalusPolNr: "",
                        bonusMalusBeendetAm: "",
                        bonusMalusWegen: "",

                        isKasko: 0,
                        kaskoGrund: "",
                        kaskoHasSchaden: false,
                        kaskoSchadenWelche: "",

                        hasVinkulierung: false,
                        vinkulierungZuGunsten: "",

                        isAbgelehnt: 0,
                        abgelehntGrund: "",
                        abgelehntUnternehmen: "",
                    },
                };
                this.vertragService
                    .getKfzNew("Pkw")
                    .subscribe(
                        pkw => {
                            this.kfzNew.id = pkw.id;

                            this.kfzNew.vertrag = pkw.vertrag;
                            this.kfzNew.fahrzeug = pkw.fahrzeug;
                            this.kfzNew.polNr = pkw.polNr;
                            // Datum
                            this.kfzNew.versicherungsbeginn = new Date(pkw.versicherungsbeginn.substr(0, 4), pkw.versicherungsbeginn.substr(5, 2) - 1, pkw.versicherungsbeginn.substr(8, 2), 12);
                            this.kfzNew.wunschhauptfaelligkeit = pkw.wunschhauptfaelligkeit;
                            this.kfzNew.eingabeArt = pkw.eingabeArt;
                            this.kfzNew.nationalCode = pkw.nationalCode;
                            this.kfzNew.typ = pkw.typ;
                            this.kfzNew.marke = pkw.marke;
                            this.kfzNew.modell = pkw.modell;
                            this.kfzNew.kennzeichen = pkw.kennzeichen;
                            this.kfzNew.vbnr = pkw.vbnr;
                            this.kfzNew.fahrgestellNr = pkw.fahrgestellNr;
                            // Datum
                            this.kfzNew.erstzulassungsDatum = pkw.erstzulassungsDatum; // Ist immer Null
                            // Datum
                            this.kfzNew.anmeldeDatum = pkw.anmeldeDatum; // Ist immer Null
                            this.kfzNew.antrieb = pkw.antrieb;
                            this.kfzNew.leistung = pkw.leistung;
                            this.kfzNew.listenpreis = pkw.listenpreis;
                            this.kfzNew.sonderausstattung = pkw.sonderausstattung;
                            this.kfzNew.bonusstufe = pkw.bonusstufe;
                            this.kfzNew.hasKat = pkw.hasKat;
                            this.kfzNew.hasSitze7Plus = pkw.hasSitze7Plus;
                            this.kfzNew.isOldtimer = pkw.isOldtimer;
                            this.kfzNew.isSteuerbefreit = pkw.isSteuerbefreit;
                            // Antragsfragen
                            // BonusMalus
                            this.kfzNew.antragsfragen.isBonusMalus = pkw.antragsfragen.isBonusMalus;
                            this.kfzNew.antragsfragen.bonusMalusVersicherer = pkw.antragsfragen.bonusMalusVersicherer;
                            this.kfzNew.antragsfragen.bonusMalusPolNr = pkw.antragsfragen.bonusMalusPolNr;
                            this.kfzNew.antragsfragen.bonusMalusBeendetAm = pkw.antragsfragen.bonusMalusBeendetAm;
                            this.kfzNew.antragsfragen.bonusMalusWegen = pkw.antragsfragen.bonusMalusWegen;
                            // Kasko Schaden
                            this.kfzNew.antragsfragen.isKasko = pkw.antragsfragen.isKasko;
                            this.kfzNew.antragsfragen.kaskoGrund = pkw.antragsfragen.kaskoGrund;
                            this.kfzNew.antragsfragen.kaskoHasSchaden = pkw.antragsfragen.kaskoHasSchaden;
                            this.kfzNew.antragsfragen.kaskoSchadenWelche = pkw.antragsfragen.kaskoSchadenWelche;
                            // Vinkulierung
                            this.kfzNew.antragsfragen.hasVinkulierung = pkw.antragsfragen.hasVinkulierung;
                            this.kfzNew.antragsfragen.vinkulierungZuGunsten = pkw.antragsfragen.vinkulierungZuGunsten;
                            // Versicherung abgelehnt
                            this.kfzNew.antragsfragen.isAbgelehnt = pkw.antragsfragen.isAbgelehnt;
                            this.kfzNew.antragsfragen.abgelehntGrund = pkw.antragsfragen.abgelehntGrund;
                            this.kfzNew.antragsfragen.abgelehntUnternehmen = pkw.antragsfragen.abgelehntUnternehmen;
                        },
                        error => this.errMsg = <any>error
                    );
                break;
            case "Lkw":
                this.kfzNew = {
                    id: 0,
                    // Kfz
                    vertrag: 0,
                    fahrzeug: 0,
                    polNr: "",
                    versicherungsbeginn: new Date(),
                    wunschhauptfaelligkeit: "",
                    eingabeArt: "3",
                    nationalCode: "",
                    typ: "Lkw",
                    marke: "",
                    modell: "",
                    kennzeichen: "",
                    vbnr: "",
                    fahrgestellNr: "",
                    erstzulassungsDatum: null,
                    anmeldeDatum: null,
                    // Lkw
                    antrieb: "",
                    leistung: 0,
                    nutzlast: 0,
                    gesamtgewicht: 0,
                    listenpreis: "",
                    sonderausstattung: "",
                    bonusstufe: 0,
                    isSteuerbefreit: false,
                    // Antragsfragen
                    antragsfragen: {
                        isBonusMalus: 0,
                        bonusMalusVersicherer: "",
                        bonusMalusPolNr: "",
                        bonusMalusBeendetAm: "",
                        bonusMalusWegen: "",

                        isKasko: 0,
                        kaskoGrund: "",
                        kaskoHasSchaden: false,
                        kaskoSchadenWelche: "",

                        hasVinkulierung: false,
                        vinkulierungZuGunsten: "",

                        isAbgelehnt: 0,
                        abgelehntGrund: "",
                        abgelehntUnternehmen: "",
                    },
                };
                this.vertragService
                    .getKfzNew("Lkw")
                    .subscribe(
                        lkw => {
                            this.kfzNew.id = lkw.id;

                            this.kfzNew.vertrag = lkw.vertrag;
                            this.kfzNew.fahrzeug = lkw.fahrzeug;
                            this.kfzNew.polNr = lkw.polNr;
                            // Datum
                            this.kfzNew.versicherungsbeginn = new Date(lkw.versicherungsbeginn.substr(0, 4), lkw.versicherungsbeginn.substr(5, 2) - 1, lkw.versicherungsbeginn.substr(8, 2), 12);
                            this.kfzNew.wunschhauptfaelligkeit = lkw.wunschhauptfaelligkeit;
                            this.kfzNew.eingabeArt = lkw.eingabeArt;
                            this.kfzNew.nationalCode = lkw.nationalCode;
                            this.kfzNew.typ = lkw.typ;
                            this.kfzNew.marke = lkw.marke;
                            this.kfzNew.modell = lkw.modell;
                            this.kfzNew.kennzeichen = lkw.kennzeichen;
                            this.kfzNew.vbnr = lkw.vbnr;
                            this.kfzNew.fahrgestellNr = lkw.fahrgestellNr;
                            // Datum
                            this.kfzNew.erstzulassungsDatum = lkw.erstzulassungsDatum; // Ist immer Null
                            // Datum
                            this.kfzNew.anmeldeDatum = lkw.anmeldeDatum; // Ist immer Null
                            this.kfzNew.antrieb = lkw.antrieb;
                            this.kfzNew.leistung = lkw.leistung;
                            this.kfzNew.nutzlast = lkw.nutzlast;
                            this.kfzNew.gesamtgewicht = lkw.gesamtgewicht;
                            this.kfzNew.listenpreis = lkw.listenpreis;
                            this.kfzNew.sonderausstattung = lkw.sonderausstattung;
                            this.kfzNew.bonusstufe = lkw.bonusstufe;
                            this.kfzNew.isSteuerbefreit = lkw.isSteuerbefreit;
                            // Antragsfragen
                            // BonusMalus
                            this.kfzNew.antragsfragen.isBonusMalus = lkw.antragsfragen.isBonusMalus;
                            this.kfzNew.antragsfragen.bonusMalusVersicherer = lkw.antragsfragen.bonusMalusVersicherer;
                            this.kfzNew.antragsfragen.bonusMalusPolNr = lkw.antragsfragen.bonusMalusPolNr;
                            this.kfzNew.antragsfragen.bonusMalusBeendetAm = lkw.antragsfragen.bonusMalusBeendetAm;
                            this.kfzNew.antragsfragen.bonusMalusWegen = lkw.antragsfragen.bonusMalusWegen;
                            // Kasko Schaden
                            this.kfzNew.antragsfragen.isKasko = lkw.antragsfragen.isKasko;
                            this.kfzNew.antragsfragen.kaskoGrund = lkw.antragsfragen.kaskoGrund;
                            this.kfzNew.antragsfragen.kaskoHasSchaden = lkw.antragsfragen.kaskoHasSchaden;
                            this.kfzNew.antragsfragen.kaskoSchadenWelche = lkw.antragsfragen.kaskoSchadenWelche;
                            // Vinkulierung
                            this.kfzNew.antragsfragen.hasVinkulierung = lkw.antragsfragen.hasVinkulierung;
                            this.kfzNew.antragsfragen.vinkulierungZuGunsten = lkw.antragsfragen.vinkulierungZuGunsten;
                            // Versicherung abgelehnt
                            this.kfzNew.antragsfragen.isAbgelehnt = lkw.antragsfragen.isAbgelehnt;
                            this.kfzNew.antragsfragen.abgelehntGrund = lkw.antragsfragen.abgelehntGrund;
                            this.kfzNew.antragsfragen.abgelehntUnternehmen = lkw.antragsfragen.abgelehntUnternehmen;
                        },
                        error => this.errMsg = <any>error
                    );
                break;
            case "Motorrad":
                this.kfzNew = {
                    id: 0,
                    // Kfz
                    vertrag: 0,
                    fahrzeug: 0,
                    polNr: "",
                    versicherungsbeginn: new Date(),
                    wunschhauptfaelligkeit: "",
                    typ: "",
                    marke: "",
                    modell: "",
                    kennzeichen: "",
                    vbnr: "",
                    fahrgestellNr: "",
                    erstzulassungsDatum: null,
                    anmeldeDatum: null,
                    // Motorrad
                    antrieb: "",
                    hubraum: 0,
                    listenpreis: "",
                    sonderausstattung: "",
                    isSteuerbefreit: false,
                    // Antragsfragen
                    antragsfragen: {
                        isKasko: 0,
                        kaskoGrund: "",
                        kaskoHasSchaden: false,
                        kaskoSchadenWelche: "",

                        hasVinkulierung: false,
                        vinkulierungZuGunsten: "",

                        isAbgelehnt: 0,
                        abgelehntGrund: "",
                        abgelehntUnternehmen: "",
                    },
                };
                this.vertragService
                    .getKfzNew("Motorrad")
                    .subscribe(
                        motorrad => {
                            this.kfzNew.vertrag = motorrad.vertrag;
                            this.kfzNew.fahrzeug = motorrad.fahrzeug;
                            this.kfzNew.polNr = motorrad.polNr;
                            // Datum
                            this.kfzNew.versicherungsbeginn = new Date(motorrad.versicherungsbeginn.substr(0, 4), motorrad.versicherungsbeginn.substr(5, 2) - 1, motorrad.versicherungsbeginn.substr(8, 2), 12);
                            this.kfzNew.wunschhauptfaelligkeit = motorrad.wunschhauptfaelligkeit;
                            this.kfzNew.id = motorrad.id;
                            this.kfzNew.typ = motorrad.typ;
                            this.kfzNew.marke = motorrad.marke;
                            this.kfzNew.modell = motorrad.modell;
                            this.kfzNew.kennzeichen = motorrad.kennzeichen;
                            this.kfzNew.vbnr = motorrad.vbnr;
                            this.kfzNew.fahrgestellNr = motorrad.fahrgestellNr;
                            // Datum
                            this.kfzNew.erstzulassungsDatum = motorrad.erstzulassungsDatum; // Ist immer Null
                            // Datum
                            this.kfzNew.anmeldeDatum = motorrad.anmeldeDatum; // Ist immer Null
                            this.kfzNew.antrieb = motorrad.antrieb;
                            this.kfzNew.hubraum = motorrad.hubraum;
                            this.kfzNew.listenpreis = motorrad.listenpreis;
                            this.kfzNew.sonderausstattung = motorrad.sonderausstattung;
                            this.kfzNew.bonusstufe = motorrad.bonusstufe;
                            this.kfzNew.isSteuerbefreit = motorrad.isSteuerbefreit;
                            // Antragsfragen
                            // Versicherung abgelehnt
                            this.kfzNew.antragsfragen.isAbgelehnt = motorrad.antragsfragen.isAbgelehnt;
                            this.kfzNew.antragsfragen.abgelehntGrund = motorrad.antragsfragen.abgelehntGrund;
                            this.kfzNew.antragsfragen.abgelehntUnternehmen = motorrad.antragsfragen.abgelehntUnternehmen;
                            // Kasko Schaden
                            this.kfzNew.antragsfragen.isKasko = motorrad.antragsfragen.isKasko;
                            this.kfzNew.antragsfragen.kaskoGrund = motorrad.antragsfragen.kaskoGrund;
                            this.kfzNew.antragsfragen.kaskoHasSchaden = motorrad.antragsfragen.kaskoHasSchaden;
                            this.kfzNew.antragsfragen.kaskoSchadenWelche = motorrad.antragsfragen.kaskoSchadenWelche;
                            // Vinkulierung
                            this.kfzNew.antragsfragen.hasVinkulierung = motorrad.antragsfragen.hasVinkulierung;
                            this.kfzNew.antragsfragen.vinkulierungZuGunsten = motorrad.antragsfragen.vinkulierungZuGunsten;
                        },
                        error => this.errMsg = <any>error
                    );
                break;
            case "Moped":
                this.kfzNew = {
                    id: 0,
                    // Kfz
                    vertrag: 0,
                    fahrzeug: 0,
                    polNr: "",
                    versicherungsbeginn: new Date(),
                    wunschhauptfaelligkeit: "",
                    typ: "",
                    marke: "",
                    modell: "",
                    kennzeichen: "",
                    vbnr: "",
                    fahrgestellNr: "",
                    erstzulassungsDatum: null,
                    anmeldeDatum: null,
                    // Moped
                    antrieb: "",
                    hubraum: 0,
                    sitzplaetze: 0,
                    // Antragsfragen
                    antragsfragen: {
                        isAbgelehnt: 0,
                        abgelehntGrund: "",
                        abgelehntUnternehmen: "",
                    },
                };
                this.vertragService
                    .getKfzNew("Moped")
                    .subscribe(
                        moped => {
                            this.kfzNew.vertrag = moped.vertrag;
                            this.kfzNew.fahrzeug = moped.fahrzeug;
                            this.kfzNew.polNr = moped.polNr;
                            // Datum
                            this.kfzNew.versicherungsbeginn = new Date(moped.versicherungsbeginn.substr(0, 4), moped.versicherungsbeginn.substr(5, 2) - 1, moped.versicherungsbeginn.substr(8, 2), 12);
                            this.kfzNew.wunschhauptfaelligkeit = moped.wunschhauptfaelligkeit;
                            this.kfzNew.id = moped.id;
                            this.kfzNew.typ = moped.typ;
                            this.kfzNew.marke = moped.marke;
                            this.kfzNew.modell = moped.modell;
                            this.kfzNew.kennzeichen = moped.kennzeichen;
                            this.kfzNew.vbnr = moped.vbnr;
                            this.kfzNew.fahrgestellNr = moped.fahrgestellNr;
                            // Datum
                            this.kfzNew.erstzulassungsDatum = moped.erstzulassungsDatum; // Ist immer Null
                            // Datum
                            this.kfzNew.anmeldeDatum = moped.anmeldeDatum; // Ist immer Null
                            this.kfzNew.antrieb = moped.antrieb;
                            this.kfzNew.hubraum = moped.hubraum;
                            this.kfzNew.sitzplaetze = moped.sitzplaetze;
                            this.kfzNew.listenpreis = moped.listenpreis;
                            this.kfzNew.sonderausstattung = moped.sonderausstattung;
                            // Antragsfragen
                            // Versicherung abgelehnt
                            this.kfzNew.antragsfragen.isAbgelehnt = moped.antragsfragen.isAbgelehnt;
                            this.kfzNew.antragsfragen.abgelehntGrund = moped.antragsfragen.abgelehntGrund;
                            this.kfzNew.antragsfragen.abgelehntUnternehmen = moped.antragsfragen.abgelehntUnternehmen;
                        },
                        error => this.errMsg = <any>error
                    );
                break;
            case "Dreirad":
                this.kfzNew = {
                    id: 0,
                    // Kfz
                    vertrag: 0,
                    fahrzeug: 0,
                    polNr: "",
                    versicherungsbeginn: new Date(),
                    wunschhauptfaelligkeit: "",
                    typ: "",
                    marke: "",
                    modell: "",
                    kennzeichen: "",
                    vbnr: "",
                    fahrgestellNr: "",
                    erstzulassungsDatum: null,
                    anmeldeDatum: null,
                    // Dreirad
                    antrieb: "",
                    hubraum: 0,
                    isSteuerbefreit: false,
                    // Antragsfragen
                    antragsfragen: {
                        isAbgelehnt: 0,
                        abgelehntGrund: "",
                        abgelehntUnternehmen: "",
                    },
                };
                this.vertragService
                    .getKfzNew("Dreirad")
                    .subscribe(
                        dreirad => {
                            this.kfzNew.vertrag = dreirad.vertrag;
                            this.kfzNew.fahrzeug = dreirad.fahrzeug;
                            this.kfzNew.polNr = dreirad.polNr;
                            // Datum
                            this.kfzNew.versicherungsbeginn = new Date(dreirad.versicherungsbeginn.substr(0, 4), dreirad.versicherungsbeginn.substr(5, 2) - 1, dreirad.versicherungsbeginn.substr(8, 2), 12);
                            this.kfzNew.wunschhauptfaelligkeit = dreirad.wunschhauptfaelligkeit;
                            this.kfzNew.id = dreirad.id;
                            this.kfzNew.typ = dreirad.typ;
                            this.kfzNew.marke = dreirad.marke;
                            this.kfzNew.modell = dreirad.modell;
                            this.kfzNew.kennzeichen = dreirad.kennzeichen;
                            this.kfzNew.vbnr = dreirad.vbnr;
                            this.kfzNew.fahrgestellNr = dreirad.fahrgestellNr;
                            // Datum
                            this.kfzNew.erstzulassungsDatum = dreirad.erstzulassungsDatum; // Ist immer Null
                            // Datum
                            this.kfzNew.anmeldeDatum = dreirad.anmeldeDatum; // Ist immer Null
                            this.kfzNew.antrieb = dreirad.antrieb;
                            this.kfzNew.hubraum = dreirad.hubraum;
                            this.kfzNew.isSteuerbefreit = dreirad.isSteuerbefreit;
                            // Antragsfragen
                            // Versicherung abgelehnt
                            this.kfzNew.antragsfragen.isAbgelehnt = dreirad.antragsfragen.isAbgelehnt;
                            this.kfzNew.antragsfragen.abgelehntGrund = dreirad.antragsfragen.abgelehntGrund;
                            this.kfzNew.antragsfragen.abgelehntUnternehmen = dreirad.antragsfragen.abgelehntUnternehmen;
                        },
                        error => this.errMsg = <any>error
                    );
                break;
            case "VierradKl50":
                this.kfzNew = {
                    id: 0,
                    // Kfz
                    vertrag: 0,
                    fahrzeug: 0,
                    polNr: "",
                    versicherungsbeginn: new Date(),
                    wunschhauptfaelligkeit: "",
                    typ: "",
                    marke: "",
                    modell: "",
                    kennzeichen: "",
                    vbnr: "",
                    fahrgestellNr: "",
                    erstzulassungsDatum: null,
                    anmeldeDatum: null,
                    // VierradKl50
                    antrieb: "",
                    leistung: 0,
                    isSteuerbefreit: false,
                    // Antragsfragen
                    antragsfragen: {
                        isAbgelehnt: 0,
                        abgelehntGrund: "",
                        abgelehntUnternehmen: "",
                    },
                };
                this.vertragService
                    .getKfzNew("VierradKl50")
                    .subscribe(
                        vierradKl50 => {
                            this.kfzNew.vertrag = vierradKl50.vertrag;
                            this.kfzNew.fahrzeug = vierradKl50.fahrzeug;
                            this.kfzNew.polNr = vierradKl50.polNr;
                            // Datum
                            this.kfzNew.versicherungsbeginn = new Date(vierradKl50.versicherungsbeginn.substr(0, 4), vierradKl50.versicherungsbeginn.substr(5, 2) - 1, vierradKl50.versicherungsbeginn.substr(8, 2), 12);
                            this.kfzNew.wunschhauptfaelligkeit = vierradKl50.wunschhauptfaelligkeit;
                            this.kfzNew.id = vierradKl50.id;
                            this.kfzNew.typ = vierradKl50.typ;
                            this.kfzNew.marke = vierradKl50.marke;
                            this.kfzNew.modell = vierradKl50.modell;
                            this.kfzNew.kennzeichen = vierradKl50.kennzeichen;
                            this.kfzNew.vbnr = vierradKl50.vbnr;
                            this.kfzNew.fahrgestellNr = vierradKl50.fahrgestellNr;
                            // Datum
                            this.kfzNew.erstzulassungsDatum = vierradKl50.erstzulassungsDatum; // Ist immer Null
                            // Datum
                            this.kfzNew.anmeldeDatum = vierradKl50.anmeldeDatum; // Ist immer Null
                            this.kfzNew.antrieb = vierradKl50.antrieb;
                            this.kfzNew.leistung = vierradKl50.leistung;
                            this.kfzNew.isSteuerbefreit = vierradKl50.isSteuerbefreit;
                            // Antragsfragen
                            // Versicherung abgelehnt
                            this.kfzNew.antragsfragen.isAbgelehnt = vierradKl50.antragsfragen.isAbgelehnt;
                            this.kfzNew.antragsfragen.abgelehntGrund = vierradKl50.antragsfragen.abgelehntGrund;
                            this.kfzNew.antragsfragen.abgelehntUnternehmen = vierradKl50.antragsfragen.abgelehntUnternehmen;
                        },
                        error => this.errMsg = <any>error
                    );
                break;
            case "VierradGr50":
                this.kfzNew = {
                    id: 0,
                    // Kfz
                    vertrag: 0,
                    fahrzeug: 0,
                    polNr: "",
                    versicherungsbeginn: new Date(),
                    wunschhauptfaelligkeit: "",
                    typ: "",
                    subtyp: "",
                    marke: "",
                    modell: "",
                    kennzeichen: "",
                    vbnr: "",
                    fahrgestellNr: "",
                    erstzulassungsDatum: null,
                    anmeldeDatum: null,
                    // VierradGr50
                    antrieb: "",
                    leistung: 0,
                    isSteuerbefreit: false,
                    // Antragsfragen
                    antragsfragen: {
                        isAbgelehnt: 0,
                        abgelehntGrund: "",
                        abgelehntUnternehmen: "",
                    },
                };
                this.vertragService
                    .getKfzNew("VierradGr50")
                    .subscribe(
                        vierradGr50 => {
                            this.kfzNew.vertrag = vierradGr50.vertrag;
                            this.kfzNew.fahrzeug = vierradGr50.fahrzeug;
                            this.kfzNew.polNr = vierradGr50.polNr;
                            // Datum
                            this.kfzNew.versicherungsbeginn = new Date(vierradGr50.versicherungsbeginn.substr(0, 4), vierradGr50.versicherungsbeginn.substr(5, 2) - 1, vierradGr50.versicherungsbeginn.substr(8, 2), 12);
                            this.kfzNew.wunschhauptfaelligkeit = vierradGr50.wunschhauptfaelligkeit;
                            this.kfzNew.id = vierradGr50.id;
                            this.kfzNew.typ = vierradGr50.typ;
                            this.kfzNew.subtyp = vierradGr50.subtyp;
                            this.kfzNew.marke = vierradGr50.marke;
                            this.kfzNew.modell = vierradGr50.modell;
                            this.kfzNew.kennzeichen = vierradGr50.kennzeichen;
                            this.kfzNew.vbnr = vierradGr50.vbnr;
                            this.kfzNew.fahrgestellNr = vierradGr50.fahrgestellNr;
                            // Datum
                            this.kfzNew.erstzulassungsDatum = vierradGr50.erstzulassungsDatum; // Ist immer Null
                            // Datum
                            this.kfzNew.anmeldeDatum = vierradGr50.anmeldeDatum; // Ist immer Null
                            this.kfzNew.antrieb = vierradGr50.antrieb;
                            this.kfzNew.leistung = vierradGr50.leistung;
                            this.kfzNew.isSteuerbefreit = vierradGr50.isSteuerbefreit;
                            // Antragsfragen
                            // Versicherung abgelehnt
                            this.kfzNew.antragsfragen.isAbgelehnt = vierradGr50.antragsfragen.isAbgelehnt;
                            this.kfzNew.antragsfragen.abgelehntGrund = vierradGr50.antragsfragen.abgelehntGrund;
                            this.kfzNew.antragsfragen.abgelehntUnternehmen = vierradGr50.antragsfragen.abgelehntUnternehmen;
                        },
                        error => this.errMsg = <any>error
                    );
                break;
            case "Zugmaschine":
                this.kfzNew = {
                    id: 0,
                    // Kfz
                    vertrag: 0,
                    fahrzeug: 0,
                    polNr: "",
                    versicherungsbeginn: new Date(),
                    wunschhauptfaelligkeit: "",
                    typ: "",
                    marke: "",
                    modell: "",
                    kennzeichen: "",
                    vbnr: "",
                    fahrgestellNr: "",
                    erstzulassungsDatum: null,
                    anmeldeDatum: null,
                    // Zugmaschine
                    antrieb: "",
                    leistung: 0,
                    geschwindigkeit: 0,
                    // Antragsfragen
                    antragsfragen: {
                        isAbgelehnt: 0,
                        abgelehntGrund: "",
                        abgelehntUnternehmen: "",
                    },
                };
                this.vertragService
                    .getKfzNew("Zugmaschine")
                    .subscribe(
                        zugmaschine => {
                            this.kfzNew.vertrag = zugmaschine.vertrag;
                            this.kfzNew.fahrzeug = zugmaschine.fahrzeug;
                            this.kfzNew.polNr = zugmaschine.polNr;
                            // Datum
                            this.kfzNew.versicherungsbeginn = new Date(zugmaschine.versicherungsbeginn.substr(0, 4), zugmaschine.versicherungsbeginn.substr(5, 2) - 1, zugmaschine.versicherungsbeginn.substr(8, 2), 12);
                            this.kfzNew.wunschhauptfaelligkeit = zugmaschine.wunschhauptfaelligkeit;
                            this.kfzNew.id = zugmaschine.id;
                            this.kfzNew.typ = zugmaschine.typ;
                            this.kfzNew.marke = zugmaschine.marke;
                            this.kfzNew.modell = zugmaschine.modell;
                            this.kfzNew.kennzeichen = zugmaschine.kennzeichen;
                            this.kfzNew.vbnr = zugmaschine.vbnr;
                            this.kfzNew.fahrgestellNr = zugmaschine.fahrgestellNr;
                            // Datum
                            this.kfzNew.erstzulassungsDatum = zugmaschine.erstzulassungsDatum; // Ist immer Null
                            // Datum
                            this.kfzNew.anmeldeDatum = zugmaschine.anmeldeDatum; // Ist immer Null
                            this.kfzNew.antrieb = zugmaschine.antrieb;
                            this.kfzNew.leistung = zugmaschine.leistung;
                            this.kfzNew.geschwindigkeit = zugmaschine.geschwindigkeit;
                            // Antragsfragen
                            // Versicherung abgelehnt
                            this.kfzNew.antragsfragen.isAbgelehnt = zugmaschine.antragsfragen.isAbgelehnt;
                            this.kfzNew.antragsfragen.abgelehntGrund = zugmaschine.antragsfragen.abgelehntGrund;
                            this.kfzNew.antragsfragen.abgelehntUnternehmen = zugmaschine.antragsfragen.abgelehntUnternehmen;
                        },
                        error => this.errMsg = <any>error
                    );
                break;
            case "Anhaenger":
                this.kfzNew = {
                    id: 0,
                    // Kfz
                    vertrag: 0,
                    fahrzeug: 0,
                    polNr: "",
                    versicherungsbeginn: new Date(),
                    wunschhauptfaelligkeit: "",
                    typ: "",
                    marke: "",
                    modell: "",
                    kennzeichen: "",
                    vbnr: "",
                    fahrgestellNr: "",
                    erstzulassungsDatum: null,
                    anmeldeDatum: null,
                    // Anhänger
                    nutzlast: 0,
                    // Antragsfragen
                    antragsfragen: {
                        isAbgelehnt: 0,
                        abgelehntGrund: "",
                        abgelehntUnternehmen: "",
                    },
                };
                this.vertragService
                    .getKfzNew("Anhaenger")
                    .subscribe(
                        anhaenger => {
                            this.kfzNew.vertrag = anhaenger.vertrag;
                            this.kfzNew.fahrzeug = anhaenger.fahrzeug;
                            this.kfzNew.polNr = anhaenger.polNr;
                            // Datum
                            this.kfzNew.versicherungsbeginn = new Date(anhaenger.versicherungsbeginn.substr(0, 4), anhaenger.versicherungsbeginn.substr(5, 2) - 1, anhaenger.versicherungsbeginn.substr(8, 2), 12);
                            this.kfzNew.wunschhauptfaelligkeit = anhaenger.wunschhauptfaelligkeit;
                            this.kfzNew.id = anhaenger.id;
                            this.kfzNew.typ = anhaenger.typ;
                            this.kfzNew.marke = anhaenger.marke;
                            this.kfzNew.modell = anhaenger.modell;
                            this.kfzNew.kennzeichen = anhaenger.kennzeichen;
                            this.kfzNew.vbnr = anhaenger.vbnr;
                            this.kfzNew.fahrgestellNr = anhaenger.fahrgestellNr;
                            // Datum
                            this.kfzNew.erstzulassungsDatum = anhaenger.erstzulassungsDatum; // Ist immer Null
                            // Datum
                            this.kfzNew.anmeldeDatum = anhaenger.anmeldeDatum; // Ist immer Null
                            this.kfzNew.nutzlast = anhaenger.nutzlast;
                            // Antragsfragen
                            // Versicherung abgelehnt
                            this.kfzNew.antragsfragen.isAbgelehnt = anhaenger.antragsfragen.isAbgelehnt;
                            this.kfzNew.antragsfragen.abgelehntGrund = anhaenger.antragsfragen.abgelehntGrund;
                            this.kfzNew.antragsfragen.abgelehntUnternehmen = anhaenger.antragsfragen.abgelehntUnternehmen;
                        },
                        error => this.errMsg = <any>error
                    );
                break;
            default:
                this.kfzNew = {
                    id: 0,
                    // Kfz
                    vertrag: 0,
                    fahrzeug: 0,
                    polNr: "",
                    versicherungsbeginn: new Date(),
                    wunschhauptfaelligkeit: "",
                    typ: "",
                    marke: "",
                    modell: "",
                    kennzeichen: "",
                    vbnr: "",
                    fahrgestellNr: "",
                    erstzulassungsDatum: null,
                    anmeldeDatum: null,
                };
        }
        //
        this.vertragProgressService.increment(99);
        setTimeout(() => { this.vertragProgressService.reset() }, 250);
    }

    doKfzAdd(kfz: any): void {
        this.vertragProgressService.increment(50);
        //
        if (kfz !== undefined) {
            switch (kfz.typ) {
                case "Pkw":
                    this.vertragService
                        .addKfz(kfz)
                        .subscribe(
                            kfzList => {
                                this.kfzList = kfzList;
                                this.kfzNew = undefined;
                            },
                            error => this.errMsg = <any>error
                        );
                    break;
                case "Lkw":
                    this.vertragService
                        .addKfz(kfz)
                        .subscribe(
                            kfzList => {
                                this.kfzList = kfzList;
                                this.kfzNew = undefined;
                            },
                            error => this.errMsg = <any>error
                        );
                    break;
                case "Motorrad":
                    this.vertragService
                        .addKfz(kfz)
                        .subscribe(
                            kfzList => {
                                this.kfzList = kfzList;
                                this.kfzNew = undefined;
                            },
                            error => this.errMsg = <any>error
                        );
                    break;
                case "Moped":
                    this.vertragService
                        .addKfz(kfz)
                        .subscribe(
                            kfzList => {
                                this.kfzList = kfzList;
                                this.kfzNew = undefined;
                            },
                            error => this.errMsg = <any>error
                        );
                    break;
                case "Dreirad":
                    this.vertragService
                        .addKfz(kfz)
                        .subscribe(
                            kfzList => {
                                this.kfzList = kfzList;
                                this.kfzNew = undefined;
                            },
                            error => this.errMsg = <any>error
                        );
                    break;
                case "VierradKl50":
                    this.vertragService
                        .addKfz(kfz)
                        .subscribe(
                            kfzList => {
                                this.kfzList = kfzList;
                                this.kfzNew = undefined;
                            },
                            error => this.errMsg = <any>error
                        );
                    break;
                case "VierradGr50":
                    this.vertragService
                        .addKfz(kfz)
                        .subscribe(
                            kfzList => {
                                this.kfzList = kfzList;
                                this.kfzNew = undefined;
                            },
                            error => this.errMsg = <any>error
                        );
                    break;
                case "Zugmaschine":
                    this.vertragService
                        .addKfz(kfz)
                        .subscribe(
                            kfzList => {
                                this.kfzList = kfzList;
                                this.kfzNew = undefined;
                            },
                            error => this.errMsg = <any>error
                        );
                    break;
                case "Anhaenger":
                    this.vertragService
                        .addKfz(kfz)
                        .subscribe(
                            kfzList => {
                                this.kfzList = kfzList;
                                this.kfzNew = undefined;
                            },
                            error => this.errMsg = <any>error
                        );
                    break;
                default:
            }
        }
        // undefined (Cancel)
        this.kfzNew = kfz;
        //
        this.vertragProgressService.increment(99);
        setTimeout(() => { this.vertragProgressService.reset(); }, 250);
    }

    doKfzUpdate(kfz: any): void {
        this.vertragProgressService.increment(50);
        //
        if (kfz !== undefined) {
            switch (kfz.typ) {
                case "Pkw":
                    this.vertragService
                        .updateKfz(kfz)
                        .subscribe(
                            kfzList => {
                                this.kfzList = kfzList;
                                this.kfzUpdate = undefined;
                            },
                            error => this.errMsg = <any>error
                        )
                    break;
                case "Lkw":
                    this.vertragService
                        .updateKfz(kfz)
                        .subscribe(
                            kfzList => {
                                this.kfzList = kfzList;
                                this.kfzUpdate = undefined;
                            },
                            error => this.errMsg = <any>error
                        )
                    break;
                case "Motorrad":
                    this.vertragService
                        .updateKfz(kfz)
                        .subscribe(
                            kfzList => {
                                this.kfzList = kfzList;
                                this.kfzUpdate = undefined;
                            },
                            error => this.errMsg = <any>error
                        )
                    break;
                case "Moped":
                    this.vertragService
                        .updateKfz(kfz)
                        .subscribe(
                            kfzList => {
                                this.kfzList = kfzList;
                                this.kfzUpdate = undefined;
                            },
                            error => this.errMsg = <any>error
                        )
                    break;
                case "Dreirad":
                    this.vertragService
                        .updateKfz(kfz)
                        .subscribe(
                            kfzList => {
                                this.kfzList = kfzList;
                                this.kfzUpdate = undefined;
                            },
                            error => this.errMsg = <any>error
                        )
                    break;
                case "VierradKl50":
                    this.vertragService
                        .updateKfz(kfz)
                        .subscribe(
                            kfzList => {
                                this.kfzList = kfzList;
                                this.kfzUpdate = undefined;
                            },
                            error => this.errMsg = <any>error
                        )
                    break;
                case "VierradGr50":
                    this.vertragService
                        .updateKfz(kfz)
                        .subscribe(
                            kfzList => {
                                this.kfzList = kfzList;
                                this.kfzUpdate = undefined;
                            },
                            error => this.errMsg = <any>error
                        )
                    break;
                case "Zugmaschine":
                    this.vertragService
                        .updateKfz(kfz)
                        .subscribe(
                            kfzList => {
                                this.kfzList = kfzList;
                                this.kfzUpdate = undefined;
                            },
                            error => this.errMsg = <any>error
                        )
                    break;
                case "Anhaenger":
                    this.vertragService
                        .updateKfz(kfz)
                        .subscribe(
                            kfzList => {
                                this.kfzList = kfzList;
                                this.kfzUpdate = undefined;
                            },
                            error => this.errMsg = <any>error
                        )
                    break;
                default:
            }
        } else {
            // undefined (Cancel)
            this.kfzUpdate = kfz;
        }
        //
        this.vertragProgressService.increment(99);
        setTimeout(() => { this.vertragProgressService.reset(); }, 250);
    }

    // delete Kfz
    doKfzDelete(kfz: any): void {
        this.vertragProgressService.increment(50);
        //
        this.vertragService
            .deleteKfz(kfz.id)
            .subscribe(
                kfzList => {
                    this.kfzList = kfzList;
                },
                error => this.errMsg = <any>error
            );
        //
        this.vertragProgressService.increment(99);
        setTimeout(() => { this.vertragProgressService.reset(); }, 250);
    }

    // Produkte
    doToggleHaftpflicht(kfz: any): void {
        this.vertragProgressService.increment(50);
        //
        this.vertragService
            .toggleKfzHaftpflicht(kfz)
            .subscribe(
                kfzList => {
                    this.kfzList = kfzList;
                },
                error => this.errMsg = <any>error
            );
        //
        this.vertragProgressService.increment(99);
        setTimeout(() => { this.vertragProgressService.reset(); }, 250);
    }

    doUpdateHaftpflicht(kfz: any): void {
        this.vertragProgressService.increment(50);
        //
        this.vertragService
            .updateKfzHaftpflicht(kfz)
            .subscribe(
                kfzList => {
                    this.kfzList = kfzList;
                },
                error => this.errMsg = <any>error
            );
        //
        this.vertragProgressService.increment(99);
        setTimeout(() => { this.vertragProgressService.reset(); }, 250);
    }

    doToggleKasko(kfz: any): void {
        this.vertragProgressService.increment(50);
        //
        this.vertragService
            .toggleKfzKasko(kfz)
            .subscribe(
                kfzList => {
                    this.kfzList = kfzList;
                },
                error => this.errMsg = <any>error
            );
        //
        this.vertragProgressService.increment(99);
        setTimeout(() => { this.vertragProgressService.reset(); }, 250);
    }

    doUpdateKasko(kfz: any): void {
        this.vertragProgressService.increment(50);
        //
        this.vertragService
            .updateKfzKasko(kfz)
            .subscribe(
                kfzList => {
                    this.kfzList = kfzList;
                },
                error => this.errMsg = <any>error
            );
        //
        this.vertragProgressService.increment(99);
        setTimeout(() => { this.vertragProgressService.reset(); }, 250);
    }

    doToggleRechtsschutz(kfz: any): void {
        this.vertragProgressService.increment(50);
        //
        this.vertragService
            .toggleKfzRechtsschutz(kfz)
            .subscribe(
                kfzList => {
                    this.kfzList = kfzList;
                },
                error => this.errMsg = <any>error
            );
        //
        this.vertragProgressService.increment(99);
        setTimeout(() => { this.vertragProgressService.reset(); }, 250);
    }

    doToggleInsassen(kfz: any): void {
        this.vertragProgressService.increment(50);
        //
        this.vertragService
            .toggleKfzInsassen(kfz)
            .subscribe(
                kfzList => {
                    this.kfzList = kfzList;
                },
                error => this.errMsg = <any>error
            );
        //
        this.vertragProgressService.increment(99);
        setTimeout(() => { this.vertragProgressService.reset(); }, 250);
    }
}