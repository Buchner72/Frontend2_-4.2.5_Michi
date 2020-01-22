// Interfaces vs Classes
// https://www.typescriptlang.org/docs/handbook/interfaces.html
// One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing”
// or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts
// within your code as well as contracts with code outside of your project.

export interface Pkw {
    id: number;
    // Kfz
    vertrag: number;
    fahrzeug: number;
    polNr: string;
    versicherungsbeginn: Date;
    wunschhauptfaelligkeit: string;
    eingabeArt: string;
    nationalCode: string;
    typ: string;
    marke: string;
    modell: string;
    kennzeichen: string;
    vbnr: string;
    fahrgestellnr: string;
    erstzulassungsDatum: Date;
    anmeldeDatum: Date;
    // Pkw
    antrieb: string;
    leistung: number;
    listenpreis: string;
    sonderausstattung: string;
    folierung: string;
    gesamtpreis: string;
    bonusstufe: string;
    hasKat: boolean;
    hasSitze7Plus: boolean;
    isOldtimer: boolean;
    isSteuerbefreit: boolean;
    // Fehlerkennzeichen
    // Haftpflicht
    hasErrorHaftpflicht_KfzMarke: boolean;
    // Kasko
    hasErrorKasko_KfzMarke: boolean;
    hasErrorKasko_KfzGesamtpreis: boolean;
    hasErrorKasko_KfzAlter5: boolean;
    hasErrorKasko_KfzAlter8: boolean;
    // Antragsfragen
    antragsfragen: {
        isBonusMalus: number;
        bonusMalusVersicherer: string;
        bonusMalusPolNr: string;
        bonusMalusBeendetAm: string;
        bonusMalusWegen: string;

        isKasko: number;
        kaskoGrund: string;
        kaskoHasSchaden: boolean;
        kaskoSchadenWelche: string;

        hasVinkulierung: boolean;
        vinkulierungZuGunsten: string;

        isAbgelehnt: number;
        abgelehntGrund: string;
        abgelehntUnternehmen: string;
    };
    // Produkte
    produkte: {
        hasHaftpflicht: boolean;
        haftpflicht: {
            tarif: number;
            versSum: number;
            variante: number;
            hasAssistance: boolean;
        };
        hasKasko: boolean;
        kasko: {
            tarif: number;
            selbstbehalt: number;
            folierung: string;
            hasFifty: boolean;
            hasGap: boolean;
            hasKnt: boolean;
            hasElektropaket: boolean;
        };
        hasRechtsschutz: boolean;
        rechtsschtuz: {
            tarif: number;
        };
        hasInsassen: boolean;
        insassen: {
            tarif: number;
        };
    };
}