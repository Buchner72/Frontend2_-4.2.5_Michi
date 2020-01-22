// Interfaces vs Classes
// https://www.typescriptlang.org/docs/handbook/interfaces.html
// One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing”
// or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts
// within your code as well as contracts with code outside of your project.

export interface Anhaenger {
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
    // Anhänger
    nutzlast: number;
    // Antragsfragen
    antragsfragen: {
        isAbgelehnt: number;
        abgelehntGrund: string;
        abgelehntUnternehmen: string;
    };
    // Produkte
    produkte: {
        hasHaftpflicht: boolean;
        haftpflicht: {
            versSum: number;
        };
        hasRechtsschutz: boolean;
        rechtsschutz: {
            tarif: string;
        };
    };
}