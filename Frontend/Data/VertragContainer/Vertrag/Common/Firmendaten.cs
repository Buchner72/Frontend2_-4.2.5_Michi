using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class Firmendaten
    {
        #region Members Firmendaten
        private string _firmenname;
        private string _fn;
        private string _uid;
        private string _ansprechpartner;

        #endregion

        #region Property Firmendaten
        public string Firmenname
        {
            get { return _firmenname; }
            set { _firmenname = value; }
        }
        public string FN
        {
            get { return _fn; }
            set { _fn = value; }
        }
        public string UID
        {
            get { return _uid; }
            set { _uid = value; }
        }
        public string Ansprechpartner
        {
            get { return _ansprechpartner; }
            set { _ansprechpartner = value; }
        }

        #endregion

        #region Konstruktor Kontakt

        #endregion
        public Firmendaten()
        {
            _firmenname = string.Empty;
            _fn = string.Empty;
            _uid = string.Empty;
            _ansprechpartner = string.Empty;
        }
    }
}
