using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Vertrag;



namespace Vertrag
{
    public class UvAntragsfragen
    {
        #region Members UvAntragsfragen
        bool _IsGesund;
        List<Gesundheit> _ListEinschraenkung;
        List<Medikament> _ListMedikament;
        List<Sport> _ListSport;
        List<Verletzung> _ListVerletzung;
        bool _IsVUKV; //Bei einem Versicherungsunternehmen wurde für den Versicherten eine Krankenversicherung abgeschlossen?
        //Vp.VUAbgeschlossen _VUKVAbgeschl;
        string _KVAnstalt;
        string _KVPolNr;
        string _KVGrund;
        bool _IsVUUV; //Bei einem Versicherungsunternehmen wurde für den Versicherten eine Unfallversicherung abgeschlossen?
        //Vp.VUAbgeschlossen _VUUVAbgeschl;
        string _UVAnstalt;
        string _UVPolNr;
        string _UVGrund;
        #endregion

        #region Property UvAntragsfragen
        public bool IsGesund
        {
            get { return _IsGesund; }
            set { _IsGesund = value; }
        }
        public List<Gesundheit> ListEinschraenkung
        {
            get { return _ListEinschraenkung; }
            set { _ListEinschraenkung = value; }
        }
        public List<Medikament> ListMedikament
        {
            get { return _ListMedikament; }
            set { _ListMedikament = value; }
        }
        public List<Sport> ListSport
        {
            get { return _ListSport; }
            set { _ListSport = value; }
        }
        public List<Verletzung> ListVerletzung
        {
            get { return _ListVerletzung; }
            set { _ListVerletzung = value; }
        }
        public bool IsVUKV
        {
            get { return _IsVUKV; }
            set { _IsVUKV = value; }
        }
        //public Vp.VUAbgeschlossen VUKVAbgeschl
        //{
        //    get { return _VUKVAbgeschl; }
        //    set { _VUKVAbgeschl = value; }
        //}
        public string KVAnstalt
        {
            get { return _KVAnstalt; }
            set { _KVAnstalt = value; }
        }
        public string KVPolNr
        {
            get { return _KVPolNr; }
            set { _KVPolNr = value; }
        }
        public string KVGrund
        {
            get { return _KVGrund; }
            set { _KVGrund = value; }
        }
        public bool IsVUUV
        {
            get { return _IsVUUV; }
            set { _IsVUUV = value; }
        }
        //public Vp.VUAbgeschlossen VUUVAbgeschl
        //{
        //    get { return _VUUVAbgeschl; }
        //    set { _VUUVAbgeschl = value; }
        //}
        public string UVAnstalt
        {
            get { return _UVAnstalt; }
            set { _UVAnstalt = value; }
        }
        public string UVPolNr
        {
            get { return _UVPolNr; }
            set { _UVPolNr = value; }
        }
        public string UVGrund
        {
            get { return _UVGrund; }
            set { _UVGrund = value; }
        }
        #endregion

        #region Konstruktor UvAntragsfragen
        public UvAntragsfragen()
        {
            _IsGesund = false;

            _ListEinschraenkung = new List<Gesundheit>();
            Gesundheit EE = new Gesundheit { };
            _ListEinschraenkung.Add(EE);

            _ListMedikament = new List<Medikament>();
            Medikament ME = new Medikament { };
            _ListMedikament.Add(ME);

            _ListSport = new List<Sport>();
            Sport SP = new Sport { };
            _ListSport.Add(SP);

            _ListVerletzung = new List<Verletzung>();
            Verletzung VL = new Verletzung { };
            _ListVerletzung.Add(VL);

            _IsVUKV = false;
            //_VUKVAbgeschl = Vp.VUAbgeschlossen.None;
            _KVAnstalt = string.Empty;
            _KVPolNr = string.Empty;
            _KVGrund = string.Empty;
            _IsVUUV = false;
            //_VUUVAbgeschl = Vp.VUAbgeschlossen.None;
            _UVAnstalt = string.Empty;
            _UVPolNr = string.Empty;
            _UVGrund = string.Empty;
        }
        #endregion
       
    }

    //-Klassen für UvAntragsfragen--------------------------------------------------------------------------------------------------------------

    #region Klassen für UvAntragsfragen
    public class Gesundheit //Besteht eine gesundheitliche Einschränkung bzw. Erkrankung? welche und seit wann
    {
        #region Members Gesundheit
        string _Einschraenkung;
        #endregion

        #region Property Gesundheit
        public string Einschraenkung
        {
            get { return _Einschraenkung; }
            set { _Einschraenkung = value; }
        }
        #endregion

        #region Konstruktor Gesundheit
        public Gesundheit()
        {
            string _Einschraenkung = string.Empty;
        }
        #endregion
    }

    public class Medikament //Werden oder wurden Medikamente genommen?
    {
        #region Members Medikament
        string _Name;
        string _Wogegen;
        #endregion

        #region Property Medikament
        public string Name
        {
            get { return _Name; }
            set { _Name = value; }
        }

        public string Wogegen
        {
            get { return _Wogegen; }
            set { _Wogegen = value; }
        }
        #endregion

        #region Konstruktor Medikament
        public Medikament()
        {
            _Name = string.Empty;
            _Wogegen = string.Empty;
        }
        #endregion
    }

    public class Sport //Werden Sportarten ausgeübt?
    {
        #region Members Sport
        string _Art;
        bool _IsWettkampf;
        bool _IsMeisterschaft;

        #endregion
        #region Property Sport
        public string Art
        {
            get { return _Art; }
            set { _Art = value; }
        }

        public bool IsWettkampf
        {
            get { return _IsWettkampf; }
            set { _IsWettkampf = value; }
        }

        public bool IsMeisterschaft
        {
            get { return _IsMeisterschaft; }
            set { _IsMeisterschaft = value; }
        }
        #endregion
        #region Konstruktor Sport
        public Sport()
        {
            _Art = string.Empty;
            _IsWettkampf = false;
            _IsMeisterschaft = false;
        }

        #endregion
    }

    public class Verletzung //Erlittene Verletzungen/Unfälle?
    {
        #region Members Verletzungen
        string _Welche;
        string _Datum;
        bool _IsOP;
        bool _IsInvaliditaet;
        string _InvaliditaetProzent;
        #endregion
        #region Property Verletzungen
        public string Welche
        {
            get { return _Welche; }
            set { _Welche = value; }
        }
        public string Datum
        {
            get { return _Datum; }
            set { _Datum = value; }
        }
        public bool IsOP
        {
            get { return _IsOP; }
            set { _IsOP = value; }
        }
        public bool IsInvaliditaet
        {
            get { return _IsInvaliditaet; }
            set { _IsInvaliditaet = value; }
        }
        public string InvaliditaetProzent
        {
            get { return _InvaliditaetProzent; }
            set { _InvaliditaetProzent = value; }
        }
        #endregion
        #region Konstruktor Verletzungen
        public Verletzung()
        {
            _Welche = string.Empty;
            _Datum = string.Empty;
            _IsOP = false;
            _IsInvaliditaet = false;
            _InvaliditaetProzent = string.Empty;
        }
        #endregion
    }

    #endregion
}
