using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Frontend.Models
{
    public class VnViewModel
    {
        public int id { get; set; }
        public string kundennr { get; set; }
        public string anrede { get; set; }
        public string titel { get; set; }
        public string vorname { get; set; }
        public string nachname { get; set; }
        public Adresse adresse { get; set; }
        public Kontakt kontakt { get; set; }
        public int familienstand { get; set; }
        public int svAnstalt { get; set; }
        public string svNr { get; set; }
        public string hausarzt { get; set; }
        public DateTime? geburtsdatum { get; set; }
        public string svnummer { get; set; }
        public string nationalitaet { get; set; }
        public bool isEuBuerger { get; set; }
        public bool hasProbefuehrerschein { get; set; }
        public string fuehrerscheinSeitVon { get; set; }
        public string fuehrerscheinGruppe { get; set; }
        public int artBeschaeftigung { get; set; }
        public string beruf { get; set; }
        public string besondererArbeitgeber { get; set; }
        public string besondererBeruf { get; set; }
        public string besondererDienstort { get; set; }
        public bool isVnKontoinhaber { get; set; }
        public Bankdaten bankdaten { get; set; }
        public bool isVersicherter { get; set; }
        public int isBezugsberechtigt { get; set; }
        public Bezugsberechtigt bezugsberechtigt { get; set; }
        public bool hasWeitereVn { get; set; }
        public WeitereVn weitereVn { get; set; }
        public bool hasAbweichendeInkassoAdr { get; set; }
        public InkassoAdr inkassoAdr { get; set; }

        public VnViewModel()
        {
            adresse = new Adresse();
            kontakt = new Kontakt();
            bankdaten = new Bankdaten();
            weitereVn = new WeitereVn();
            inkassoAdr = new InkassoAdr();
        }
    }

    public class VpViewModel
    {
        public int id { get; set; }
        public string anrede { get; set; }
        public string titel { get; set; }
        public string vorname { get; set; }
        public string nachname { get; set; }
        public Adresse adresse { get; set; }
        public Kontakt kontakt { get; set; }
        public int familienstand { get; set; }
        public DateTime? geburtsdatum { get; set; }
        public VpViewModel()
        {
            adresse = new Adresse();
            kontakt = new Kontakt();
        }
    }

    //Kfz
    public class KfzViewModel
    {
        public int id { get; set; }
        public int vertrag { get; set; }
        public int fahrzeug { get; set; }
        public string polNr { get; set; }
        public string versicherungsbeginn { get; set; }
        public string wunschhauptfaelligkeit { get; set; }
        public string typ { get; set; }
        public string marke { get; set; }
        public string modell { get; set; }
        public string kennzeichen { get; set; }
        public string vbnr { get; set; }
        public string fahrgestellNr { get; set; }
        public DateTime? erstzulassungsDatum { get; set; }
        public DateTime? anmeldeDatum { get; set; }
    }

    public class KfzViewModel_Pkw : KfzViewModel
    {
        public int eingabeArt { get; set; }
        public string nationalCode { get; set; }
        public int antrieb { get; set; }
        public int? leistung { get; set; }
        public string listenpreis { get; set; }
        public string sonderausstattung { get; set; }
        public string folierung { get; set; }
        public string gesamtpreis { get; set; }
        public string bonusstufe { get; set; }
        public bool hasKat { get; set; }
        public bool hasSitze7Plus { get; set; }
        public bool isOldtimer { get; set; }
        public bool isSteuerbefreit { get; set; }
        // Fehlerkennzeichen
        // Haftpflicht
        public bool hasErrorHaftpflicht_KfzMarke { get; set; } //Kfz BMW I3/I4/I5/I8 -> keine Annahme
        // Kasko
        public bool hasErrorKasko_KfzMarke { get; set; } //Kfz BMW I3/I4/I5/I8 -> keine Annahme
        public bool hasErrorKasko_KfzGesamtpreis { get; set; } //Kfz Listenpreis + Sonderausstattung (- 2.500 Freibetrag)
        public bool hasErrorKasko_KfzAlter5 { get; set; }
        public bool hasErrorKasko_KfzAlter8 { get; set; }
        //
        public KfzAntragsfragenViewModel_BonusMalus antragsfragen { get; set; }
        public KfzProdukteViewModel_Pkw produkte { get; set; }

        public KfzViewModel_Pkw()
        {
            antragsfragen = new KfzAntragsfragenViewModel_BonusMalus();
            produkte = new KfzProdukteViewModel_Pkw();
        }
    }

    public class KfzViewModel_Lkw : KfzViewModel
    {
        public int eingabeArt { get; set; }
        public string nationalCode { get; set; }
        public int antrieb { get; set; }
        public int leistung { get; set; }
        public int nutzlast { get; set; }
        public int gesamtgewicht { get; set; }
        public string listenpreis { get; set; }
        public string sonderausstattung { get; set; }
        public string folierung { get; set; }
        public string gesamtpreis { get; set; }
        public string bonusstufe { get; set; }
        public bool isSteuerbefreit { get; set; }
        // Fehlerkennzeichen
        // Haftpflicht
        public bool hasErrorHaftpflicht_KfzMarke { get; set; } //Kfz BMW I3/I4/I5/I8 -> keine Annahme
        // Kasko
        public bool hasErrorKasko_KfzMarke { get; set; } //Kfz BMW I3/I4/I5/I8 -> keine Annahme
        public bool hasErrorKasko_KfzGesamtpreis { get; set; } //Kfz Listenpreis + Sonderausstattung (- 2.500 Freibetrag)
        public bool hasErrorKasko_KfzAlter5 { get; set; }
        public bool hasErrorKasko_KfzAlter8 { get; set; }
        //
        public KfzAntragsfragenViewModel_BonusMalus antragsfragen { get; set; }
        public KfzProdukteViewModel_Lkw produkte { get; set; }

        public KfzViewModel_Lkw()
        {
            antragsfragen = new KfzAntragsfragenViewModel_BonusMalus();
            produkte = new KfzProdukteViewModel_Lkw();
        }
    }

    public class KfzViewModel_Motorrad : KfzViewModel
    {
        public int antrieb { get; set; }
        public int hubraum { get; set; }
        public string listenpreis { get; set; }
        public string sonderausstattung { get; set; }
        public string gesamtpreis { get; set; }
        public bool isOldtimer { get; set; }
        public bool isSteuerbefreit { get; set; }
        // Fehlerkennzeichen
        // Kasko
        public bool hasErrorKasko_KfzGesamtpreis { get; set; } //Kfz Listenpreis + Sonderausstattung (- 2.500 Freibetrag)
        public bool hasErrorKasko_KfzAlter5 { get; set; }
        public bool hasErrorKasko_KfzAlter8 { get; set; }
        public KfzAntragsfragenViewModel_BonusMalus antragsfragen { get; set; }
        public KfzProdukteViewModel_Motorrad produkte { get; set; }

        public KfzViewModel_Motorrad()
        {
            antragsfragen = new KfzAntragsfragenViewModel_BonusMalus();
            produkte = new KfzProdukteViewModel_Motorrad();
        }
    }

    public class KfzViewModel_Moped : KfzViewModel
    {
        public int antrieb { get; set; }
        public int hubraum { get; set; }
        public int sitzplaetze { get; set; }
        public KfzAntragsfragenViewModel antragsfragen { get; set; }
        public KfzProdukteViewModel produkte { get; set; }

        public KfzViewModel_Moped()
        {
            antragsfragen = new KfzAntragsfragenViewModel();
            produkte = new KfzProdukteViewModel();
        }
    }

    public class KfzViewModel_Dreirad : KfzViewModel
    {
        public int antrieb { get; set; }
        public int hubraum { get; set; }
        public bool isSteuerbefreit { get; set; }
        public KfzAntragsfragenViewModel antragsfragen { get; set; }
        public KfzProdukteViewModel produkte { get; set; }

        public KfzViewModel_Dreirad()
        {
            antragsfragen = new KfzAntragsfragenViewModel();
            produkte = new KfzProdukteViewModel();
        }
    }

    public class KfzViewModel_VierradKl50 : KfzViewModel
    {
        public int antrieb { get; set; }
        public int leistung { get; set; }
        public bool isSteuerbefreit { get; set; }
        public KfzAntragsfragenViewModel antragsfragen { get; set; }
        public KfzProdukteViewModel produkte { get; set; }

        public KfzViewModel_VierradKl50()
        {
            antragsfragen = new KfzAntragsfragenViewModel();
            produkte = new KfzProdukteViewModel();
        }
    }

    public class KfzViewModel_VierradGr50 : KfzViewModel
    {
        public int subtyp { get; set; }
        public int antrieb { get; set; }
        public int leistung { get; set; }
        public bool isSteuerbefreit { get; set; }
        public KfzAntragsfragenViewModel antragsfragen { get; set; }
        public KfzProdukteViewModel_VierradGr50 produkte { get; set; }

        public KfzViewModel_VierradGr50()
        {
            antragsfragen = new KfzAntragsfragenViewModel();
            produkte = new KfzProdukteViewModel_VierradGr50();
        }
    }

    public class KfzViewModel_Zugmaschine : KfzViewModel
    {
        public int antrieb { get; set; }
        public int leistung { get; set; }
        public int geschwindigkeit { get; set; }
        public KfzAntragsfragenViewModel antragsfragen { get; set; }
        public KfzProdukteViewModel produkte { get; set; }

        public KfzViewModel_Zugmaschine()
        {
            antragsfragen = new KfzAntragsfragenViewModel();
            produkte = new KfzProdukteViewModel();
        }
    }

    public class KfzViewModel_Anhaenger : KfzViewModel
    {
        public int nutzlast { get; set; }
        public KfzAntragsfragenViewModel antragsfragen { get; set; }
        public KfzProdukteViewModel produkte { get; set; }

        public KfzViewModel_Anhaenger()
        {
            antragsfragen = new KfzAntragsfragenViewModel();
            produkte = new KfzProdukteViewModel();
        }
    }

    // Kfz Antragsfragen
    public class KfzAntragsfragenViewModel
    {
        public int isAbgelehnt { get; set; }
        public string abgelehntGrund { get; set; }
        public string abgelehntUnternehmen { get; set; }
    }

    public class KfzAntragsfragenViewModel_Kasko : KfzAntragsfragenViewModel
    {
        public int isKasko { get; set; }
        public string kaskoGrund { get; set; }
        public bool kaskoHasSchaden { get; set; }
        public string kaskoSchadenWelche { get; set; }
        public int hasVinkulierung { get; set; }
        public string vinkulierungZuGunsten { get; set; }
    }

    public class KfzAntragsfragenViewModel_BonusMalus : KfzAntragsfragenViewModel_Kasko
    {
        public int isBonusMalus { get; set; }
        public string bonusMalusVersicherer { get; set; }
        public string bonusMalusPolNr { get; set; }
        public string bonusMalusBeendetAm { get; set; }
        public string bonusMalusWegen { get; set; }
    }

    // Kfz Produktcontainer
    public class KfzProdukteViewModel
    {
        public Boolean hasHaftpflicht { get; set; }
        public KfzHaftpflichtViewModel haftpflicht {get; set;}
        public Boolean hasRechtsschutz { get; set; }
        public KfzRechtsschutzViewModel rechtsschutz { get; set; }

        public KfzProdukteViewModel()
        {
            hasHaftpflicht = false;
            haftpflicht = new KfzHaftpflichtViewModel();
            hasRechtsschutz = false;
            rechtsschutz = new KfzRechtsschutzViewModel();
        }
    }

    public class KfzProdukteViewModel_Pkw
    {
        public Boolean hasHaftpflicht { get; set; }
        public KfzHaftpflichtViewModel haftpflicht { get; set; }
        public Boolean hasKasko { get; set; }
        public KfzKaskoViewModel_Pkw_Lkw kasko { get; set; }
        public Boolean hasRechtsschutz { get; set; }
        public KfzRechtsschutzViewModel rechtsschutz { get; set; }
        public Boolean hasInsassen { get; set; }
        public KfzInsassenViewModel insassen { get; set; }

        public KfzProdukteViewModel_Pkw()
        {
            hasHaftpflicht = false;
            haftpflicht = new KfzHaftpflichtViewModel();
            hasKasko = false;
            kasko = new KfzKaskoViewModel_Pkw_Lkw();
            hasRechtsschutz = false;
            rechtsschutz = new KfzRechtsschutzViewModel();
            hasInsassen = false;
            insassen = new KfzInsassenViewModel();
        }
    }

    public class KfzProdukteViewModel_Lkw
    {
        public Boolean hasHaftpflicht { get; set; }
        public KfzHaftpflichtViewModel haftpflicht { get; set; }
        public Boolean hasKasko { get; set; }
        public KfzKaskoViewModel_Pkw_Lkw kasko { get; set; }
        public Boolean hasRechtsschutz { get; set; }
        public KfzRechtsschutzViewModel rechtsschutz { get; set; }
        public Boolean hasInsassen { get; set; }
        public KfzInsassenViewModel insassen { get; set; }

        public KfzProdukteViewModel_Lkw()
        {
            hasHaftpflicht = false;
            haftpflicht = new KfzHaftpflichtViewModel();
            hasKasko = false;
            kasko = new KfzKaskoViewModel_Pkw_Lkw();
            hasRechtsschutz = false;
            rechtsschutz = new KfzRechtsschutzViewModel();
            hasInsassen = false;
            insassen = new KfzInsassenViewModel();
        }
    }

    public class KfzProdukteViewModel_Motorrad
    {
        public Boolean hasHaftpflicht { get; set; }
        public KfzHaftpflichtViewModel haftpflicht { get; set; }
        public Boolean hasKasko { get; set; }
        public KfzKaskoViewModel_Motorrad kasko { get; set; }
        public Boolean hasRechtsschutz { get; set; }
        public KfzRechtsschutzViewModel rechtsschutz { get; set; }

        public KfzProdukteViewModel_Motorrad()
        {
            hasHaftpflicht = false;
            haftpflicht = new KfzHaftpflichtViewModel();
            hasKasko = false;
            kasko = new KfzKaskoViewModel_Motorrad();
            hasRechtsschutz = false;
            rechtsschutz = new KfzRechtsschutzViewModel();
        }
    }

    public class KfzProdukteViewModel_VierradGr50
    {
        public Boolean hasHaftpflicht { get; set; }
        public KfzHaftpflichtViewModel haftpflicht { get; set; }
        public Boolean hasRechtsschutz { get; set; }
        public KfzRechtsschutzViewModel rechtsschutz { get; set; }

        public KfzProdukteViewModel_VierradGr50()
        {
            hasHaftpflicht = false;
            haftpflicht = new KfzHaftpflichtViewModel();
            hasRechtsschutz = false;
            rechtsschutz = new KfzRechtsschutzViewModel();
        }
    }

    // ### Kfz Produkte
    // ### Haftpflicht
    public class KfzHaftpflichtViewModel
    {
        public int tarif { get; set; }
        public int versSum { get; set; }
        public int variante { get; set; }
        public Boolean hasAssistance { get; set; }

        public KfzHaftpflichtViewModel()
        {
            tarif = 0;
            versSum = 0;
            variante = 0;
            hasAssistance = false;
        }
    }

    // ### Kasko
    // Pkw Lkw
    public class KfzKaskoViewModel_Pkw_Lkw
    {
        public int tarif { get; set; }
        public int selbstbehalt { get; set; }
        public bool hasFifty { get; set; }
        public bool hasGap { get; set; }
        public bool hasKnt { get; set; }
        public bool hasElektropaket { get; set; }
    }

    // Motorrad
    public class KfzKaskoViewModel_Motorrad
    {
        public int tarif { get; set; }
    }

    public class KfzRechtsschutzViewModel
    {

    }

    public class KfzInsassenViewModel
    {

    }

    // Common
    public class Adresse
    {
        public string strasseNr { get; set; }
        public string plz { get; set; }
        public string ort { get; set; }
        public string land { get; set; }
    }

    public class Kontakt
    {
        public string tel { get; set; }
        public string mobil { get; set; }
        public string email { get; set; }
    }

    public class Bankdaten
    {
        public string kontoinhaber { get; set; }
        public string strasseNr { get; set; }
        public string plz { get; set; }
        public string ort { get; set; }
        public string iban { get; set; }
        public string bic { get; set; }
    }

    public class Bezugsberechtigt
    {
        public string vorname { get; set; }
        public string nachname { get; set; }
        public string geburtsdatum { get; set; }
        public string weiterePerson { get; set; }
    }

    public class WeitereVn
    {
        public int anrede { get; set; }
        public string titel { get; set; }
        public string vorname { get; set; }
        public string nachname { get; set; }
        public string geburtsdatum { get; set; }
        public Adresse adresse { get; set; }
        public int artBeschaeftigung { get; set; }
        public string beruf { get; set; }
    }

    public class InkassoAdr
    {
        public int anrede { get; set; }
        public string titel { get; set; }
        public string vorname { get; set; }
        public string nachname { get; set; }
        public Adresse adresse { get; set; }
    }

    public class RisikoAdr
    {
        public int anrede { get; set; }
        public string titel { get; set; }
        public string vorname { get; set; }
        public string nachname { get; set; }
        public Adresse adresse { get; set; }
    }
}
