using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Vertrag
{
    [Serializable]
    [JsonObject(MemberSerialization.OptIn)]
    public class Kfz
    {
        #region Members
        public static int _Cnt;
        //
        int _Id;
        int _Vertrag;
        int _Fahrzeug;
        string _PolNr;
        DateTime _Versicherungsbeginn;
        string _Wunschhauptfaelligkeit;
        string _Typ;
        string _Marke;
        string _Modell;
        string _Kennzeichen;
        string _VbNr;
        string _FahrgestellNr;
        DateTime? _ErstzulassungsDatum;
        DateTime? _AnmeldeDatum;
        //
        int? _Alter;
        //
        bool _MarkToDelete;
        #endregion

        #region Property
        [JsonProperty("id")]
        public int Id
        {
            get { return _Id; }
            set { _Id = value; }
        }
        [JsonProperty("vertrag")]
        public int Vertrag
        {
            get { return _Vertrag; }
            set { _Vertrag = value; }
        }
        [JsonProperty("fahrzeug")]
        public int Fahrzeug
        {
            get { return _Fahrzeug; }
            set { _Fahrzeug = value; }
        }
        [JsonProperty("polNr")]
        public string PolNr
        {
            get { return _PolNr; }
            set { _PolNr = value; }
        }
        [JsonProperty("versicherungsbeginn")]
        public DateTime Versicherungsbeginn
        {
            get { return _Versicherungsbeginn; }
            set { _Versicherungsbeginn = value; }
        }
        [JsonProperty("wunschhauptfaelligkeit")]
        public string Wunschhauptfaelligkeit
        {
            get { return _Wunschhauptfaelligkeit; }
            set { _Wunschhauptfaelligkeit = value; }
        }
        [JsonProperty("typ")]
        public string Typ
        {
            get { return _Typ; }
            set { _Typ = value; }
        }
        [JsonProperty("marke")]
        public string Marke
        {
            get { return _Marke; }
            set { _Marke = value; }
        }
        [JsonProperty("modell")]
        public string Modell
        {
            get { return _Modell; }
            set { _Modell = value; }
        }
        [JsonProperty("kennzeichen")]
        public string Kennzeichen
        {
            get { return _Kennzeichen; }
            set { _Kennzeichen = value; }
        }
        [JsonProperty("vbnr")]
        public string VbNr
        {
            get { return _VbNr; }
            set { _VbNr = value; }
        }
        [JsonProperty("fahrgestellNr")]
        public string FahrgestellNr
        {
            get { return _FahrgestellNr; }
            set { _FahrgestellNr = value; }
        }
        [JsonProperty("erstzulassungsDatum")]
        public DateTime? ErstzulassungsDatum
        {
            get { return _ErstzulassungsDatum; }
            set { _ErstzulassungsDatum = value; }
        }
        [JsonProperty("anmeldeDatum")]
        public DateTime? AnmeldeDatum
        {
            get { return _AnmeldeDatum; }
            set { _AnmeldeDatum = value; }
        }
        //
        [JsonProperty("alter")]
        public int? Alter
        {
            get { return _Alter; }
            set { _Alter = value; }
        }
        //
        public bool MarkToDelete
        {
            get { return _MarkToDelete; }
            set { _MarkToDelete = value; }
        }
        #endregion

        public Kfz()
        {
            _Id = -1;
            _Vertrag = 1;
            _Fahrzeug = 1;
            _PolNr = String.Empty;
            _Versicherungsbeginn = DateTime.Now;
            _Wunschhauptfaelligkeit = String.Empty;
            _Typ = String.Empty;
            _Marke = String.Empty;
            _Modell = String.Empty;
            _Kennzeichen = String.Empty;
            _VbNr = String.Empty;
            _FahrgestellNr = String.Empty;
            _ErstzulassungsDatum = null;
            _AnmeldeDatum = null;
            //
            _Alter = null;
            //
            _MarkToDelete = false;
        }
    }
}
