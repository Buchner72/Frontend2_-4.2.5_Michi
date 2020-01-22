using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class EProdukt
    {
        #region Members
        bool _IsAktiv;
        bool _IsBuendel;
        HEDaten.HhEhTarif _Tarif;
        bool _IsHochwasserpaket;
        double _VerbauteFlaecheKeller;
        double _VerbauteFlaecheErdgeschoss;
        double _VerbauteFlaecheObergeschoss1;
        double _VerbauteFlaecheObergeschoss2;
        double _VerbauteFlaecheMansarde;
        bool _IsNebengebaeude;
        double _VerbauteFlaecheNebengebaeude;
        bool _IsNebengebaeudeKeller;
        bool _IsRohbauversicherung;
        #endregion

        #region Property
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
        public double VerbauteFlaecheKeller
        {
            get { return _VerbauteFlaecheKeller; }
            set { _VerbauteFlaecheKeller = value; }
        }
        public double VerbauteFlaecheErdgeschoss
        {
            get { return _VerbauteFlaecheErdgeschoss; }
            set { _VerbauteFlaecheErdgeschoss = value; }
        }
        public double VerbauteFlaecheObergeschoss1
        {
            get { return _VerbauteFlaecheObergeschoss1; }
            set { _VerbauteFlaecheObergeschoss1 = value; }
        }
        public double VerbauteFlaecheObergeschoss2
        {
            get { return _VerbauteFlaecheObergeschoss2; }
            set { _VerbauteFlaecheObergeschoss2 = value; }
        }
        public double VerbauteFlaecheMansarde
        {
            get { return _VerbauteFlaecheMansarde; }
            set { _VerbauteFlaecheMansarde = value; }
        }
        public bool IsNebengebaeude
        {
            get { return _IsNebengebaeude; }
            set { _IsNebengebaeude = value; }
        }
        public double VerbauteFlaecheNebengebaeude
        {
            get { return _VerbauteFlaecheNebengebaeude; }
            set { _VerbauteFlaecheNebengebaeude = value; }
        }
        public bool IsNebengebaeudeKeller
        {
            get { return _IsNebengebaeudeKeller; }
            set { _IsNebengebaeudeKeller = value; }
        }
        public bool IsRohbauversicherung
        {
            get { return _IsRohbauversicherung; }
            set { _IsRohbauversicherung = value; }
        }

        #endregion

        public EProdukt()
        {
            _IsAktiv = false;
            _IsBuendel = false;
            _Tarif = HEDaten.HhEhTarif.None;
            _IsHochwasserpaket = false;
            _VerbauteFlaecheKeller = 0;
            _VerbauteFlaecheErdgeschoss = 0;
            _VerbauteFlaecheObergeschoss1 = 0;
            _VerbauteFlaecheObergeschoss2 = 0;
            _VerbauteFlaecheMansarde = 0;
            _IsNebengebaeude = false;
            _VerbauteFlaecheNebengebaeude = 0;
            _IsNebengebaeudeKeller = false;
            _IsRohbauversicherung = false;
        }
    }
}
