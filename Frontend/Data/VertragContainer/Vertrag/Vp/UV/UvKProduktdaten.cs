using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class UvKProduktdaten
    {
        #region Members UvKinderProduktdaten
        TarifUvK _Tarif;     //z.B. Einzelpersonenunfall
        double _VSInvaliditaet;
        double _VSUnfalltod;
        double _VSUnfallkosten;
        double _VSHubschrauber;
        double _VSKosmetischeOP;
        double _VSBehMehraufwand;
        double _VSZahnersatz;
        double _VSNachhilfe;
        double _PrGesamtKind;   

        #endregion

        #region Property UvKProduktdaten
        public TarifUvK Tarif
        {
            get { return _Tarif; }
            set { _Tarif = value; }
        }
        public double VSInvaliditaet
        {
            get { return _VSInvaliditaet; }
            set { _VSInvaliditaet = value; }
        }
        public double VSUnfalltod
        {
            get { return _VSUnfalltod; }
            set { _VSUnfalltod = value; }
        }
        public double VSUnfallkosten
        {
            get { return _VSUnfallkosten; }
            set { _VSUnfallkosten = value; }
        }
        public double VSHubschrauber
        {
            get { return _VSHubschrauber; }
            set { _VSHubschrauber = value; }
        }
        public double VSKosmetischeOP
        {
            get { return _VSKosmetischeOP; }
            set { _VSKosmetischeOP = value; }
        }
        public double VSBehMehraufwand
        {
            get { return _VSBehMehraufwand; }
            set { _VSBehMehraufwand = value; }
        }
        public double VSZahnersatz
        {
            get { return _VSZahnersatz; }
            set { _VSZahnersatz = value; }
        }
        public double VSNachhilfe
        {
            get { return _VSNachhilfe; }
            set { _VSNachhilfe = value; }
        }
        public double PrGesamtKind
        {
            get { return _PrGesamtKind; }
            set { _PrGesamtKind = value; }
        }
        #endregion

        #region Konstruktor UvKProduktdaten
        public UvKProduktdaten()
        {
            _Tarif = TarifUvK.None;
             _VSInvaliditaet =0;
             _VSUnfalltod = 0;
             _VSUnfallkosten = 0;
             _VSHubschrauber = 0;
             _VSKosmetischeOP = 0;
             _VSBehMehraufwand = 0;
             _VSZahnersatz = 0;
             _VSNachhilfe = 0;
             _PrGesamtKind = 0;

        }
        #endregion

        #region Enums
        public enum TarifUvK
        {
            None,
            Standard,
            Premium,
        };

        #endregion

    }
}
