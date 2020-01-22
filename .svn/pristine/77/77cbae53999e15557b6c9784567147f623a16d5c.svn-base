using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Vertrag
{
    [Serializable]
    [JsonObject(MemberSerialization.OptIn)]
    public class Motorrad : Kfz
    {
        #region Members
        public static int _CntTyp;
        //
        string _NationalCode;
        EnumAntrieb _Antrieb;
        int? _Hubraum;
        double? _Listenpreis;
        double? _Sonderausstattung;
        double? _Gesamtpreis;
        string _Bonusstufe;
        bool _IsOldtimer;
        bool _IsSteuerbefreit;
        // Fehlerkennzeichen
        // Kasko
        bool _HasErrorKasko_KfzGesamtpreis; //Kfz Listenpreis + Sonderausstattung (- 1.500 Freibetrag) >= 100.000
        bool _HasErrorKasko_KfzAlter5; //Kfz > 5 -> nur Teilkasko
        bool _HasErrorKasko_KfzAlter8; //Kfz > 8 -> keine Annahme
        //
        Antragsfragen_Kasko _Antragsfragen;
        Produkte_Motorrad _Produkte;
        #endregion

        #region Property
        [JsonProperty("nationalcode")]
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
        [JsonProperty("hubraum")]
        public int? Hubraum
        {
            get { return _Hubraum; }
            set { _Hubraum = value; }
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
        // Kasko
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
        public Antragsfragen_Kasko Antragsfragen
        {
            get { return _Antragsfragen; }
            set { _Antragsfragen = value; }
        }
        [JsonProperty("produkte")]
        public Produkte_Motorrad Produkte
        {
            get { return _Produkte; }
            set { _Produkte = value; }
        }
        #endregion

        public Motorrad()
        {
            _NationalCode = string.Empty;
            _Antrieb = EnumAntrieb.Benzin;
            _Hubraum = null;
            _Listenpreis = null;
            _Sonderausstattung = null;
            _Bonusstufe = string.Empty;
            _IsOldtimer = false;
            _IsSteuerbefreit = false;
            // Fehlerkennzeichen
            // Kasko
            _HasErrorKasko_KfzGesamtpreis = false;
            _HasErrorKasko_KfzAlter5 = false;
            _HasErrorKasko_KfzAlter8 = false;
            //
            _Antragsfragen = new Antragsfragen_Kasko();
            _Produkte = new Produkte_Motorrad();
        }
    }
}
