using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Vertrag
{
    [Serializable]
    [JsonObject(MemberSerialization.OptIn)]
    public class Pkw : Kfz
    {
        #region Members
        public static int _CntTyp;
        //
        EnumEingabeArt _EingabeArt;
        string _NationalCode;
        EnumAntrieb _Antrieb;
        int? _Leistung;
        double? _Listenpreis;
        double? _Sonderausstattung;
        double? _Folierung;
        double? _Gesamtpreis;
        string _Bonusstufe;
        bool _HasKat;
        bool _HasSitze7Plus;
        bool _IsOldtimer;
        bool _IsSteuerbefreit;
        // Fehlerkennzeichen
        // Haftpflicht
        bool _HasErrorHaftpflicht_KfzMarke; //Kfz BMW I3/I4/I5/I8 -> keine Annahme
        // Kasko
        bool _HasErrorKasko_KfzMarke; //Kfz BMW X6 -> keine Annahme
        bool _HasErrorKasko_KfzGesamtpreis; //Kfz Listenpreis + Sonderausstattung (- 2.500 Freibetrag)
        bool _HasErrorKasko_KfzAlter5; //Kfz > 5 -> nur Teilkasko
        bool _HasErrorKasko_KfzAlter8; //Kfz > 8 -> keine Annahme
        //
        Antragsfragen_BonusMalus _Antragsfragen;
        Produkte_Pkw _Produkte;
        #endregion

        #region Property      
        [JsonProperty("eingabeArt")]
        public EnumEingabeArt EingabeArt
        {
            get { return _EingabeArt; }
            set { _EingabeArt = value; }
        }
        [JsonProperty("nationalCode")]
        public string NationalCode
        {
            get { return _NationalCode; }
            set { _NationalCode = value; }
        }
        [JsonProperty("antrieb")]
        public EnumAntrieb Antrieb
        {
            get { return _Antrieb; }
            set { _Antrieb = value; }
        }
        [JsonProperty("leistung")]
        public int? Leistung
        {
            get { return _Leistung; }
            set { _Leistung = value; }
        }
        [JsonProperty("listenpreis")]
        public double? Listenpreis
        {
            get { return _Listenpreis; }
            set { _Listenpreis = value; }
        }
        [JsonProperty("sonderausstattung")]
        public double? Sonderausstattung
        {
            get { return _Sonderausstattung; }
            set { _Sonderausstattung = value; }
        }
        [JsonProperty("folierung")]
        public double? Folierung
        {
            get { return _Folierung; }
            set { _Folierung = value; }
        }
        [JsonProperty("gesamtpreis")]
        public double? Gesamtpreis
        {
            get { return _Gesamtpreis; }
            set { _Gesamtpreis = value; }
        }
        [JsonProperty("bonusstufe")]
        public string Bonusstufe
        {
            get { return _Bonusstufe; }
            set { _Bonusstufe = value; }
        }
        [JsonProperty("hasKat")]
        public bool HasKat
        {
            get { return _HasKat; }
            set { _HasKat = value; }
        }
        [JsonProperty("hasSitze7Plus")]
        public bool HasSitze7Plus
        {
            get { return _HasSitze7Plus; }
            set { _HasSitze7Plus = value; }
        }
        [JsonProperty("isOldtimer")]
        public bool IsOldtimer
        {
            get { return _IsOldtimer; }
            set { _IsOldtimer = value; }
        }
        [JsonProperty("isSteuerbefreit")]
        public bool IsSteuerbefreit
        {
            get { return _IsSteuerbefreit; }
            set { _IsSteuerbefreit = value; }
        }
        // Fehlerkennzeichen
        // Haftpflicht
        [JsonProperty("hasErrorHaftpflicht_KfzMarke")]
        public bool HasErrorHaftpflicht_KfzMarke
        {
            get { return _HasErrorHaftpflicht_KfzMarke; }
            set { _HasErrorHaftpflicht_KfzMarke = value; }
        }
        // Kasko
        [JsonProperty("hasErrorKasko_KfzMarke")]
        public bool HasErrorKasko_KfzMarke
        {
            get { return _HasErrorKasko_KfzMarke; }
            set { _HasErrorKasko_KfzMarke = value; }
        }
        [JsonProperty("hasErrorKasko_KfzGesamtpreis")]
        public bool HasErrorKasko_KfzGesamtpreis
        {
            get { return _HasErrorKasko_KfzGesamtpreis; }
            set { _HasErrorKasko_KfzGesamtpreis = value; }
        }
        [JsonProperty("hasErrorKasko_KfzAlter5")]
        public bool HasErrorKasko_KfzAlter5
        {
            get { return _HasErrorKasko_KfzAlter5; }
            set { _HasErrorKasko_KfzAlter5 = value; }
        }
        [JsonProperty("hasErrorKasko_KfzAlter8")]
        public bool HasErrorKasko_KfzAlter8
        {
            get { return _HasErrorKasko_KfzAlter8; }
            set { _HasErrorKasko_KfzAlter8 = value; }
        }
        //
        [JsonProperty("antragsfragen")]
        public Antragsfragen_BonusMalus Antragsfragen
        {
            get { return _Antragsfragen; }
            set { _Antragsfragen = value; }
        }
        [JsonProperty("produkte")]
        public Produkte_Pkw Produkte
        {
            get { return _Produkte; }
            set { _Produkte = value; }
        }
        #endregion

        public Pkw()
        {
            _EingabeArt = EnumEingabeArt.Manuell;
            _NationalCode = string.Empty;
            _Antrieb = EnumAntrieb.Benzin;
            _Leistung = null;
            _Listenpreis = null;
            _Sonderausstattung = null;
            _Folierung = null;
            _Gesamtpreis = null;
            _Bonusstufe = string.Empty;
            _HasKat = true;
            _HasSitze7Plus = false;
            _IsOldtimer = false;
            _IsSteuerbefreit = false;
            // Fehlerkennzeichen
            // Haftpflicht
            _HasErrorHaftpflicht_KfzMarke = false;
            // Kasko
            _HasErrorKasko_KfzMarke = false;
            _HasErrorKasko_KfzGesamtpreis = false;
            _HasErrorKasko_KfzAlter5 = false;
            _HasErrorKasko_KfzAlter8 = false;
            //
            _Antragsfragen = new Antragsfragen_BonusMalus();
            _Produkte = new Produkte_Pkw();
        }
    }
}
