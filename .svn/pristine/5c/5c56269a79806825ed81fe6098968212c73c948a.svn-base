using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class HProdukt
    {
        #region Members HhProduktdaten
        bool _IsAktiv;
        bool _IsBuendel;
        HEDaten.HhEhTarif _Tarif;
        bool _IsHochwasserpaket;
        int _Wohnnutzflaeche;
        HHTyp _Haustyp;
        bool _IsStaendigBewohnt;
        HHOrtsgebiet _VerbautesOrtsgebiet;


        #endregion

        #region Property HhProduktdaten
        public bool IsAktiv
        {
            get { return _IsAktiv; }
            set { _IsAktiv = value; }
        }
        public bool IsBuendel
        {
            get { return _IsBuendel; }
            set { _IsBuendel = value; }
        }
        public HEDaten.HhEhTarif Tarif
        {
            get { return _Tarif; }
            set { _Tarif = value; }
        }
        public bool IsHochwasserpaket
        {
            get { return _IsHochwasserpaket; }
            set { _IsHochwasserpaket = value; }
        }
        public int Wohnnutzflaeche
        {
            get { return _Wohnnutzflaeche; }
            set { _Wohnnutzflaeche = value; }
        }
        public HHTyp Haustyp
        {
            get { return _Haustyp; }
            set { _Haustyp = value; }
        }
        public bool IsStaendigBewohnt
        {
            get { return _IsStaendigBewohnt; }
            set { _IsStaendigBewohnt = value; }
        }
        public HHOrtsgebiet VerbautesOrtsgebiet
        {
            get { return _VerbautesOrtsgebiet; }
            set { _VerbautesOrtsgebiet = value; }
        }
        #endregion

        public HProdukt()
        {
            _IsAktiv = false;
            _IsBuendel = false;
            _Tarif = HEDaten.HhEhTarif.None;
            _IsHochwasserpaket = false;
            _Wohnnutzflaeche = 0;
            _Haustyp = HHTyp.None;
            _IsStaendigBewohnt = false;
            _VerbautesOrtsgebiet = HHOrtsgebiet.None;
        }

        #region Enums
        public enum HHTyp  // Verwendet in HH und EH
        {
            None,
            Einfamilienhaus,
            Zweifamilienhaus,
            Mehrfamilienhaus,
        };
        public enum HHOrtsgebiet  // Verwendet in HH und EH
        {
            None,
            Innerhalb,
            Außerhalb,
        };
       

        #endregion
    }
}
