using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Vertrag
{
    [Serializable]
    [JsonObject(MemberSerialization.OptIn)]
    public class Moped : Kfz
    {
        #region Members
        public static int _CntTyp;
        //
        EnumAntrieb _Antrieb;
        int? _Hubraum;
        int? _Sitzplaetze;
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
        [JsonProperty("hubraum")]
        public int? Hubraum
        {
            get { return _Hubraum; }
            set { _Hubraum = value; }
        }
        [JsonProperty("sitzplaetze")]
        public int? Sitzplaetze
        {
            get { return _Sitzplaetze; }
            set { _Sitzplaetze = value; }
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

        public Moped()
        {
            _Antrieb = EnumAntrieb.Benzin;
            _Hubraum = null;
            _Sitzplaetze = null;
            _Antragsfragen = new Antragsfragen();
            _Produkte = new Produkte();
        }
    }
}
