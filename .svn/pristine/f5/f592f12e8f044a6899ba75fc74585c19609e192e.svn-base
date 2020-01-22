using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class Sachbearbeiter
    {
        #region Members Sachbearbeiter
        private EnumAnredePerson _anrede;       
        private string _titel;
        private string _vorname;
        private string _nachname;
        private Kontakt _kontakt;
        private string _abteilung;
        #endregion

        #region Property Sachbearbeiter
        public EnumAnredePerson Anrede
        {
            get { return _anrede; }
            set { _anrede = value; }
        }

        public string Titel
        {
            get { return _titel; }
            set { _titel = value; }
        }

        public string Vorname
        {
            get { return _vorname; }
            set { _vorname = value; }
        }

        public string Nachname
        {
            get { return _nachname; }
            set { _nachname = value; }
        }

        public Kontakt Konntakt
        {
            get { return _kontakt; }
            set { _kontakt = value; }
        }

        public string Abteilung
        {
            get { return _abteilung; }
            set { _abteilung = value; }
        }
        #endregion

        #region Konstruktor Kontakt

        #endregion
        public Sachbearbeiter()
        {
            _anrede = EnumAnredePerson.None;
            _titel = string.Empty;
            _vorname = string.Empty;
            _nachname = string.Empty;
            _kontakt = new Kontakt();
            _abteilung = string.Empty;
        }
    }
}
