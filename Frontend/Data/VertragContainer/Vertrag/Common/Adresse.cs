using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class Adresse
    {
        #region Members
        private string _strasseNr;
        private string _plz;
        private string _ort;
        private string _land;
        #endregion

        #region Property
        public string StrasseNr
        {
            get { return _strasseNr; }
            set { _strasseNr = value; }
        }

        public string Plz
        {
            get { return _plz; }
            set { _plz = value; }
        }

        public string Ort
        {
            get { return _ort; }
            set { _ort = value; }
        }

        public string Land
        {
            get { return _land; }
            set { _land = value; }
        }
        #endregion

        #region Konstruktor
        public Adresse()
        {
            _strasseNr = string.Empty;
            _plz = string.Empty;
            _ort = string.Empty;
            _land = string.Empty;
        }
        #endregion

        #region Methoden
        #endregion
    }
}
