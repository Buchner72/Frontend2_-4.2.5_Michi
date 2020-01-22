using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class HHEH
    {
        #region Members
        bool _IsActiv;
        double _Praemie;
        string _BesondereVereinbarungen;
        Bankdaten _Zahlungsdaten;
        InkassoAdr _Inkassodaten;
        string _Versicherungsbeginn;
        string _Versicherungsablauf;
        int _VersicherungsdauerJahre;
        List<HEDaten> _ListHHEH;
        #endregion

        #region Property
        public bool IsActiv
        {
            get { return _IsActiv; }
            set { _IsActiv = value; }
        }
        public double Praemie
        {
            get { return _Praemie; }
            set { _Praemie = value; }
        }
        public string BesondereVereinbarungen
        {
            get { return _BesondereVereinbarungen; }
            set { _BesondereVereinbarungen = value; }
        }
        public Bankdaten Zahlungsdaten
        {
            get { return _Zahlungsdaten; }
            set { _Zahlungsdaten = value; }
        }
        public InkassoAdr Inkassodaten
        {
            get { return _Inkassodaten; }
            set { _Inkassodaten = value; }
        }
        public string Versicherungsbeginn
        {
            get { return _Versicherungsbeginn; }
            set { _Versicherungsbeginn = value; }
        }
        public string Versicherungsablauf
        {
            get { return _Versicherungsablauf; }
            set { _Versicherungsablauf = value; }
        }
        public int VersicherungsdauerJahre
        {
            get { return _VersicherungsdauerJahre; }
            set { _VersicherungsdauerJahre = value; }
        }
        public List<HEDaten> ListHHEH
        {
            get { return _ListHHEH; }
            set { _ListHHEH = value; }
        }
        #endregion

        public HHEH()
        {
            _IsActiv = false;
            _Praemie = 0;
            _BesondereVereinbarungen = string.Empty;
            _Zahlungsdaten = new Bankdaten();
            _Inkassodaten = new InkassoAdr();
            _Versicherungsbeginn = string.Empty;
            _Versicherungsablauf = string.Empty;
            _VersicherungsdauerJahre = 0;

            _ListHHEH = new List<HEDaten>();
            HEDaten hheh = new HEDaten { };
            _ListHHEH.Add(hheh);
        }
    }
}
