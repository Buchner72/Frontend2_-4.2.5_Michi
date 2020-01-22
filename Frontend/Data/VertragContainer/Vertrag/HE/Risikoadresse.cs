using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class Risikoadresse : Person
    {
        #region Members Risikoadresse
        Adresse _Adresse;
        #endregion

        #region Property Risikoadresse
        public Adresse Adresse
        {
            get { return _Adresse; }
            set { _Adresse = value; }
        }
        #endregion

        #region Konstruktor Risikoadresse
        public Risikoadresse()
        {
            _Adresse = new Adresse();
        }

        #endregion
    }
}
