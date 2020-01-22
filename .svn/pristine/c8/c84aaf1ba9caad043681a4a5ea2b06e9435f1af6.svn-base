// Interfaces vs Classes
// https://www.typescriptlang.org/docs/handbook/interfaces.html
// One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing”
// or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts
// within your code as well as contracts with code outside of your project.

export interface Motorrad {
    id: number;
    // Kfz
    vertrag: number;
    fahrzeug: number;
    polNr: string;
    versicherungsbeginn: Date;
    wunschhauptfaelligkeit: string;
    typ: string;
    marke: string;
    modell: string;
    kennzeichen: string;
    vbnr: string;
    fahrgestellnr: string;
    erstzulassungsDatum: Date;
    anmeldeDatum: Date;
    // Motorrad
    antrieb: string;
    hubraum: number;
    listenpreis: string;
    sonderausstattung: string;
    gesamtpreis: string;
    hasErrorKaskoGesamtpreis: boolean;
    isOldtimer: boolean;
    isSteuerbefreit: boolean;
    // Fehlerkennzeichen
    // Kasko
    hasErrorKasko_KfzGesamtpreis: boolean;
    // Antragsfragen
    antragsfragen: {
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
    produkte: {
        hasHaftpflicht: boolean;
        haftpflicht: {
            versSum: number;
        };
        hasKasko: boolean;
        kasko: {
            tarif: string;
        };
        hasRechtsschutz: boolean;
        rechtsschutz: {
            tarif: string;
        };
    };
}