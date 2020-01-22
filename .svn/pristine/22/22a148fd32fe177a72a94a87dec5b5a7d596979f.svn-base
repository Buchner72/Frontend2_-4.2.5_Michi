using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Vertrag
{
    [Serializable]
    [JsonObject(MemberSerialization.OptIn)]
    public class VierradGr50 : Kfz
    {
        #region Members
        public static int _CntTyp;
        //
        EnumVierradSubtyp _Subtyp;
        EnumAntrieb _Antrieb;
        int? _Leistung;
        bool _IsSteuerbefreit;
        Antragsfragen _Antragsfragen;
        Produkte_VierradGr50 _Produkte;
        #endregion

        #region Property
        [JsonProperty("subtyp")]
        public EnumVierradSubtyp Subtyp
        {
            get { return _Subtyp; }
            set { _Subtyp = value; }
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
        public Produkte_VierradGr50 Produkte
        {
            get { return _Produkte; }
            set { _Produkte = value; }
        }
        #endregion

        public VierradGr50()
        {
            _Subtyp = EnumVierradSubtyp.Atv_Quad;
            _Antrieb = EnumAntrieb.Benzin;
            _Leistung = null;
            _IsSteuerbefreit = false;
            _Antragsfragen = new Antragsfragen();
            _Produkte = new Produkte_VierradGr50();
        }
    }
}
