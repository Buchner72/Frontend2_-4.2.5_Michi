using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class FP
    {
        #region Members FP
        bool _IsActive;
        double _PrFP;
        #endregion

        #region Property FP
        public bool IsActive
        {
            get { return _IsActive; }
            set { _IsActive = value; }
        }
        public double PrFP
        {
            get { return _PrFP; }
            set { _PrFP = value; }
        }
        #endregion

        #region Konstruktor FP
        public FP()
        {
            _IsActive = false;
            _PrFP = 0;
        }
        #endregion
    }
}
