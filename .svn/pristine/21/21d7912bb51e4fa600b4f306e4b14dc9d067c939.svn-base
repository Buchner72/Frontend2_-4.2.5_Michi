using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Vertrag
{
    public class Person
    {
        #region Members
        private EnumAnrede _anrede;
        private EnumGeschlecht _geschlecht;
        private string _titel;
        private string _vorname;
        private string _nachname;
        private DateTime? _geburtsdatum;
        private string _beruf;
        private EnumArtBeschaeftigung _artBeschaeftigung;
        private int _alter;
        private int _alterVerstech;
        private string _nationalitaet;
        #endregion

        #region Property
        [JsonProperty(propertyName: "anrede")]
        public EnumAnrede Anrede
        {
            get { return _anrede; }
            set { _anrede = value; }
        }

        [JsonProperty(propertyName: "geschlecht")]
        public EnumGeschlecht Geschlecht
        {
            get { return _geschlecht; }
            set { _geschlecht = value; }
        }

        [JsonProperty(propertyName: "titel")]
        public string Titel
        {
            get { return _titel; }
            set { _titel = value; }
        }

        [JsonProperty(propertyName: "vorname")]
        public string Vorname
        {
            get { return _vorname; }
            set { _vorname = value; }
        }

        [JsonProperty(propertyName: "nachname")]
        public string Nachname
        {
            get { return _nachname; }
            set { _nachname = value; }
        }

        [JsonProperty(propertyName: "geburtsdatum")]
        public DateTime? Geburtsdatum
        {
            get { return _geburtsdatum; }
            set { _geburtsdatum = value; }
        }

        [JsonProperty(propertyName: "beruf")]
        public string Beruf
        {
            get { return _beruf; }
            set { _beruf = value; }
        }

        [JsonProperty(propertyName: "artBeschaeftigung")]
        public EnumArtBeschaeftigung ArtBeschaeftigung
        {
            get { return _artBeschaeftigung; }
            set { _artBeschaeftigung = value; }
        }

        [JsonProperty(propertyName: "alter")]
        public int Alter
        {
            get { return _alter; }
            set { _alter = value; }
        }

        [JsonProperty(propertyName: "alterVerstech")]
        public int AlterVerstech
        {
            get { return _alterVerstech; }
            set { _alterVerstech = value; }
        }

        [JsonProperty(propertyName: "nationalitaet")]
        public string Nationalitaet
        {
            get { return _nationalitaet; }
            set { _nationalitaet = value; }
        }
        #endregion

        #region Konstruktor
        public Person()
        {
            _anrede = EnumAnrede.None;
            _geschlecht = EnumGeschlecht.None;
            _titel = string.Empty;
            _vorname = string.Empty;
            _nachname = string.Empty;
            _geburtsdatum = null;
            _beruf = string.Empty;
            _artBeschaeftigung = EnumArtBeschaeftigung.unselbstaendig;
            _alter = 0;
            _alterVerstech = 0;
            _nationalitaet = "AUT";
        }
        #endregion

        #region Methoden
        #endregion
    }
}
