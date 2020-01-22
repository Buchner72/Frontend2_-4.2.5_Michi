using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class Vp : Person
    {
        #region Members Versicherte Person     
        int _Id;
        Adresse _Adresse;
        EnumFamilienstand _Familienstand;
        Kontakt _Kontakt;
        #endregion

        #region Property Versicherte Person      
        public int Id
        {
            get { return _Id; }
            set { _Id = value; }
        }

        public Adresse Adresse
        {
            get { return _Adresse; }
            set { _Adresse = value; }
        }

        public EnumFamilienstand Familienstand
        {
            get { return _Familienstand; }
            set { _Familienstand = value; }
        }

        public Kontakt Kontakt
        {
            get { return _Kontakt; }
            set { _Kontakt = value; }
        }
        #endregion

        #region Konstruktor Kontakt

        #endregion
        public Vp()
        {
            _Id = -1;
            _Adresse = new Adresse();
            _Familienstand = EnumFamilienstand.ledig;
            _Kontakt = new Kontakt();
        }
    }
}