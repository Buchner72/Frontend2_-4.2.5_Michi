import {
    Component,
    EventEmitter,
    Input,
    Output,
    OnInit
} from '@angular/core';

import { Marke } from './_model/EutaxMarke.model';
import { Modell } from './_model/EutaxModell.model';
import { Typ } from './_model/EutaxTyp.model';
import { Fahrzeug } from './_model/EutaxFahrzeug.model';

import { EurotaxService } from './_service/eurotax.service';

@Component({
    selector: 'eurotax',
    templateUrl: 'eurotax.component.html',
    providers: [EurotaxService]
})
export class EurotaxComponent implements OnInit {
    @Input()
    kfz: any;

    // Eurotax Marke/Modell Baujahr
    public searchBaujahrJahr: string;
    public searchBaujahrMonat: string;
    // Eurotax Marke/Modell Marke
    public isVisibleSearchMarken: boolean;
    public listMarken: Marke[];
    public searchNameMarke: string;
    public nameMarke: string;
    public nationalCodeMarke: string;
    // Eurotax Marke/Modell Modell
    public isVisibleSearchModelle: boolean;
    public listModelle: Modell[];
    public searchNameModell: string;
    public nameModell: string;
    public nationalCodeModell: string;
    // Eurotax Marke/Modell Typ
    public isVisibleSearchTypen: boolean;
    public listTypen: Typ[];
    public searchNameTyp: string;
    public nameTyp: string;
    public nationalCodeTyp: string;
    // Eurotax Marke/Modell Fahrzeug
    public isVisibleSearchFahrzeuge: boolean;
    public listFahrzeuge: Fahrzeug[];
    public nameFahrzeug: string;
    public nationalCodeFahrzeug: string;
    // Eurotax NatCode
    public isVisibleSearchNatCode: boolean;
    public listNatCode: Fahrzeug[];
    public searchNatCode: string;
    //
    public isFahrzeugSelected: boolean;

    //
    public errMsg: string;

    constructor(private eurotaxService: EurotaxService) { }

    ngOnInit(): void {
        if (this.kfz != undefined) {
            if (this.kfz.marke != "" && this.kfz.modell != "") {
                this.isFahrzeugSelected = true;
            }
            else {
                this.isFahrzeugSelected = false;
            }
        }
        else {
            this.isFahrzeugSelected = false;
        }
    }

    // Modus Eurotax/Manuell
    setModusNatCode(): void {
        this.kfz.eingabeArt = 1;

        if (this.kfz.marke != "" && this.kfz.modell != "") {
            this.isFahrzeugSelected = true;
        }
        else {
            this.isFahrzeugSelected = false;
        }
    }

    setModusMarkeModell(): void {
        this.kfz.eingabeArt = 2;

        if (this.kfz.marke != "" && this.kfz.modell != "") {
            this.isFahrzeugSelected = true;
        }
        else {
            this.isFahrzeugSelected = false;
        }
    }

    setModusManuell(): void {
        this.kfz.eingabeArt = 3;

        this.isFahrzeugSelected = false;
        //
        this.searchNameMarke = undefined;
        this.nameMarke = undefined;
        this.nationalCodeMarke = undefined;

        this.searchNameModell = undefined;
        this.nameModell = undefined;
        this.nationalCodeModell = undefined;

        this.searchNameTyp = undefined;
        this.nameTyp = undefined;
        this.nationalCodeTyp = undefined;

        this.nameFahrzeug = undefined;
        this.nationalCodeFahrzeug = undefined;
        //
        this.kfz.nationalCode = undefined;
    }

    // Eurotax MarkeModell
    // Marke
    onFocusMarke(kfzTyp: string): void {
        this.isVisibleSearchMarken = true;
        this.isVisibleSearchModelle = false;
        this.isVisibleSearchTypen = false;
        this.isVisibleSearchFahrzeuge = false;
        //
        this.listModelle = undefined;
        this.listTypen = undefined;
        this.listFahrzeuge = undefined;
        //
        this.searchNameModell = "";
        this.searchNameTyp = "";
        if (!this.listMarken) {
            this.onSearchMarke(kfzTyp);
        }
    }

    onSearchMarke(kfzTyp: string): void {
        switch (kfzTyp) {
            case "Pkw":
                kfzTyp = "10";
                break;
            case "Lkw":
                kfzTyp = "20";
                break;
            default:
        }
        if (this.searchNameMarke == undefined || this.searchNameMarke == "") {
            // Wenn Feld leer ist Marke zurücksetzen
            this.nationalCodeMarke = undefined;
            // Wenn Feld leer ist Modell zurücksetzen
            this.listModelle = undefined;
            this.searchNameModell = '';
            this.nationalCodeModell = undefined;
            // Wenn Feld leer ist Typ zurücksetzen
            this.listTypen = undefined;
            this.searchNameTyp = '';
            this.nationalCodeTyp = undefined;
            // Wenn Feld leer ist Fahrzeug zrücksetzen
            this.listFahrzeuge = undefined;
            this.nameFahrzeug = '';
            this.nationalCodeFahrzeug = undefined;
        }
        //
        this.eurotaxService
            .searchMarke(kfzTyp, this.searchNameMarke)
            .subscribe(
                marken => this.listMarken = marken,
                error => this.errMsg = <any>error
            );
    }

    onSelectMarke(kfzTyp: string, name: string, natCode: string): void {
        this.isVisibleSearchMarken = false;
        //
        this.searchNameMarke = name;
        this.nameMarke = name;
        this.nationalCodeMarke = natCode;
        //
        this.listMarken = undefined;
        this.listModelle = undefined;
        this.listTypen = undefined;
        this.listFahrzeuge = undefined;
    }

    onCloseMarkeList(): void {
        this.isVisibleSearchMarken = false;
        //
        this.nationalCodeModell = undefined;
        this.nationalCodeTyp = undefined;
        this.nationalCodeFahrzeug = undefined;
    }

    // Modell
    onFocusModell(kfzTyp: string): void {
        this.isVisibleSearchMarken = false;
        this.isVisibleSearchModelle = true;
        this.isVisibleSearchTypen = false;
        this.isVisibleSearchFahrzeuge = false;
        //
        this.listMarken = undefined;
        this.listTypen = undefined;
        this.listFahrzeuge = undefined;
        //
        this.searchNameTyp = "";
        if (!this.listModelle) {
            this.onSearchModell(kfzTyp);
        }
    }

    onSearchModell(kfzTyp: string): void {
        switch (kfzTyp) {
            case "Pkw":
                kfzTyp = "10";
                break;
            case "Lkw":
                kfzTyp = "20";
                break;
            default:
        }
        if (this.searchNameModell == undefined || this.searchNameModell == "") {
            // Wenn Feld leer ist natCodeModell zurücksetzen
            this.nationalCodeModell = undefined;
            // Wenn Feld leer ist natCodeTyp zurücksetzen
            this.listTypen = undefined;
            this.searchNameTyp = '';
            this.nationalCodeTyp = undefined;
        }
        // Wenn Feld nicht leer ist Suchliste erstellen
        this.eurotaxService
            .searchModell(kfzTyp, this.nationalCodeMarke, this.searchBaujahrJahr + this.searchBaujahrMonat, this.searchNameModell)
            .subscribe(
                modelle => this.listModelle = modelle,
                error => this.errMsg = <any>error
            );
    }

    onSelectModell(kfzTyp: string, name: string, natCode: string): void {
        this.isVisibleSearchModelle = false;
        //
        this.searchNameModell = name;
        this.nameModell = name;
        this.nationalCodeModell = natCode;
        //
        this.listModelle = undefined;
        this.listTypen = undefined;
        this.listFahrzeuge = undefined;
    }

    onCloseModellList(): void {
        this.isVisibleSearchModelle = false;
        //
        this.nationalCodeTyp = undefined;
        this.nationalCodeFahrzeug = undefined;
    }

    // Typ
    onFocusTyp(kfzTyp: string): void {
        this.isVisibleSearchMarken = false;
        this.isVisibleSearchModelle = false;
        this.isVisibleSearchTypen = true;
        this.isVisibleSearchFahrzeuge = false;
        //
        this.listMarken = undefined;
        this.listModelle = undefined;
        this.listFahrzeuge = undefined;
        //
        if (!this.listTypen) {
            this.onSearchTyp(kfzTyp);
        }
    }

    onSearchTyp(kfzTyp: string): void {
        switch (kfzTyp) {
            case "Pkw":
                kfzTyp = "10";
                break;
            case "Lkw":
                kfzTyp = "20";
                break;
            default:
        }
        if (this.searchNameTyp == undefined || this.searchNameTyp == "") {
            // Wenn Feld leer ist natCodeModell zurücksetzen
            this.nationalCodeTyp = undefined;
        }
        this.eurotaxService
            .searchTyp(kfzTyp, this.nationalCodeMarke, this.nationalCodeModell, this.searchBaujahrJahr + this.searchBaujahrMonat, this.searchNameTyp)
            .subscribe(
                typen => this.listTypen = typen,
                error => this.errMsg = <any>error
            );
    }

    onSelectTyp(kfzTyp: string, name: string, natCode: string): void {
        this.isVisibleSearchTypen = false;
        //
        this.searchNameTyp = name;
        this.nameTyp = name;
        this.nationalCodeTyp = natCode;
        //
        this.listTypen = undefined;
        this.listFahrzeuge = undefined;
        //
        this.onSearchFahrzeug(kfzTyp);
    }

    onCloseTypList(): void {
        this.isVisibleSearchTypen = false;
        //
        this.nationalCodeFahrzeug = undefined;
    }

    // Fahrzeug
    onSearchFahrzeug(kfzTyp: string): void {
        this.isVisibleSearchFahrzeuge = true;
        switch (kfzTyp) {
            case "Pkw":
                kfzTyp = "10";
                break;
            case "Lkw":
                kfzTyp = "20";
                break;
            default:
        }
        this.eurotaxService
            .searchFahrzeug(kfzTyp, this.nationalCodeTyp, this.searchBaujahrJahr + this.searchBaujahrMonat)
            .subscribe(
                fahrzeuge => this.listFahrzeuge = fahrzeuge,
                error => this.errMsg = <any>error
            );
    }

    onSelectFahrzeug(kfzTyp: string, fahrzeug: any): void {
        this.nameFahrzeug = fahrzeug.name;
        this.nationalCodeFahrzeug = fahrzeug.nationalCode;
        //
        this.listFahrzeuge = undefined;
        this.isVisibleSearchFahrzeuge = false;
        // Daten übernehmen
        this.kfz.marke = this.nameMarke;
        this.kfz.modell = this.nameFahrzeug;
        this.kfz.nationalCode = this.nationalCodeFahrzeug;
        switch (fahrzeug.antrieb1) {
            case "Benzin bleifrei":
                this.kfz.antrieb = 1;
                // Hybrid
                if (fahrzeug.antrieb2 == " / Strom") {
                    this.kfz.antrieb = 3;
                }
                break;
            case "Diesel":
                this.kfz.antrieb = 2;
                break;
            case "Strom":
                this.kfz.antrieb = 4;
                break;
            default:
        }
        this.kfz.leistung = parseInt(fahrzeug.kw);
        this.kfz.listenpreis = fahrzeug.neupreis;
        if (kfzTyp == "Lkw") {
            this.kfz.nutzlast = fahrzeug.gesamtgewicht - fahrzeug.leergewicht;
            this.kfz.gesamtgewicht = fahrzeug.gesamtgewicht;
        }
        //
        this.isFahrzeugSelected = true;
    }

    onCloseFahrzeugList(): void {
        this.nameFahrzeug = undefined;
        this.nationalCodeFahrzeug = undefined;
        //
        this.listFahrzeuge = undefined;
        this.isVisibleSearchFahrzeuge = false;
        // Daten übernehmen
        this.kfz.marke = undefined;
        this.kfz.modell = undefined;
        this.kfz.nationalCode = undefined;
        this.kfz.antrieb = 0;
        this.kfz.leistung = undefined;
        this.kfz.listenpreis = undefined;
        //
        this.isFahrzeugSelected = false;
    }

    // Eurotax NatCode
    // Fahrzeug
    onFocusNatCode(kfzTyp: string): void {
        if (this.searchNatCode && this.searchNatCode.length >= 6) {
            this.isVisibleSearchNatCode = true;
        } else {
            this.isVisibleSearchNatCode = false;
        }
        //
        if (!this.listNatCode) {
            this.onSearchNatCode(kfzTyp);
        }
    }

    onSearchNatCode(kfzTyp: string): void {
        if (this.searchNatCode && this.searchNatCode.length >= 6) {
            this.isVisibleSearchNatCode = true;
            switch (kfzTyp) {
                case "Pkw":
                    kfzTyp = "10";
                    break;
                case "Lkw":
                    kfzTyp = "20";
                    break;
                default:
            }
            this.eurotaxService
                .searchFahrzeug(kfzTyp, this.searchNatCode, this.searchBaujahrJahr + this.searchBaujahrMonat)
                .subscribe(
                    fahrzeuge => this.listNatCode = fahrzeuge,
                    error => this.errMsg = <any>error
                );
        } else {
            this.isVisibleSearchNatCode = false;
        }
    }

    onSelectNatCode(kfzTyp: string, fahrzeug: any): void {
        this.listNatCode = undefined;
        this.isVisibleSearchNatCode = false;
        // Daten übernehmen
        this.kfz.marke = fahrzeug.marke;
        this.kfz.modell = fahrzeug.name;
        this.kfz.nationalCode = fahrzeug.nationalCode;
        switch (fahrzeug.antrieb1) {
            case "Benzin bleifrei":
                this.kfz.antrieb = 1;
                // Hybrid
                if (fahrzeug.antrieb2 == " / Strom") {
                    this.kfz.antrieb = 3;
                }
                break;
            case "Diesel":
                this.kfz.antrieb = 2;
                break;
            case "Strom":
                this.kfz.antrieb = 4;
                break;
            default:
        }
        this.kfz.leistung = parseInt(fahrzeug.kw);
        this.kfz.listenpreis = fahrzeug.neupreis;
        if (kfzTyp == "Lkw") {
            this.kfz.nutzlast = fahrzeug.gesamtgewicht - fahrzeug.leergewicht;
            this.kfz.gesamtgewicht = fahrzeug.gesamtgewicht;
        }
        //
        this.isFahrzeugSelected = true;
    }

    onCloseNatCodeList(): void {
        this.searchNatCode = undefined;
        //
        this.listNatCode = undefined;
        this.isVisibleSearchNatCode = false;
        // Daten übernehmen
        this.kfz.marke = undefined;
        this.kfz.modell = undefined;
        this.kfz.antrieb = 0;
        this.kfz.leistung = undefined;
        this.kfz.listenpreis = undefined;
        //
        this.isFahrzeugSelected = false;
    }
}
