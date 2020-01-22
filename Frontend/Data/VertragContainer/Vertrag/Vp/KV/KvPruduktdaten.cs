using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class KvPruduktdaten
    {
        #region Members KvPruduktdaten
        SOE _SOE;
        US _US;
        FP _FP;
        WA _WA;
        TG _TG;
        PFE _PFE;
        bool _IsPartnerrabatt;
        double _PrGesamtpraemiePerson;
        #endregion

        #region Property KvPruduktdaten
        public SOE SOE
        {
            get { return _SOE; }
            set { _SOE = value; }
        }
        public US US
        {
            get { return _US; }
            set { _US = value; }
        }
        public FP FP
        {
            get { return _FP; }
            set { _FP = value; }
        }
        public WA WA
        {
            get { return _WA; }
            set { _WA = value; }
        }
        public TG TG
        {
            get { return _TG; }
            set { _TG = value; }
        }
        public PFE PFE
        {
            get { return _PFE; }
            set { _PFE = value; }
        }
        public bool IsPartnerrabatt
        {
            get { return _IsPartnerrabatt; }
            set { _IsPartnerrabatt = value; }
        }
        public double PrGesamtpraemiePerson
        {
            get { return _PrGesamtpraemiePerson; }
            set { _PrGesamtpraemiePerson = value; }
        }
        #endregion

        public KvPruduktdaten()
        {
            _SOE = new SOE();
            _US = new US();
            _FP = new FP();
            _WA = new WA();
            _TG = new TG();
            _PFE = new PFE();
            _IsPartnerrabatt = false;
            _PrGesamtpraemiePerson = 0;
        }
    }
}
