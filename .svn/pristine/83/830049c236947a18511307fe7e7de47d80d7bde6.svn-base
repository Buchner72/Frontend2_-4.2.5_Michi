// Interfaces vs Classes
// https://www.typescriptlang.org/docs/handbook/interfaces.html
// One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing”
// or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts
// within your code as well as contracts with code outside of your project.

export interface Vn {
    id: number;
    kundennr: string;
    anrede: number;
    titel: string;
    vorname: string;
    nachname: string;
    geburtsdatum: Date;
    alter: number;
    alterVerstech: number;
    adresse: {
        strasseNr: string;
        plz: string;
        ort: string;
        land: string;
    };
    familienstand: number;
    svAnstalt: string;
    svNr: string;
    hausarzt: string;
    kontakt: {
        tel: string;
        mobil: string;
        email: string;
    };
    artBeschaeftigung: number;
    beruf: string;
    besondererArbeitgeber: string;
    besondererBeruf: string;
    besondererDienstort: string;
    nationalitaet: string;
    isEuBuerger: boolean;
    hasProbefuehrerschein: boolean;
    fuehrerscheinSeitVon: string;
    fuehrerscheinNr: string;
    fuehrerscheinGruppe: string;
    isVnKontoinhaber: boolean;
    bankdaten: {
        kontoinhaber: string;
        strasseNr: string;
        plz: string;
        ort: string;
        iban: string;
        bic: string;
    };
    isBezugsberechtigt: number;
    bezugsberechtigt: {
        vorname: string;
        nachname: string;
        geburtsdatum: string;
        weiterePerson: string;
    };
    hasWeitereVn: boolean;
    weitereVn: {
        anrede: number;
        titel: string;
        vorname: string;
        nachname: string;
        geburtsdatum: string;
        adresse: {
            strasseNr: string;
            plz: string;
            ort: string;
            land: string;
        };
        artBeschaeftigung: number;
        beruf: string;
    };
    hasAbweichendeInkassoAdr: boolean;
    inkassoAdr: {
        anrede: number;
        titel: string;
        vorname: string;
        nachname: string;
        adresse: {
            strasseNr: string;
            plz: string;
            ort: string;
            land: string;
        };
    };
    // Fehlerkennzeichen
    hasErrorVn_Alter15: boolean; //Vn < 15 -> keine Annahme
    hasErrorVn_Alter21: boolean; //Vn < 21 -> keine Annahme Kfz
    hasErrorVn_Alter23: boolean; //Vn < 23 -> keine Freischadenbonus / Schadenersatzbeitrag Kfz
    hasErrorVn_Alter75: boolean; //Vn > 75 -> Anfragepflichtig
    hasErrorVn_Selbstaendig: boolean; //Vn > 75 -> Anfragepflichtig

    // Zur Haushalt Eigenheim verschieben
    //hasAbweichendeRisikoAdr: boolean;
    //risikoAdr: {
    //    anrede: number;
    //    titel: string;
    //    vorname: string;
    //    nachname: string;
    //    adresse: {
    //        strasseNr: string;
    //        plz: string;
    //        ort: string;
    //        land: string;
    //    };
    //};
}