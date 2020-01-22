using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Vertrag;

namespace Vertrag
{
    public class KvAntragsfragen
    {
        #region Members KvAntragsfragen
        bool _IsKrank;                              //Bestehen oder bestanden Beschwerden/Erkrankungen / erlittene Verletzungen/Vergiftungen?
        List<BeschwErkrVerlVergif> _ListIsKrank;
        bool _IsKrankInvaliditaet;                 //Besteht eine dauernde Invalidität:
        bool _IsKrankRente;                        //Beziehen Sie eine Rente:
        bool _IsSehkraft;                          //Beeinträchtigungen der Sehkraft?
        string _Dioptrien_links;
        string _Dioptrien_rechts;
        bool _IsSportGefahr;                        //ausgeübte Sportarten/besondere Gefahren?
        List<SportGefahr> _ListSportGefahr;
        bool _IsMedikamentSuchtgift;                       //Nahmen/nehmen Sie regelmäßig Medikamente, Alkohol, Tabak und/oder Suchtgifte zu sich:
        List<MedikamentSuchtgift> _ListMedikamentSuchtgift;
        bool _IsSchwanger;                          //Besteht derzeit eine Schwangerschaft?
        string _SchwangerTermin;                    //Geburtstermin laut Mutter-Kind-Pass:
        string _SchwangerAnzahl;                    //Wie viele Geburten, Fehlgeburten gingen voraus?
        string _SchwangerRisiko;                    //Risikogeburten, z.B. Kaiserschnitt?
        string _SchwangerUnfruchtbar;               //Besteht eine Unfruchtbarkeit und wurde ein künstliche Befruchtung vorgenommen?
        bool _IsTherapie;                           //Wurden oder werden Therapien durchgeführt bzw. sind solche geplant?
        List<Therapien> _ListTherapien;
        bool _IsPflegegeld;                         //Haben Sie jemals ein Pflegegeld bzw. eine Pflegerente bezogen, bzw. wurde diese beantragt?
        List<Pflegegeld> _ListPflegegeld;
        bool _IsKVabgeschlossen;                //Bei einem Versicherungsunternehmen wurde für den Versicherten eine Krankenversicherung abgeschlossen?
        //Vp.VUAbgeschlossen _VUKVAbgeschl;
        string _KVAnstalt;
        string _KVPolNr;
        string _KVGrund;
        #endregion

        #region Property KvAntragsfragen
        public bool IsKrank
        {
            get { return _IsKrank; }
            set { _IsKrank = value; }
        }
        public List<BeschwErkrVerlVergif> ListIsKrank
        {
            get { return _ListIsKrank; }
            set { _ListIsKrank = value; }
        }
        public bool IsKrankInvaliditaet
        {
            get { return _IsKrankInvaliditaet; }
            set { _IsKrankInvaliditaet = value; }
        }
        public bool IsKrankRente
        {
            get { return _IsKrankRente; }
            set { _IsKrankRente = value; }
        }
        public bool IsSehkraft
        {
            get { return _IsSehkraft; }
            set { _IsSehkraft = value; }
        }
        public string Dioptrien_links
        {
            get { return _Dioptrien_links; }
            set { _Dioptrien_links = value; }
        }
        public string Dioptrien_rechts
        {
            get { return _Dioptrien_rechts; }
            set { _Dioptrien_rechts = value; }
        }
        public bool IsSportGefahr
        {
            get { return _IsSportGefahr; }
            set { _IsSportGefahr = value; }
        }
        public List<SportGefahr> ListSportGefahr
        {
            get { return _ListSportGefahr; }
            set { _ListSportGefahr = value; }
        }
        public bool IsMedikamentSuchtgift
        {
            get { return _IsMedikamentSuchtgift; }
            set { _IsMedikamentSuchtgift = value; }
        }
        public List<MedikamentSuchtgift> ListMedikamentSuchtgift
        {
            get { return _ListMedikamentSuchtgift; }
            set { _ListMedikamentSuchtgift = value; }
        }
        public bool IsSchwanger
        {
            get { return _IsSchwanger; }
            set { _IsSchwanger = value; }
        }
        public string SchwangerTermin
        {
            get { return _SchwangerTermin; }
            set { _SchwangerTermin = value; }
        }
        public string SchwangerAnzahl
        {
            get { return _SchwangerAnzahl; }
            set { _SchwangerAnzahl = value; }
        }
        public string SchwangerRisiko
        {
            get { return _SchwangerRisiko; }
            set { _SchwangerRisiko = value; }
        }
        public string SchwangerUnfruchtbar
        {
            get { return _SchwangerUnfruchtbar; }
            set { _SchwangerUnfruchtbar = value; }
        }
        public bool IsTherapie
        {
            get { return _IsTherapie; }
            set { _IsTherapie = value; }
        }
        public List<Therapien> ListTherapien
        {
            get { return _ListTherapien; }
            set { _ListTherapien = value; }
        }
        public bool IsPflegegeld
        {
            get { return _IsPflegegeld; }
            set { _IsPflegegeld = value; }
        }
        public List<Pflegegeld> ListPflegegeld
        {
            get { return _ListPflegegeld; }
            set { _ListPflegegeld = value; }
        }
        public bool IsKVabgeschlossen
        {
            get { return _IsKVabgeschlossen; }
            set { _IsKVabgeschlossen = value; }
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
        #endregion

        #region Konstruktor KvAntragsfragen
        public KvAntragsfragen()
        {
            _IsKrank = false;

            _ListIsKrank = new List<BeschwErkrVerlVergif>();
            BeschwErkrVerlVergif BEVV = new BeschwErkrVerlVergif { };
            _ListIsKrank.Add(BEVV);

            _IsKrankInvaliditaet = false;
            _IsKrankRente = false;
            _IsSehkraft = false;
            _Dioptrien_links = string.Empty;
            _Dioptrien_rechts = string.Empty;
            _IsSportGefahr = false;

            _ListSportGefahr = new List<SportGefahr>();
            SportGefahr SPG = new SportGefahr { };
            _ListSportGefahr.Add(SPG);

            _IsMedikamentSuchtgift = false;

            _ListMedikamentSuchtgift = new List<MedikamentSuchtgift>();
            MedikamentSuchtgift MSG = new MedikamentSuchtgift { };
            _ListMedikamentSuchtgift.Add(MSG);

            _IsSchwanger = false;
            _SchwangerTermin = string.Empty;
            _SchwangerAnzahl = string.Empty;
            _SchwangerRisiko = string.Empty;
            _SchwangerUnfruchtbar = string.Empty;
            _IsTherapie = false;

            _ListTherapien = new List<Therapien>();
            Therapien THP = new Therapien { };
            _ListTherapien.Add(THP);

            _IsPflegegeld = false;
            _ListPflegegeld = new List<Pflegegeld>();
            Pflegegeld PFG = new Pflegegeld { };
            _ListPflegegeld.Add(PFG);

            _IsKVabgeschlossen = false;
            //_VUKVAbgeschl = Vp.VUAbgeschlossen.None;
            _KVAnstalt = string.Empty;
            _KVPolNr = string.Empty;
            _KVGrund = string.Empty;
        }

        #endregion
    }

    //-Klassen für UvAntragsfragen---------------------
    #region Klassen für KvAntragsfragen
    public class BeschwErkrVerlVergif
    {
        #region Members BeschwErkrVerlVergif
        string _VerletzungsArt;
        bool _IsAerztlBehand;
        bool _IsOP;
        string _Krankenhaus;
        string _Jahr;
        bool _IsGeheilt;
        #endregion

        #region Property BeschwErkrVerlVergif
        public string VerletzungsArt
        {
            get { return _VerletzungsArt; }
            set { _VerletzungsArt = value; }
        }
        public bool IsAerztlBehand
        {
            get { return _IsAerztlBehand; }
            set { _IsAerztlBehand = value; }
        }
        public bool IsOP
        {
            get { return _IsOP; }
            set { _IsOP = value; }
        }
        public string Krankenhaus
        {
            get { return _Krankenhaus; }
            set { _Krankenhaus = value; }
        }
        public string Jahr
        {
            get { return _Jahr; }
            set { _Jahr = value; }
        }
        public bool IsGeheilt
        {
            get { return _IsGeheilt; }
            set { _IsGeheilt = value; }
        }
        #endregion

        #region Konstruktor BeschwErkrVerlVergif
        public BeschwErkrVerlVergif()
        {
            _VerletzungsArt = string.Empty;
            _IsAerztlBehand = false;
            _IsOP = false;
            _Krankenhaus = string.Empty;
            _Jahr = string.Empty;
            _IsGeheilt = false;
        }

        #endregion

    }

    public class SportGefahr
    {
        #region Members Sport
        string _Sportart;

        #endregion

        #region Property Sport
        public string Sportart
        {
            get { return _Sportart; }
            set { _Sportart = value; }
        }
        #endregion

        #region Konstruktor Sport
        public SportGefahr()
        {
            _Sportart = string.Empty;
        }
        #endregion
    }

    public class MedikamentSuchtgift
    {
        #region Members MedikamentSuchtgift
        string _Art;
        string _Verbrauch;
        #endregion

        #region Property MedikamentSuchtgift
        public string Art
        {
            get { return _Art; }
            set { _Art = value; }
        }
        public string Verbrauch
        {
            get { return _Verbrauch; }
            set { _Verbrauch = value; }
        }
        #endregion

        #region Konstruktor MedikamentSuchtgift
        public MedikamentSuchtgift()
        {
            _Art = string.Empty;
            _Verbrauch = string.Empty;
        }
        #endregion

    }

    public class Therapien
    {
        #region Members Therapien
        string _WannWarum;
        #endregion

        #region Property Therapien
        public string WannWarum
        {
            get { return _WannWarum; }
            set { _WannWarum = value; }
        }
        #endregion

        #region Konstruktor Therapien
        public Therapien()
        {
            _WannWarum = string.Empty;
        }

        #endregion
    }

    public class Pflegegeld
    {
        #region Members Pflegegeld
        string _WannWarum;
        #endregion

        #region Property Pflegegeld
        public string WannWarum
        {
            get { return _WannWarum; }
            set { _WannWarum = value; }
        }
        #endregion

        #region Konstruktor Pflegegeld
        public Pflegegeld()
        {
            _WannWarum = string.Empty;
        }
        #endregion
    }

    #endregion
}
