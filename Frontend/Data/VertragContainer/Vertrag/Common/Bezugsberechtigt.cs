using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vertrag
{
    public class Bezugsberechtigt
    {
        #region Members Bezugsberechtigt
        private string _vorname;
        private string _nachname;
        private string _geburtsdatum;
        private string _weiterePerson;
        #endregion

        #region Property Bezugsberechtigt
        public string Vorname
        {
            get { return _vorname; }
            set { _vorname = value; }
        }

        public String Nachname
        {
            get { return _nachname; }
            set { _nachname = value; }
        }

        public String Geburtsdatum
        {
            get { return _geburtsdatum; }
            set { _geburtsdatum = value; }
        }

        public String WeiterePerson
        {
            get { return _weiterePerson; }
            set { _weiterePerson = value; }
        }
        #endregion

        #region Konstruktor Kontakt

        #endregion
        public Bezugsberechtigt()
        {
            _vorname = string.Empty;
            _nachname = string.Empty;
            _geburtsdatum = string.Empty;
            _weiterePerson = string.Empty;
        }
    }
}





