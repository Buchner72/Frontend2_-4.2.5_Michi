using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class KvDaten
    {
        #region Members KvDaten
        bool _IsAktiv;
        string _BesondereVereinbarungen;
        Bankdaten _Zahlungsdaten;
        InkassoAdr _Inkassodaten;    
        bool _IsSOEVariabel;
        bool _IsInfoKlauselSOE1;
        bool _IsInfoKlauselSOE2;
        bool _IsInfoKlauselSOE3;
        bool _IsInfoKlauselSOE74;
        bool _IsInfoWATarif;
        bool _IsBeschreibungFamilyPlus;
        bool _IsBeschreibungUnfallPlus;
        bool _IsBeschreibungSOE;
        bool _IsBeschreibungWA;
        bool _IsBeschreibungMT;
        bool _IsBeschreibungPFE;
        double _PrGesamt;

       
        #endregion

        #region Property KvDaten
        public bool IsAktiv
        {
            get { return _IsAktiv; }
            set { _IsAktiv = value; }
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
        public bool IsSOEVariabel
        {
            get { return _IsSOEVariabel; }
            set { _IsSOEVariabel = value; }
        }
        public bool IsInfoKlauselSOE1
        {
            get { return _IsInfoKlauselSOE1; }
            set { _IsInfoKlauselSOE1 = value; }
        }
        public bool IsInfoKlauselSOE2
        {
            get { return _IsInfoKlauselSOE2; }
            set { _IsInfoKlauselSOE2 = value; }
        }
        public bool IsInfoKlauselSOE3
        {
            get { return _IsInfoKlauselSOE3; }
            set { _IsInfoKlauselSOE3 = value; }
        }
        public bool IsInfoKlauselSOE74
        {
            get { return _IsInfoKlauselSOE74; }
            set { _IsInfoKlauselSOE74 = value; }
        }
        public bool IsInfoWATarif
        {
            get { return _IsInfoWATarif; }
            set { _IsInfoWATarif = value; }
        }
        public bool IsBeschreibungFamilyPlus
        {
            get { return _IsBeschreibungFamilyPlus; }
            set { _IsBeschreibungFamilyPlus = value; }
        }
        public bool IsBeschreibungUnfallPlus
        {
            get { return _IsBeschreibungUnfallPlus; }
            set { _IsBeschreibungUnfallPlus = value; }
        }
        public bool IsBeschreibungSOE
        {
            get { return _IsBeschreibungSOE; }
            set { _IsBeschreibungSOE = value; }
        }
        public bool IsBeschreibungWA
        {
            get { return _IsBeschreibungWA; }
            set { _IsBeschreibungWA = value; }
        }
        public bool IsBeschreibungMT
        {
            get { return _IsBeschreibungMT; }
            set { _IsBeschreibungMT = value; }
        }
        public bool IsBeschreibungPFE
        {
            get { return _IsBeschreibungPFE; }
            set { _IsBeschreibungPFE = value; }
        }
        public double PrGesamt
        {
            get { return _PrGesamt; }
            set { _PrGesamt = value; }
        }
        #endregion

        #region Konstruktor KvDaten
        public KvDaten()
        {
            _IsAktiv = false;
            _BesondereVereinbarungen = string.Empty;
            _Zahlungsdaten = new Bankdaten();
            _Inkassodaten = new InkassoAdr();
            _IsSOEVariabel = false;
            _IsInfoKlauselSOE1 = false;
            _IsInfoKlauselSOE2 = false;
            _IsInfoKlauselSOE3 = false;
            _IsInfoKlauselSOE74 = false;
            _IsInfoWATarif = false;
            _IsBeschreibungFamilyPlus = false;
            _IsBeschreibungUnfallPlus = false;
            _IsBeschreibungSOE = false;
            _IsBeschreibungWA = false;
            _IsBeschreibungMT = false;
            _IsBeschreibungPFE = false;
            _PrGesamt = 0;
        }
        #endregion
    }
}
