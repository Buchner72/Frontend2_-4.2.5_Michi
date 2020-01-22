export class Antragsfragen {
    isAbgelehnt: number;
    abgelehntGrund: string;
    abgelehntUnternehmen: string;

    constructor() {

    }
}

export class Antragsfragen_Kasko extends Antragsfragen {
    isKasko: number;
    kaskoGrund: string;
    kaskoHasSchaden: boolean;
    kaskoSchadenWelche: string;

    hasVinkulierung: boolean;
    vinkulierungZuGunsten: string;

    constructor() {
        super();
    }
}

export class Antragsfragen_BonusMalus extends Antragsfragen_Kasko {
    isBonusMalus: number;
    bonusMalusVersicherer: string;
    bonusMalusPolNr: string;
    bonusMalusBeendetAm: string;
    bonusMalusWegen: string;

    constructor() {
        super();
    }
}