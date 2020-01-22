using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Vertrag
{
    [Serializable]
    [JsonObject(MemberSerialization.OptIn)]
    public class Zugmaschine : Kfz
    {
        #region Members
        public static int _CntTyp;
        //
        EnumAntrieb _Antrieb;
        int? _Leistung;
        int? _Geschwindigkeit;
        Antragsfragen _Antragsfragen;
        Produkte _Produkte;
        #endregion

        #region Property
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
        [JsonProperty("geschwindigkeit")]
        public int? Geschwindigkeit
        {
            get { return _Geschwindigkeit; }
            set { _Geschwindigkeit = value; }
        }
        [JsonProperty("antragsfragen")]
        public Antragsfragen Antragsfragen
        {
            get { return _Antragsfragen; }
            set { _Antragsfragen = value; }
        }
        [JsonProperty("produkte")]
        public Produkte Produkte
        {
            get { return _Produkte; }
            set { _Produkte = value; }
        }
        #endregion

        public Zugmaschine()
        {
            _Antrieb = EnumAntrieb.Benzin;
            _Leistung = null;
            _Geschwindigkeit = null;
            _Antragsfragen = new Antragsfragen();
            _Produkte = new Produkte();
        }
    }
}
