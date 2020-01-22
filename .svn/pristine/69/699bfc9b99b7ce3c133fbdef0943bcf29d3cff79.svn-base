using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Vertrag
{
    [Serializable]
    public class Vn : Person
    {
        #region Members    
        private int _id;
        private string _kundennr;
        private Adresse _adresse;
        private EnumFamilienstand _familienstand;
        private string _berufsbezeichnung;
        private string _besondererArbeitgeber;
        private string _besondererBeruf;
        private string _besondererDienstort;
        private EnumSvAnstalt _svAnstalt;
        private string _svNr;
        private string _hausarzt;
        private Kontakt _kontakt;
        private bool _isEuBuerger;
        private bool _hasProbefuehrerschein;
        private string _fuehrerscheinSeitVon;
        private string _fuehrerscheinGruppe;
        private bool _isVnKontoinhaber;
        private Bankdaten _bankdaten;
        private EnumBezugsberechtigt _isBezugsberechtigt;
        private Bezugsberechtigt _bezugsberechtigt;
        private bool _hasWeitereVn;
        private WeitereVn _weitereVn;
        private bool _hasAbweichendeInkassoAdr;
        private InkassoAdr _inkassoAdr;
        // Fehlerkennzeichen
        bool _HasErrorVn_Alter15; //Vn < 15 -> keine Annahme Kfz Haftpflicht
        bool _HasErrorVn_Alter21; //Vn < 21 -> keine Annahme Kfz Haftpflicht
        bool _HasErrorVn_Alter23; //Vn < 23 -> kein Freischadenbonus/Schadenersatzbeitrag Kfz Haftpflicht
        bool _HasErrorVn_Alter75; //Vn > 75 -> Anfragepflichtig Kfz
        bool _HasErrorVn_Selbstaendig; // Vn -> keine Annahme Kfz Rechtsschutz
        #endregion

        #region Property
        [JsonProperty(propertyName: "id")]
        public int Id
        {
            get { return _id; }
            set { _id = value; }
        }
        [JsonProperty(propertyName: "kundennr")]
        public string Kundennr
        {
            get { return _kundennr; }
            set { _kundennr = value; }
        }
        [JsonProperty(propertyName: "adresse")]
        public Adresse Adresse
        {
            get { return _adresse; }
            set { _adresse = value; }
        }
        [JsonProperty(propertyName: "familienstand")]
        public EnumFamilienstand Familienstand
        {
            get { return _familienstand; }
            set { _familienstand = value; }
        }
        [JsonProperty(propertyName: "berufsbezeichnung")]
        public string Berufsbezeichnung
        {
            get { return _berufsbezeichnung; }
            set { _berufsbezeichnung = value; }
        }

        [JsonProperty(propertyName: "besondererArbeitgeber")]
        public string BesondererArbeitgeber
        {
            get { return _besondererArbeitgeber; }
            set { _besondererArbeitgeber = value; }
        }
        [JsonProperty(propertyName: "besondererBeruf")]
        public string BesondererBeruf
        {
            get { return _besondererBeruf; }
            set { _besondererBeruf = value; }
        }
        [JsonProperty(propertyName: "besondererDienstort")]
        public string BesondererDienstort
        {
            get { return _besondererDienstort; }
            set { _besondererDienstort = value; }
        }
        [JsonProperty(propertyName: "svAnstalt")]
        public EnumSvAnstalt SvAnstalt
        {
            get { return _svAnstalt; }
            set { _svAnstalt = value; }
        }
        [JsonProperty(propertyName: "svNr")]
        public string SvNr
        {
            get { return _svNr; }
            set { _svNr = value; }
        }
        [JsonProperty(propertyName: "hausarzt")]
        public string Hausarzt
        {
            get { return _hausarzt; }
            set { _hausarzt = value; }
        }
        [JsonProperty(propertyName: "kontakt")]
        public Kontakt Kontakt
        {
            get { return _kontakt; }
            set { _kontakt = value; }
        }
        [JsonProperty(propertyName: "isEuBuerger")]
        public bool IsEuBuerger
        {
            get { return _isEuBuerger; }
            set { _isEuBuerger = value; }
        }
        [JsonProperty(propertyName: "hasProbefuehrerschein")]
        public bool HasProbefuehrerschein
        {
            get { return _hasProbefuehrerschein; }
            set { _hasProbefuehrerschein = value; }
        }
        [JsonProperty(propertyName: "fuehrerscheinSeitVon")]
        public string FuehrerscheinSeitVon
        {
            get { return _fuehrerscheinSeitVon; }
            set { _fuehrerscheinSeitVon = value; }
        }
        [JsonProperty(propertyName: "fuehrerscheinGruppe")]
        public string FuehrerscheinGruppe
        {
            get { return _fuehrerscheinGruppe; }
            set { _fuehrerscheinGruppe = value; }
        }
        [JsonProperty(propertyName: "isVnKontoinhaber")]
        public bool IsVnKontoinhaber
        {
            get { return _isVnKontoinhaber; }
            set { _isVnKontoinhaber = value; }
        }
        [JsonProperty(propertyName: "bankdaten")]
        public Bankdaten Bankdaten
        {
            get { return _bankdaten; }
            set { _bankdaten = value; }
        }
        [JsonProperty(propertyName: "isBezugsberechtigt")]
        public EnumBezugsberechtigt IsBezugsberechtigt
        {
            get { return _isBezugsberechtigt; }
            set { _isBezugsberechtigt = value; }
        }
        [JsonProperty(propertyName: "bezugsberechtigt")]
        public Bezugsberechtigt Bezugsberechtigt
        {
            get { return _bezugsberechtigt; }
            set { _bezugsberechtigt = value; }
        }
        [JsonProperty(propertyName: "hasWeitereVn")]
        public bool HasWeitereVn
        {
            get { return _hasWeitereVn; }
            set { _hasWeitereVn = value; }
        }
        [JsonProperty(propertyName: "weitereVn")]
        public WeitereVn WeitereVn
        {
            get { return _weitereVn; }
            set { _weitereVn = value; }
        }
        [JsonProperty(propertyName: "hasAbweichendeInkassoAdr")]
        public bool HasAbweichendeInkassoAdr
        {
            get { return _hasAbweichendeInkassoAdr; }
            set { _hasAbweichendeInkassoAdr = value; }
        }
        [JsonProperty(propertyName: "inkassoAdr")]
        public InkassoAdr InkassoAdr
        {
            get { return _inkassoAdr; }
            set { _inkassoAdr = value; }
        }
        // Fehlerkennzeichen
        [JsonProperty("hasErrorVn_Alter15")]
        public bool HasErrorVn_Alter15
        {
            get { return _HasErrorVn_Alter15; }
            set { _HasErrorVn_Alter15 = value; }
        }
        [JsonProperty("hasErrorVn_Alter21")]
        public bool HasErrorVn_Alter21
        {
            get { return _HasErrorVn_Alter21; }
            set { _HasErrorVn_Alter21 = value; }
        }
        [JsonProperty("hasErrorVn_Alter23")]
        public bool HasErrorVn_Alter23
        {
            get { return _HasErrorVn_Alter23; }
            set { _HasErrorVn_Alter23 = value; }
        }
        [JsonProperty("hasErrorVn_Alter75")]
        public bool HasErrorVn_Alter75
        {
            get { return _HasErrorVn_Alter75; }
            set { _HasErrorVn_Alter75 = value; }
        }
        [JsonProperty("hasErrorVn_Selbstaendig")]
        public bool HasErrorVn_Selbstaendig
        {
            get { return _HasErrorVn_Selbstaendig; }
            set { _HasErrorVn_Selbstaendig = value; }
        }
        #endregion

        public Vn()
        {
            _id = -1;
            _kundennr = "";
            _adresse = new Adresse();
            _familienstand = EnumFamilienstand.ledig;
            _berufsbezeichnung = String.Empty;
            _besondererArbeitgeber = String.Empty;
            _besondererBeruf = String.Empty;
            _besondererDienstort = String.Empty;
            _svAnstalt = EnumSvAnstalt.None;
            _svNr = String.Empty;
            _kontakt = new Kontakt();
            _isEuBuerger = true;
            _hasProbefuehrerschein = false;
            _fuehrerscheinSeitVon = String.Empty;
            _fuehrerscheinGruppe = String.Empty;
            _isVnKontoinhaber = true;
            _bankdaten = new Bankdaten();
            _isBezugsberechtigt = EnumBezugsberechtigt.Ueberbringer;
            _bezugsberechtigt = new Bezugsberechtigt();
            _hasWeitereVn = false;
            _weitereVn = new WeitereVn();
            _hasAbweichendeInkassoAdr = false;
            _inkassoAdr = new InkassoAdr();
            // Fehlerkennzeichen
            _HasErrorVn_Alter15 = false;
            _HasErrorVn_Alter21 = false;
            _HasErrorVn_Alter23 = false;
            _HasErrorVn_Alter75 = false;
            _HasErrorVn_Selbstaendig = false;
        }

        #region Methoden

        #endregion
    }
}
