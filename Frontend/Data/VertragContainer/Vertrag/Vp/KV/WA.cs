using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class WA
    {
        #region Members WA
        bool _IsActive;
        bool _IsPartner;
        bool _IsBuendelrabatt;
        WATarif _Tarif;


        double _PrWA;

        #endregion

        #region Property WA
        public bool IsActive
        {
            get { return _IsActive; }
            set { _IsActive = value; }
        }
        public bool IsPartner
        {
            get { return _IsPartner; }
            set { _IsPartner = value; }
        }
        public bool IsBuendelrabatt
        {
            get { return _IsBuendelrabatt; }
            set { _IsBuendelrabatt = value; }
        }
        public WATarif Tarif
        {
            get { return _Tarif; }
            set { _Tarif = value; }
        }
        public double PrWA
        {
            get { return _PrWA; }
            set { _PrWA = value; }
        }


        #endregion

        #region Konstruktor WA
        public WA()
        {
            _IsActive = false;
            _IsPartner = false;
            _IsBuendelrabatt = false;
            _Tarif = WATarif.None;
            _PrWA = 0;
        }
        #endregion

        #region Enums

        public enum WATarif
        {
            None,
            Standard,
            Standard_Plus,
            Premium,
            Premium_Exklusiv,
        };
        #endregion
    }
}
