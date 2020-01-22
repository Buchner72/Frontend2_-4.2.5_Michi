using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class PFE
    {
        #region Members PFE
        bool _IsActive;
        bool _IsPartner;
        double _PrPFE;
        #endregion

        #region Property PFE
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
        public double PrPFE
        {
            get { return _PrPFE; }
            set { _PrPFE = value; }
        }


        #endregion

        #region Konstruktor PFE
        public PFE()
        {
            _IsActive = false;
            _IsPartner = false;
            _PrPFE = 0;
        }
        #endregion
    }
}
