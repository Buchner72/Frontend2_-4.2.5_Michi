using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class UvDaten
    {
        #region Members UvDaten
        bool _IsActiv;
        string _Gebiet;
        string _BesondereVereinbarungen;
        Bankdaten _Zahlungsdaten;
        InkassoAdr _Inkassodaten;
        HighestAmateurgruppe _HighestAmateursportgruppe;
        double _PrAmateursportgruppe;
        double _PrGesamt;
        string _Versicherungsbeginn;
        string _Versicherungsablauf;
        int _VersicherungsdauerJahre;
        double _PrGesamtKinder;
        string _VersicherungsablaufKinder;
        int _VersicherungsdauerJahreKinder;
        AntragsartUV _Antragsart;
        string _ErsatzantragPolizzennummer;
        bool _IsBezugsberechtigt;
        Bezugsberechtigt _Bezugsberechtigt;

        #endregion

        #region Property UvDaten
        public bool IsActiv
        {
            get { return _IsActiv; }
            set { _IsActiv = value; }
        }
        public string Gebiet
        {
            get { return _Gebiet; }
            set { _Gebiet = value; }
        }
        public string BesondereVereinbarungen
        {
            get { return _BesondereVereinbarungen; }
            set { _BesondereVereinbarungen = value; }
        }
        public Bankdaten Zahlungsdaten
        {
            get { return _Zahlungsdaten; }
            set { _Zahlungsdaten = value; }
        }
        public InkassoAdr Inkassodaten
        {
            get { return _Inkassodaten; }
            set { _Inkassodaten = value; }
        }
        public HighestAmateurgruppe HighestAmateursportgruppe
        {
            get { return _HighestAmateursportgruppe; }
            set { _HighestAmateursportgruppe = value; }
        }
        public double PrAmateursportgruppe
        {
            get { return _PrAmateursportgruppe; }
            set { _PrAmateursportgruppe = value; }
        }
        public double PrGesamt
        {
            get { return _PrGesamt; }
            set { _PrGesamt = value; }
        }
        public string Versicherungsbeginn
        {
            get { return _Versicherungsbeginn; }
            set { _Versicherungsbeginn = value; }
        }
        public string Versicherungsablauf
        {
            get { return _Versicherungsablauf; }
            set { _Versicherungsablauf = value; }
        }
        public int VersicherungsdauerJahre
        {
            get { return _VersicherungsdauerJahre; }
            set { _VersicherungsdauerJahre = value; }
        }
        public double PrGesamtKinder
        {
            get { return _PrGesamtKinder; }
            set { _PrGesamtKinder = value; }
        }
        public string VersicherungsablaufKinder
        {
            get { return _VersicherungsablaufKinder; }
            set { _VersicherungsablaufKinder = value; }
        }
        public int VersicherungsdauerJahreKinder
        {
            get { return _VersicherungsdauerJahreKinder; }
            set { _VersicherungsdauerJahreKinder = value; }
        }
        public AntragsartUV Antragsart
        {
            get { return _Antragsart; }
            set { _Antragsart = value; }
        }
        public string ErsatzantragPolizzennummer
        {
            get { return _ErsatzantragPolizzennummer; }
            set { _ErsatzantragPolizzennummer = value; }
        }
        public bool IsBezugsberechtigt
        {
            get { return _IsBezugsberechtigt; }
            set { _IsBezugsberechtigt = value; }
        }
        public Bezugsberechtigt Bezugsberechtigt
        {
            get { return _Bezugsberechtigt; }
            set { _Bezugsberechtigt = value; }
        }
        #endregion

        #region Konstruktor UvDaten
        public UvDaten()
        {
            _IsActiv = false;
            _Gebiet = string.Empty;
            _BesondereVereinbarungen = string.Empty;
            _Zahlungsdaten = new Bankdaten();
            _Inkassodaten = new InkassoAdr();
            _HighestAmateursportgruppe = HighestAmateurgruppe.None;
            _PrAmateursportgruppe = 0;
            _PrGesamt = 0;
            _Versicherungsbeginn = string.Empty;
            _Versicherungsablauf = string.Empty;
            _VersicherungsdauerJahre = 0;
            _PrGesamtKinder = 0;
            _VersicherungsablaufKinder = string.Empty;
            _VersicherungsdauerJahreKinder = 0;
            _Antragsart = AntragsartUV.None;
            _ErsatzantragPolizzennummer = string.Empty;
            _IsBezugsberechtigt = false;
            _Bezugsberechtigt = new Bezugsberechtigt();
        }
        #endregion

        #region Enums
        public enum HighestAmateurgruppe
        {
            None,
            Gruppe_I,
            Gruppe_II,
        };

        public enum AntragsartUV
        {
            None,
            Neukunde,
            Ersatzantrag,
            Nachversicherung,
        };
        #endregion

    } 
}
