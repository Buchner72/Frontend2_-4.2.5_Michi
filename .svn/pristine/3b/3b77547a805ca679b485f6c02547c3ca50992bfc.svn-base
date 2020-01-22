using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class HEAntragsfragen
    {
        #region Members
        bool _IsAbgelehnt;               //Wurde dem Antragsteller bereits eine Haushalts- oder Eigenheimversicherung abgelehnt, gekündigt oder einvernehmlich aufgelöst
        string _AbgelehntGrund;          //Grund
        string _AbgelehntUnternehmen;    //Unternehmen:
        bool _IsSchaeden;               //Bestehen unbehobene Schäden am Gebäude und/oder Hausrat?
        string _SchaedenWelche;         //Welche
        bool _IsVersicherung;               //Besteht oder bestand für die beantragten Risken eine Versicherung?
        string _VersicherungUnternehmen;    //Unternehmen
        bool _IsGefaehrdung;                //Befindet sich die zu versichernde Sache in einem durch nachstehende Ereignisse gefährdeten Gebiet?
        bool _IsGefaehrdungUeberschwemmung;
        bool _IsGefaehrdungVermurung;
        bool _IsGefaehrdungLawine;
        bool _IsBetroffen;              //Waren Sie von einem der folgenden Katastrophenschäden schon betroffen? (Hochwasser/Überschwemmung, Kanalrückstau und Ansteigen des Grundwasserspiegels infolge außergewöhnlicher Witterung, Lawinen/Lawinenluftdruck, Vermurung, Erdbeben)
        HEVinkulierung _Vinkulierung;
        #endregion

        #region Property
        public bool IsAbgelehnt
        {
            get { return _IsAbgelehnt; }
            set { _IsAbgelehnt = value; }
        }
        public string AbgelehntGrund
        {
            get { return _AbgelehntGrund; }
            set { _AbgelehntGrund = value; }
        }
        public string AbgelehntUnternehmen
        {
            get { return _AbgelehntUnternehmen; }
            set { _AbgelehntUnternehmen = value; }
        }
        public bool IsSchaeden
        {
            get { return _IsSchaeden; }
            set { _IsSchaeden = value; }
        }
        public string SchaedenWelche
        {
            get { return _SchaedenWelche; }
            set { _SchaedenWelche = value; }
        }
        public bool IsVersicherung
        {
            get { return _IsVersicherung; }
            set { _IsVersicherung = value; }
        }
        public string VersicherungUnternehmen
        {
            get { return _VersicherungUnternehmen; }
            set { _VersicherungUnternehmen = value; }
        }
        public bool IsGefaehrdung
        {
            get { return _IsGefaehrdung; }
            set { _IsGefaehrdung = value; }
        }
        public bool IsGefaehrdungUeberschwemmung
        {
            get { return _IsGefaehrdungUeberschwemmung; }
            set { _IsGefaehrdungUeberschwemmung = value; }
        }
        public bool IsGefaehrdungVermurung
        {
            get { return _IsGefaehrdungVermurung; }
            set { _IsGefaehrdungVermurung = value; }
        }
        public bool IsGefaehrdungLawine
        {
            get { return _IsGefaehrdungLawine; }
            set { _IsGefaehrdungLawine = value; }
        }
        public bool IsBetroffen
        {
            get { return _IsBetroffen; }
            set { _IsBetroffen = value; }
        }

        public HEVinkulierung Vinkulierung
        {
            get { return _Vinkulierung; }
            set { _Vinkulierung = value; }
        }
        #endregion

        public HEAntragsfragen()
        {
            _IsAbgelehnt = false;
            _AbgelehntGrund = string.Empty;
            _AbgelehntUnternehmen = string.Empty;
            _IsSchaeden = false;
            _SchaedenWelche = string.Empty;
            _IsVersicherung = false;
            _VersicherungUnternehmen = string.Empty;
            _IsGefaehrdung = false;
            _IsGefaehrdungUeberschwemmung = false;
            _IsGefaehrdungVermurung = false;
            _IsGefaehrdungLawine = false;
            _IsBetroffen = false;
            _Vinkulierung = new HEVinkulierung();
        }

        public class HEVinkulierung : Person
        {
            #region Members HhEhVinkulierung
            bool _IsAktiv;
            Adresse _Adresse;

            #endregion

            #region Property HhEhVinkulierung
            public bool IsAktiv
            {
                get { return _IsAktiv; }
                set { _IsAktiv = value; }
            }
            public Adresse Adresse
            {
                get { return _Adresse; }
                set { _Adresse = value; }
            }
            #endregion

            #region Konstruktor HhEhVinkulierung
            public HEVinkulierung()
            {
                _IsAktiv = false;
                _Adresse = new Adresse();
            }
            #endregion
        }
    }
}
