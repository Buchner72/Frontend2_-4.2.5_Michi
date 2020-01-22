using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class KV
    {
        #region Members KV
        KvAntragsfragen _Antragsfragen;
        KvPruduktdaten _Produktdaten;
        #endregion

        #region Property KV
        public KvAntragsfragen Antragsfragen
        {
            get { return _Antragsfragen; }
            set { _Antragsfragen = value; }
        }
        public KvPruduktdaten Produktdaten
        {
            get { return _Produktdaten; }
            set { _Produktdaten = value; }
        }
        #endregion

        #region Konstruktor KV
        public KV()
        {
            _Antragsfragen = new KvAntragsfragen();
            _Produktdaten = new KvPruduktdaten();
        }
        #endregion
    }
}
