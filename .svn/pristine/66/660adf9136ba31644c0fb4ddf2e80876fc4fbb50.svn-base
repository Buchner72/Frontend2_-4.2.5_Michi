using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Vertrag
{
    [Serializable]
    [JsonObject(MemberSerialization.OptIn)]
    public class VierradKl50 : Kfz
    {
        #region Members
        public static int _CntTyp;
        //
        EnumAntrieb _Antrieb;
        int? _Leistung;
        bool _IsSteuerbefreit;
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
        [JsonProperty("isSteuerbefreit")]
        public bool IsSteuerbefreit
        {
            get { return _IsSteuerbefreit; }
            set { _IsSteuerbefreit = value; }
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

        public VierradKl50()
        {
            _Antrieb = EnumAntrieb.Benzin;
            _Leistung = null;
            _IsSteuerbefreit = false;
            _Antragsfragen = new Antragsfragen();
            _Produkte = new Produkte();
        }
    }
}
