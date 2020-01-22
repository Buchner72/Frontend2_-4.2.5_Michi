// Interfaces vs Classes
// https://www.typescriptlang.org/docs/handbook/interfaces.html
// One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing”
// or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts
// within your code as well as contracts with code outside of your project.

export interface Fahrzeug {
    marke: string;
    modell: string;
    typ: string;
    name: string;
    nationalCode: string;
    kw: string;
    ps: string;
    tueren: string;
    zylinder: string;
    sitze: string;
    antrieb1: string;
    antrieb2: string;
    importStart: string;
    importEnde: string;
    preisAb: string;
    neupreis: string;
    leergewicht: number;
    nutzlast: number;
    gesamtgewicht: number;
}