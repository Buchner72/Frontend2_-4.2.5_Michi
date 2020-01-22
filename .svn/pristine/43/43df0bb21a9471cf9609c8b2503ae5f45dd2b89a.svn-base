using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Vertrag
{
    [Serializable]
    [JsonObject(MemberSerialization.OptIn)]
    public class Anhaenger : Kfz
    {
        #region Members
        public static int _CntTyp;
        //
        int? _Nutzlast;
        Antragsfragen _Antragsfragen;
        Produkte _Produkte;
        #endregion

        #region Property
        [JsonProperty("nutzlast")]
        public int? Nutzlast
        {
            get { return _Nutzlast; }
            set { _Nutzlast = value; }
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

        public Anhaenger()
        {
            _Nutzlast = null;
            _Antragsfragen = new Antragsfragen();
            _Produkte = new Produkte();
        }
    }
}
