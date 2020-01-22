using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class Ersatzvertrag
    {
        #region Members Ersatzvertrag
        bool _IsAktiv;
        string _Polizzennummer;
        string _Versicherungsende;

        #endregion

        #region Property Ersatzvertrag
        public bool IsAktiv
        {
            get { return _IsAktiv; }
            set { _IsAktiv = value; }
        }
        public string Polizzennummer
        {
            get { return _Polizzennummer; }
            set { _Polizzennummer = value; }
        }
        public string Versicherungsende
        {
            get { return _Versicherungsende; }
            set { _Versicherungsende = value; }
        }
        #endregion

        public Ersatzvertrag()
        {
            _IsAktiv = false;
            _Polizzennummer = string.Empty;
            _Versicherungsende = string.Empty;
        }
    }
}
