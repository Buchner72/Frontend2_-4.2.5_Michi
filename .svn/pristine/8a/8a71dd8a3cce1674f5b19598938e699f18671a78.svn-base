using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class RisikoAdr
    {
        #region Members RisikoAdr     
        private EnumAnredePerson _anrede;
        private string _titel;
        private string _vorname;
        private string _nachname;
        private Adresse _adresse;
        #endregion

        #region Property RisikoAdr
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

        public Adresse Adresse
        {
            get { return _adresse; }
            set { _adresse = value; }
        }
        #endregion

        #region Konstruktor Kontakt

        #endregion
        public RisikoAdr()
        {         
            _anrede = EnumAnredePerson.None;
            _titel = string.Empty;
            _vorname = string.Empty;
            _nachname = string.Empty;
            _adresse = new Adresse();
        }
    }
}
