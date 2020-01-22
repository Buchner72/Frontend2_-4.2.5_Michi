using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Vertrag
{
    [Serializable]
    public class Antragsfragen
    {
        #region Members
        int _IsAbgelehnt;
        string _AbgelehntGrund;
        string _AbgelehntUnternehmen;
        #endregion

        #region Property
        [JsonProperty("isAbgelehnt")]
        public int IsAbgelehnt
        {
            get { return _IsAbgelehnt; }
            set { _IsAbgelehnt = value; }
        }
        [JsonProperty("abgelehntGrund")]
        public string AbgelehntGrund
        {
            get { return _AbgelehntGrund; }
            set { _AbgelehntGrund = value; }
        }
        [JsonProperty("abgelehntUnternehmen")]
        public string AbgelehntUnternehmen
        {
            get { return _AbgelehntUnternehmen; }
            set { _AbgelehntUnternehmen = value; }
        }
        #endregion

        public Antragsfragen()
        {               
        
        }
    }

    [Serializable]
    public class Antragsfragen_Kasko : Antragsfragen
    {
        #region Members
        int _IsKasko;
        string _KaskoGrund;
        bool _KaskoHasSchaden;
        string _KaskoSchadenWelche;

        int _HasVinkulierung;
        string _VinkulierungZuGunsten;
        #endregion

        #region Property
        [JsonProperty("isKasko")]
        public int IsKasko
        {
            get { return _IsKasko; }
            set { _IsKasko = value; }
        }
        [JsonProperty("kaskoGrund")]
        public string KaskoGrund
        {
            get { return _KaskoGrund; }
            set { _KaskoGrund = value; }
        }
        [JsonProperty("kaskoHasSchaden")]
        public bool KaskoHasSchaden
        {
            get { return _KaskoHasSchaden; }
            set { _KaskoHasSchaden = value; }
        }
        [JsonProperty("kaskoSchadenWelche")]
        public string KaskoSchadenWelche
        {
            get { return _KaskoSchadenWelche; }
            set { _KaskoSchadenWelche = value; }
        }

        [JsonProperty("hasVinkulierung")]
        public int HasVinkulierung
        {
            get { return _HasVinkulierung; }
            set { _HasVinkulierung = value; }
        }
        [JsonProperty("vinkulierungZuGunsten")]
        public string VinkulierungZuGunsten
        {
            get { return _VinkulierungZuGunsten; }
            set { _VinkulierungZuGunsten = value; }
        }
        #endregion

        public Antragsfragen_Kasko()
        {

        }
    }

    [Serializable]
    public class Antragsfragen_BonusMalus : Antragsfragen_Kasko
    {
        #region Members
        int _IsBonusMalus;
        string _BonusMalusVersicherer;
        string _BonusMalusPolNr;
        string _BonusMalusBeendetAm;
        string _BonusMalusWegen;
        #endregion

        #region Property
        [JsonProperty("isBonusMalus")]
        public int IsBonusMalus
        {
            get { return _IsBonusMalus; }
            set { _IsBonusMalus = value; }
        }
        [JsonProperty("bonusMalusVersicherer")]
        public string BonusMalusVersicherer
        {
            get { return _BonusMalusVersicherer; }
            set { _BonusMalusVersicherer = value; }
        }
        [JsonProperty("bonusMalusPolNr")]
        public string BonusMalusPolNr
        {
            get { return _BonusMalusPolNr; }
            set { _BonusMalusPolNr = value; }
        }
        [JsonProperty("bonusMalusBeendetAm")]
        public string BonusMalusBeendetAm
        {
            get { return _BonusMalusBeendetAm; }
            set { _BonusMalusBeendetAm = value; }
        }
        [JsonProperty("bonusMalusWegen")]
        public string BonusMalusWegen
        {
            get { return _BonusMalusWegen; }
            set { _BonusMalusWegen = value; }
        }
        #endregion

        public Antragsfragen_BonusMalus()
        {

        }
    }
}
