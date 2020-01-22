using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class SOE
    {
        #region Members SOE
        bool _IsActive;
        SOEBundeslandgruppe _Bundeslandgruppe;       
        bool _IsPartner;
        bool _IsBuendelrabatt;       
        SOETarif _Tarif;
        SOETarifvariante _Tarifvariante;
        SOEAnzahlBetten _Betten;
        double _PrSOE;
        #endregion

        #region Property SOE
        public bool IsActive
        {
            get { return _IsActive; }
            set { _IsActive = value; }
        }
        public SOEBundeslandgruppe Bundeslandgruppe
        {
            get { return _Bundeslandgruppe; }
            set { _Bundeslandgruppe = value; }
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
        public SOETarif Tarif
        {
            get { return _Tarif; }
            set { _Tarif = value; }
        }
        public SOETarifvariante Tarifvariante
        {
            get { return _Tarifvariante; }
            set { _Tarifvariante = value; }
        }
        public SOEAnzahlBetten Betten
        {
            get { return _Betten; }
            set { _Betten = value; }
        }
        public double PrSOE
        {
            get { return _PrSOE; }
            set { _PrSOE = value; }
        }
        #endregion

        #region Konstruktor SOE
        public SOE()
        {
            _IsActive = false;
            _Bundeslandgruppe = SOEBundeslandgruppe.None;
            _IsPartner = false;
            _IsBuendelrabatt = false;
            _Tarif = SOETarif.None;
            _Tarifvariante = SOETarifvariante.None;
            _Betten = SOEAnzahlBetten.None;
            _PrSOE = 0;
        }
        #endregion

        #region Enums
        public enum SOETarif
        {
            None,
            SOE1,
            SOE1VS,
            SOE2,
            SOE2VS,
            SOE3,
            SOE3VS,
        };
        public enum SOETarifvariante
        {
            None,
            Österreichtarif,
            Bundeslandtarif,
            Variablerselbstbehalttarif,
        };
        public enum SOEAnzahlBetten
        {
            None,
            Einbett,
            Zweibett,
        };
        public enum SOEBundeslandgruppe
        {
            None,
            B1,
            B2,
            B3,
        };
        #endregion
    }
}
