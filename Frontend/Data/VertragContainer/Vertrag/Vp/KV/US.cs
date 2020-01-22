using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class US
    {
        #region Members US
        bool _IsActive;
        double _PrUS;
        #endregion

        #region Property US
        public bool IsActive
        {
            get { return _IsActive; }
            set { _IsActive = value; }
        }
        public double PrUS
        {
            get { return _PrUS; }
            set { _PrUS = value; }
        }
        #endregion

        #region Konstruktor US
        public US()
        {
            _IsActive = false;
            _PrUS = 0;
        }

        #endregion

    }
}
