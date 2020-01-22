using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    public class HEDaten
    {
        #region Members
        //Vertrag.Antragsart _Antragsart;
        Ersatzvertrag _Ersatzvertrag;    
        HhEhKlasse _Klasse;
        RisikoAdr _Risikoadresse;
        HEAntragsfragen _Antragsfragen;
        HProdukt _HhProduktdaten;
        EProdukt _EhProduktdaten;
        #endregion

        #region Property
        public Ersatzvertrag Ersatzvertrag
        {
            get { return _Ersatzvertrag; }
            set { _Ersatzvertrag = value; }
        }
        public HhEhKlasse Klasse
        {
            get { return _Klasse; }
            set { _Klasse = value; }
        }
        public RisikoAdr Risikoadresse
        {
            get { return _Risikoadresse; }
            set { _Risikoadresse = value; }
        }
        public HEAntragsfragen Antragsfragen
        {
            get { return _Antragsfragen; }
            set { _Antragsfragen = value; }
        }
        public HProdukt HhProduktdaten
        {
            get { return _HhProduktdaten; }
            set { _HhProduktdaten = value; }
        }
        public EProdukt EhProduktdaten
        {
            get { return _EhProduktdaten; }
            set { _EhProduktdaten = value; }
        }
        #endregion

        public HEDaten()
        {
            //_Antragsart = Vertrag.Antragsart.None;
            _Ersatzvertrag = new Ersatzvertrag();
            _Klasse = HhEhKlasse.None;
            _Risikoadresse = new RisikoAdr();
            _Antragsfragen = new HEAntragsfragen();
            _HhProduktdaten = new HProdukt();
            _EhProduktdaten = new EProdukt();
        }

        #region Enums
        public enum HhEhTarif  // Verwendet in HH und EH
        {
            None,
            Exklusiv,
            ExklusivPremium,
        };
        public enum HhEhKlasse  // Verwendet in HH und EH
        {
            None,
            Haushalt,
            Eigenheim,
            Buendel,
        };

        #endregion
    } 
}
