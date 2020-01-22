using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class VpDaten : Person
    {

        #region Members VpDaten
        string _groesse;
        string _gewicht;
        string _Blutdruck_s;
        string _Blutdruck_d;
        bool _IsAktivUv;
        bool _IsAktivUvKinder;
        bool _IsAktivKv;
        bool _IsAktivFP;   //Nur wenn als eigene Sparte
        UV _UV;
        KV _KV;
        FamilyPlus _FP;
        #endregion

        #region Property VpDaten

        public string Groesse
        {
            get { return _groesse; }
            set { _groesse = value; }
        }
        public string Gewicht
        {
            get { return _gewicht; }
            set { _gewicht = value; }
        }
        public string Blutdruck_s
        {
            get { return _Blutdruck_s; }
            set { _Blutdruck_s = value; }
        }
        public string Blutdruck_d
        {
            get { return _Blutdruck_d; }
            set { _Blutdruck_d = value; }
        }
        public bool IsAktivUv
        {
            get { return _IsAktivUv; }
            set { _IsAktivUv = value; }
        }
        public bool IsAktivUvKinder
        {
            get { return _IsAktivUvKinder; }
            set { _IsAktivUvKinder = value; }
        }
        public bool IsAktivKv
        {
            get { return _IsAktivKv; }
            set { _IsAktivKv = value; }
        }
        public bool IsAktivFP
        {
            get { return _IsAktivFP; }
            set { _IsAktivFP = value; }
        }
        public UV UV
        {
            get { return _UV; }
            set { _UV = value; }
        }
        public KV KV
        {
            get { return _KV; }
            set { _KV = value; }
        }
        public FamilyPlus FP
        {
            get { return _FP; }
            set { _FP = value; }
        }
        #endregion

        #region Konstruktor VpDaten
        public VpDaten()
        {
            _groesse = string.Empty;
            _gewicht = string.Empty;
            _Blutdruck_s = string.Empty;
            _Blutdruck_d = string.Empty;
            _IsAktivUv = false;
            _IsAktivUvKinder = false;
            _IsAktivKv = false;
            _IsAktivFP = false;
            _UV = new UV();
            _KV = new KV();
            _FP = new FamilyPlus();
        }
        #endregion
    }
}
