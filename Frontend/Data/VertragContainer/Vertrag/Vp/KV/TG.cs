using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class TG
    {
        #region Members TG
        bool _IsActive;
        bool _IsPartner;
        TGTarif _TGTarif;
        string _TGLeistung;
        double _PrTG;
        #endregion

        #region Property TG
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
        public TGTarif TGTarif1
        {
            get { return _TGTarif; }
            set { _TGTarif = value; }
        }
        public string TGLeistung
        {
            get { return _TGLeistung; }
            set { _TGLeistung = value; }
        }
        public double PrTG
        {
            get { return _PrTG; }
            set { _PrTG = value; }
        }

        #endregion

        #region Konstruktor TG
        public TG()
        {
            IsActive = false;
            _IsPartner = false;
            _TGTarif = TGTarif.None;
            _TGLeistung = string.Empty;
            _PrTG = 0;
        }
        #endregion

        #region Enums

        public enum TGTarif
        {
            None,
            MT,
            MTU,
        };
        #endregion
    }
}
