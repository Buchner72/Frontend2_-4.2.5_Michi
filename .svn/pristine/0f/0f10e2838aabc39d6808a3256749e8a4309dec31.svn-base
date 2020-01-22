using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    [Serializable]
    public class Vertrag
    {
        #region Members
        // Plattform
        private EnumPlattform _plattform; // muki/tis
        // Modus
        private EnumModus _modus; // angebot/antrag
        // Kunde
        private EnumKunde _kunde; // privat/firma
        // verfügbare Sparten
        private Boolean _isAvailablePFp;
        private Boolean _isAvailablePKv;
        private Boolean _isAvailablePUv;
        private Boolean _isAvailablePUvk;
        private Boolean _isAvailablePKfz;
        private Boolean _isAvailablePHe;
        private Boolean _isAvailablePRs;
        private Boolean _isAvailableGKfz;
        private Boolean _isAvailableGGeb;
        // ausgewählte Sparten
        private Boolean _isEnabledPFp;
        private Boolean _isEnabledPKv;
        private Boolean _isEnabledPUv;
        private Boolean _isEnabledPUvk;
        private Boolean _isEnabledPKfz;
        private Boolean _isEnabledPHe;
        private Boolean _isEnabledPRs;
        private Boolean _isEnabledGKfz;
        private Boolean _isEnabledGGeb;
        // Status Collapseable
        private Boolean _isCollapsedVn;
        private Boolean _isCollapsedPFp;
        private Boolean _isCollapsedPKv;
        private Boolean _isCollapsedPUv;
        private Boolean _isCollapsedPUvk;
        private Boolean _isCollapsedPKfz;
        private Boolean _isCollapsedPHe;
        private Boolean _isCollapsedPRs;
        private Boolean _isCollapsedGKfz;
        private Boolean _isCollapsedGGeb;
        //***********************
        //string _Antragsdatum;
        //string _VermittlerID;
        //string _TisGFNr;
        //string _MukiGFNr;
        //string _Kontaktperson;
        //Sachbearbeiter _Sachbearbeiter;
        //
        private Vn _vn;
        private List<Vp> _listVp;
        private List<Kfz> _listKfz;
        #endregion

        #region Property
        public EnumPlattform Plattform
        {
            get { return _plattform; }
            set { _plattform = value; }
        }
        public EnumModus Modus
        {
            get { return _modus; }
            set { _modus = value; }
        }
        public EnumKunde Kunde
        {
            get { return _kunde; }
            set { _kunde = value; }
        }
        //
        public Boolean IsAvailablePFp
        {
            get { return _isAvailablePFp; }
            set { _isAvailablePFp = value; }
        }
        public Boolean IsAvailablePKv
        {
            get { return _isAvailablePKv; }
            set { _isAvailablePKv = value; }
        }
        public Boolean IsAvailablePUv
        {
            get { return _isAvailablePUv; }
            set { _isAvailablePUv = value; }
        }
        public Boolean IsAvailablePUvk
        {
            get { return _isAvailablePUvk; }
            set { _isAvailablePUvk = value; }
        }
        public Boolean IsAvailablePKfz
        {
            get { return _isAvailablePKfz; }
            set { _isAvailablePKfz = value; }
        }
        public Boolean IsAvailablePHe
        {
            get { return _isAvailablePHe; }
            set { _isAvailablePHe = value; }
        }
        public Boolean IsAvailablePRs
        {
            get { return _isAvailablePRs; }
            set { _isAvailablePRs = value; }
        }
        public Boolean IsAvailableGKfz
        {
            get { return _isAvailableGKfz; }
            set { _isAvailableGKfz = value; }
        }
        public Boolean IsAvailableGGeb
        {
            get { return _isAvailableGGeb; }
            set { _isAvailableGGeb = value; }
        }
        //
        public Boolean IsEnabledPFp
        {
            get { return _isEnabledPFp; }
            set { _isEnabledPFp = value; }
        }
        public Boolean IsEnabledPKv
        {
            get { return _isEnabledPKv; }
            set { _isEnabledPKv = value; }
        }
        public Boolean IsEnabledPUv
        {
            get { return _isEnabledPUv; }
            set { _isEnabledPUv = value; }
        }
        public Boolean IsEnabledPUvk
        {
            get { return _isEnabledPUvk; }
            set { _isEnabledPUvk = value; }
        }
        public Boolean IsEnabledPKfz
        {
            get { return _isEnabledPKfz; }
            set { _isEnabledPKfz = value; }
        }
        public Boolean IsEnabledPHe
        {
            get { return _isEnabledPHe; }
            set { _isEnabledPHe = value; }
        }
        public Boolean IsEnabledPRs
        {
            get { return _isEnabledPRs; }
            set { _isEnabledPRs = value; }
        }
        public Boolean IsEnabledGKfz
        {
            get { return _isEnabledGKfz; }
            set { _isEnabledGKfz = value; }
        }
        public Boolean IsEnabledGGeb
        {
            get { return _isEnabledGGeb; }
            set { _isEnabledGGeb = value; }
        }
        //
        public Boolean IsCollapsedVn
        {
            get { return _isCollapsedVn; }
            set { _isCollapsedVn = value; }
        }
        public Boolean IsCollapsedPFp
        {
            get { return _isCollapsedPFp; }
            set { _isCollapsedPFp = value; }
        }
        public Boolean IsCollapsedPKv
        {
            get { return _isCollapsedPKv; }
            set { _isCollapsedPKv = value; }
        }
        public Boolean IsCollapsedPUv
        {
            get { return _isCollapsedPUv; }
            set { _isCollapsedPUv = value; }
        }
        public Boolean IsCollapsedPUvk
        {
            get { return _isCollapsedPUvk; }
            set { _isCollapsedPUvk = value; }
        }
        public Boolean IsCollapsedPKfz
        {
            get { return _isCollapsedPKfz; }
            set { _isCollapsedPKfz = value; }
        }
        public Boolean IsCollapsedPHe
        {
            get { return _isCollapsedPHe; }
            set { _isCollapsedPHe = value; }
        }
        public Boolean IsCollapsedPRs
        {
            get { return _isCollapsedPRs; }
            set { _isCollapsedPRs = value; }
        }
        public Boolean IsCollapsedGKfz
        {
            get { return _isCollapsedGKfz; }
            set { _isCollapsedGKfz = value; }
        }
        public Boolean IsCollapsedGGeb
        {
            get { return _isCollapsedGGeb; }
            set { _isCollapsedGGeb = value; }
        }
        public Vn Vn
        {
            get { return _vn; }
            set { _vn = value; }
        }
        public List<Vp> ListVp
        {
            get { return _listVp; }
            set { _listVp = value; }
        }
        public List<Kfz> ListKfz
        {
            get { return _listKfz; }
            set { _listKfz = value; }
        }
        #endregion

        public Vertrag()
        {
            _plattform = EnumPlattform.muki;
            _modus = EnumModus.angebot;
            _kunde = EnumKunde.privat;
            //
            _isAvailablePFp = false;
            _isAvailablePKv = false;
            _isAvailablePUv = false;
            _isAvailablePUvk = false;
            _isAvailablePKfz = false;
            _isAvailablePHe = false;
            _isAvailablePRs = false;
            _isAvailableGKfz = false;
            _isAvailableGGeb = false;
            //
            _isEnabledPFp = false;
            _isEnabledPKv = false;
            _isEnabledPUv = false;
            _isEnabledPUvk = false;
            _isEnabledPKfz = false;
            _isEnabledPHe = false;
            _isEnabledPRs = false;
            _isEnabledGKfz = false;
            _isEnabledGGeb = false;
            //
            _isCollapsedVn = true;
            _isCollapsedPFp = true;
            _isCollapsedPKv = true;
            _isCollapsedPUv = true;
            _isCollapsedPUvk = true;
            _isCollapsedPKfz = true;
            _isCollapsedPHe = true;
            _isCollapsedPRs = true;
            _isCollapsedGKfz = true;
            _isCollapsedGGeb = true;
            //
            _vn = null;
            _listVp = new List<Vp>();
            _listKfz = new List<Kfz>();
        }

        #region Methoden Vn
        // Vn
        public void AddVn(Vn vn)
        {
            this.Vn = vn;
            //
            this.CheckVn();
        }

        public void UpdateVn(Vn vn)
        {
            this.Vn = vn;
            //
            this.CheckVn();
        }

        public void DeleteVn()
        {
            this.Vn = null;
        }

        private void CheckVn()
        {
            // Vn < 15 -> keine Annahme (Kfz)
            if (Vn.Alter < 15)
            {
                Vn.HasErrorVn_Alter15 = true;
            }
            else
            {
                Vn.HasErrorVn_Alter15 = false;
            }

            // Vn >= 15 && < 21 -> keine Annahme (Kfz -> Pkw/Lkw/Motorrad/Dreirad/VierradGr50/Zugmaschine/Anhänger)
            if (Vn.Alter >= 15 && Vn.Alter < 21)
            {
                Vn.HasErrorVn_Alter21 = true;
            }
            else
            {
                Vn.HasErrorVn_Alter21 = false;
            }

            // Vn < 23 -> keine Freischadenbonus / Schadenersatzbeitrag (Kfz)
            if (Vn.Alter < 23)
            {
                Vn.HasErrorVn_Alter23 = true;
            }
            else
            {
                Vn.HasErrorVn_Alter23 = false;
            }

            // Vn >= 75 -> Anfragepflichtig (Kfz)
            if (Vn.Alter >= 75)
            {
                Vn.HasErrorVn_Alter75 = true;
            }
            else
            {
                Vn.HasErrorVn_Alter75 = false;
            }

            // Vn selbständig keine Annahme (Kfz Rechtsschutz)
            if (Vn.ArtBeschaeftigung == EnumArtBeschaeftigung.selbstaendig)
            {
                Vn.HasErrorVn_Selbstaendig = true;
            }
            else
            {
                Vn.HasErrorVn_Selbstaendig = false;
            }

            // PrepareAndExecute
            this.PrepareAndExecuteVn();
            // Abhängigkeiten
            // Fp
            // ...
            // Kv
            // ...
            // Kfz
            this.CheckKfz();
        }
        
        private void PrepareAndExecuteVn()
        {
            // Vn < 15 -> keine Annahme (Kfz)
            if (Vn.HasErrorVn_Alter15)
            {
                // Kfz
                this.ListKfz.Clear();
            }
        }
        #endregion

        #region Methoden Kfz
        public void AddKfz(Pkw kfz)
        {
            Kfz._Cnt++;
            Pkw._CntTyp++;
            this.ListKfz.Add(kfz);

            this.CheckKfz();
        }

        public void AddKfz(Lkw kfz)
        {
            Kfz._Cnt++;
            Lkw._CntTyp++;
            this.ListKfz.Add(kfz);

            this.CheckKfz();
        }

        public void AddKfz(Motorrad kfz)
        {
            Kfz._Cnt++;
            Motorrad._CntTyp++;
            this.ListKfz.Add(kfz);

            this.CheckKfz();
        }

        public void AddKfz(Moped kfz)
        {
            Kfz._Cnt++;
            Moped._CntTyp++;
            this.ListKfz.Add(kfz);

            this.CheckKfz();
        }

        public void AddKfz(Dreirad kfz)
        {
            Kfz._Cnt++;
            Dreirad._CntTyp++;
            this.ListKfz.Add(kfz);

            this.CheckKfz();
        }

        public void AddKfz(VierradKl50 kfz)
        {
            Kfz._Cnt++;
            VierradKl50._CntTyp++;
            this.ListKfz.Add(kfz);

            this.CheckKfz();
        }

        public void AddKfz(VierradGr50 kfz)
        {
            Kfz._Cnt++;
            VierradGr50._CntTyp++;
            this.ListKfz.Add(kfz);

            this.CheckKfz();
        }

        public void AddKfz(Zugmaschine kfz)
        {
            Kfz._Cnt++;
            Zugmaschine._CntTyp++;
            this.ListKfz.Add(kfz);

            this.CheckKfz();
        }

        public void AddKfz(Anhaenger kfz)
        {
            Kfz._Cnt++;
            Anhaenger._CntTyp++;
            this.ListKfz.Add(kfz);

            this.CheckKfz();
        }

        public void UpdateKfz(Pkw kfz)
        {
            Pkw tmp = new Pkw();

            tmp = (Pkw)this.ListKfz.Find(k => k.Id == kfz.Id);

            tmp.Id = kfz.Id;
            tmp.Vertrag = kfz.Vertrag;
            tmp.Fahrzeug = kfz.Fahrzeug;
            tmp.PolNr = kfz.PolNr;
            tmp.Versicherungsbeginn = Convert.ToDateTime(kfz.Versicherungsbeginn);
            tmp.Wunschhauptfaelligkeit = kfz.Wunschhauptfaelligkeit;
            tmp.EingabeArt = kfz.EingabeArt;
            tmp.NationalCode = kfz.NationalCode;
            tmp.Typ = kfz.Typ;
            tmp.Marke = kfz.Marke;
            tmp.Modell = kfz.Modell;
            tmp.Kennzeichen = kfz.Kennzeichen;
            tmp.VbNr = kfz.VbNr;
            tmp.FahrgestellNr = kfz.FahrgestellNr;
            tmp.ErstzulassungsDatum = kfz.ErstzulassungsDatum;
            tmp.Alter = kfz.Alter;
            tmp.AnmeldeDatum = kfz.AnmeldeDatum;
            tmp.Antrieb = kfz.Antrieb;
            tmp.Leistung = kfz.Leistung;
            tmp.Listenpreis = kfz.Listenpreis;
            tmp.Sonderausstattung = kfz.Sonderausstattung;
            tmp.Gesamtpreis = kfz.Gesamtpreis;
            tmp.Bonusstufe = kfz.Bonusstufe;
            tmp.HasKat = kfz.HasKat;
            tmp.HasSitze7Plus = kfz.HasSitze7Plus;
            tmp.IsOldtimer = kfz.IsOldtimer;
            tmp.IsSteuerbefreit = kfz.IsSteuerbefreit;
            // Antragsfragen
            // BonusMalus
            tmp.Antragsfragen.IsBonusMalus = kfz.Antragsfragen.IsBonusMalus;
            tmp.Antragsfragen.BonusMalusVersicherer = kfz.Antragsfragen.BonusMalusVersicherer;
            tmp.Antragsfragen.BonusMalusPolNr = kfz.Antragsfragen.BonusMalusPolNr;
            tmp.Antragsfragen.BonusMalusBeendetAm = kfz.Antragsfragen.BonusMalusBeendetAm;
            tmp.Antragsfragen.BonusMalusWegen = kfz.Antragsfragen.BonusMalusWegen;
            // Abgelehnt
            tmp.Antragsfragen.IsAbgelehnt = kfz.Antragsfragen.IsAbgelehnt;
            tmp.Antragsfragen.AbgelehntGrund = kfz.Antragsfragen.AbgelehntGrund;
            tmp.Antragsfragen.AbgelehntUnternehmen = kfz.Antragsfragen.AbgelehntUnternehmen;
            // Kasko
            tmp.Antragsfragen.IsKasko = kfz.Antragsfragen.IsKasko;
            tmp.Antragsfragen.KaskoGrund = kfz.Antragsfragen.KaskoGrund;
            tmp.Antragsfragen.KaskoHasSchaden = kfz.Antragsfragen.KaskoHasSchaden;
            tmp.Antragsfragen.KaskoSchadenWelche = kfz.Antragsfragen.KaskoSchadenWelche;
            // Vinkulierung
            tmp.Antragsfragen.HasVinkulierung = kfz.Antragsfragen.HasVinkulierung;
            tmp.Antragsfragen.VinkulierungZuGunsten = kfz.Antragsfragen.VinkulierungZuGunsten;

            this.CheckKfz();
        }

        public void UpdateKfz(Lkw kfz)
        {
            Lkw tmp = new Lkw();

            tmp = (Lkw)this.ListKfz.Find(k => k.Id == kfz.Id);

            tmp.Id = kfz.Id;
            tmp.Vertrag = kfz.Vertrag;
            tmp.Fahrzeug = kfz.Fahrzeug;
            tmp.PolNr = kfz.PolNr;
            tmp.Versicherungsbeginn = kfz.Versicherungsbeginn;
            tmp.Wunschhauptfaelligkeit = kfz.Wunschhauptfaelligkeit;
            tmp.EingabeArt = kfz.EingabeArt;
            tmp.NationalCode = kfz.NationalCode;
            tmp.Typ = kfz.Typ;
            tmp.Marke = kfz.Marke;
            tmp.Modell = kfz.Modell;
            tmp.Kennzeichen = kfz.Kennzeichen;
            tmp.VbNr = kfz.VbNr;
            tmp.FahrgestellNr = kfz.FahrgestellNr;
            tmp.ErstzulassungsDatum = kfz.ErstzulassungsDatum;
            tmp.Alter = kfz.Alter;
            tmp.AnmeldeDatum = kfz.AnmeldeDatum;
            tmp.Antrieb = kfz.Antrieb;
            tmp.Leistung = kfz.Leistung;
            tmp.Nutzlast = kfz.Nutzlast;
            tmp.Gesamtgewicht = kfz.Gesamtgewicht;
            tmp.Listenpreis = kfz.Listenpreis;
            tmp.Sonderausstattung = kfz.Sonderausstattung;
            tmp.Gesamtpreis = kfz.Gesamtpreis;
            tmp.Bonusstufe = kfz.Bonusstufe;
            tmp.IsSteuerbefreit = kfz.IsSteuerbefreit;
            //tmp.HasErrorKasko_KfzGesamtpreis = kfz.HasErrorKasko_KfzGesamtpreis;
            // Antragsfragen
            // BonusMalus
            tmp.Antragsfragen.IsBonusMalus = kfz.Antragsfragen.IsBonusMalus;
            tmp.Antragsfragen.BonusMalusVersicherer = kfz.Antragsfragen.BonusMalusVersicherer;
            tmp.Antragsfragen.BonusMalusPolNr = kfz.Antragsfragen.BonusMalusPolNr;
            tmp.Antragsfragen.BonusMalusBeendetAm = kfz.Antragsfragen.BonusMalusBeendetAm;
            tmp.Antragsfragen.BonusMalusWegen = kfz.Antragsfragen.BonusMalusWegen;
            // Abgelehnt
            tmp.Antragsfragen.IsAbgelehnt = kfz.Antragsfragen.IsAbgelehnt;
            tmp.Antragsfragen.AbgelehntGrund = kfz.Antragsfragen.AbgelehntGrund;
            tmp.Antragsfragen.AbgelehntUnternehmen = kfz.Antragsfragen.AbgelehntUnternehmen;
            // Kasko
            tmp.Antragsfragen.IsKasko = kfz.Antragsfragen.IsKasko;
            tmp.Antragsfragen.KaskoGrund = kfz.Antragsfragen.KaskoGrund;
            tmp.Antragsfragen.KaskoHasSchaden = kfz.Antragsfragen.KaskoHasSchaden;
            tmp.Antragsfragen.KaskoSchadenWelche = kfz.Antragsfragen.KaskoSchadenWelche;
            // Vinkulierung
            tmp.Antragsfragen.HasVinkulierung = kfz.Antragsfragen.HasVinkulierung;
            tmp.Antragsfragen.VinkulierungZuGunsten = kfz.Antragsfragen.VinkulierungZuGunsten;

            this.CheckKfz();
        }

        public void UpdateKfz(Motorrad kfz)
        {
            Motorrad tmp = new Motorrad();

            tmp = (Motorrad)this.ListKfz.Find(k => k.Id == kfz.Id);

            tmp.Id = kfz.Id;
            tmp.Vertrag = kfz.Vertrag;
            tmp.Fahrzeug = kfz.Fahrzeug;
            tmp.PolNr = kfz.PolNr;
            tmp.Versicherungsbeginn = kfz.Versicherungsbeginn;
            tmp.Wunschhauptfaelligkeit = kfz.Wunschhauptfaelligkeit;
            tmp.Typ = kfz.Typ;
            tmp.Marke = kfz.Marke;
            tmp.Modell = kfz.Modell;
            tmp.Kennzeichen = kfz.Kennzeichen;
            tmp.VbNr = kfz.VbNr;
            tmp.FahrgestellNr = kfz.FahrgestellNr;
            tmp.ErstzulassungsDatum = kfz.ErstzulassungsDatum;
            tmp.Alter = kfz.Alter;
            tmp.AnmeldeDatum = kfz.AnmeldeDatum;
            tmp.Antrieb = kfz.Antrieb;
            tmp.Hubraum = kfz.Hubraum;
            tmp.Listenpreis = kfz.Listenpreis;
            tmp.Sonderausstattung = kfz.Sonderausstattung;
            tmp.Gesamtpreis = kfz.Gesamtpreis;
            tmp.IsOldtimer = kfz.IsOldtimer;
            tmp.IsSteuerbefreit = kfz.IsSteuerbefreit;
            //tmp.HasErrorKasko_KfzGesamtpreis = kfz.HasErrorKasko_KfzGesamtpreis;
            // Antragsfragen
            // Abgelehnt
            tmp.Antragsfragen.IsAbgelehnt = kfz.Antragsfragen.IsAbgelehnt;
            tmp.Antragsfragen.AbgelehntGrund = kfz.Antragsfragen.AbgelehntGrund;
            tmp.Antragsfragen.AbgelehntUnternehmen = kfz.Antragsfragen.AbgelehntUnternehmen;
            // Kasko
            tmp.Antragsfragen.IsKasko = kfz.Antragsfragen.IsKasko;
            tmp.Antragsfragen.KaskoGrund = kfz.Antragsfragen.KaskoGrund;
            tmp.Antragsfragen.KaskoHasSchaden = kfz.Antragsfragen.KaskoHasSchaden;
            tmp.Antragsfragen.KaskoSchadenWelche = kfz.Antragsfragen.KaskoSchadenWelche;
            // Vinkulierung
            tmp.Antragsfragen.HasVinkulierung = kfz.Antragsfragen.HasVinkulierung;
            tmp.Antragsfragen.VinkulierungZuGunsten = kfz.Antragsfragen.VinkulierungZuGunsten;

            this.CheckKfz();
        }

        public void UpdateKfz(Moped kfz)
        {
            Moped tmp = new Moped();

            tmp = (Moped)this.ListKfz.Find(k => k.Id == kfz.Id);

            tmp.Id = kfz.Id;
            tmp.Vertrag = kfz.Vertrag;
            tmp.Fahrzeug = kfz.Fahrzeug;
            tmp.PolNr = kfz.PolNr;
            tmp.Versicherungsbeginn = kfz.Versicherungsbeginn;
            tmp.Wunschhauptfaelligkeit = kfz.Wunschhauptfaelligkeit;
            tmp.Typ = kfz.Typ;
            tmp.Marke = kfz.Marke;
            tmp.Modell = kfz.Modell;
            tmp.Kennzeichen = kfz.Kennzeichen;
            tmp.VbNr = kfz.VbNr;
            tmp.FahrgestellNr = kfz.FahrgestellNr;
            tmp.ErstzulassungsDatum = kfz.ErstzulassungsDatum;
            tmp.Alter = kfz.Alter;
            tmp.AnmeldeDatum = kfz.AnmeldeDatum;
            tmp.Antrieb = kfz.Antrieb;
            tmp.Hubraum = kfz.Hubraum;
            tmp.Sitzplaetze = kfz.Sitzplaetze;
            // Antragsfragen
            // Abgelehnt
            kfz.Antragsfragen.IsAbgelehnt = kfz.Antragsfragen.IsAbgelehnt;
            kfz.Antragsfragen.AbgelehntGrund = kfz.Antragsfragen.AbgelehntGrund;
            kfz.Antragsfragen.AbgelehntUnternehmen = kfz.Antragsfragen.AbgelehntUnternehmen;

            this.CheckKfz();
        }

        public void UpdateKfz(Dreirad kfz)
        {
            Dreirad tmp = new Dreirad();

            tmp = (Dreirad)this.ListKfz.Find(k => k.Id == kfz.Id);

            tmp.Id = kfz.Id;
            tmp.Vertrag = kfz.Vertrag;
            tmp.Fahrzeug = kfz.Fahrzeug;
            tmp.PolNr = kfz.PolNr;
            tmp.Versicherungsbeginn = kfz.Versicherungsbeginn;
            tmp.Wunschhauptfaelligkeit = kfz.Wunschhauptfaelligkeit;
            tmp.Typ = kfz.Typ;
            tmp.Marke = kfz.Marke;
            tmp.Modell = kfz.Modell;
            tmp.Kennzeichen = kfz.Kennzeichen;
            tmp.VbNr = kfz.VbNr;
            tmp.FahrgestellNr = kfz.FahrgestellNr;
            tmp.ErstzulassungsDatum = kfz.ErstzulassungsDatum;
            tmp.Alter = kfz.Alter;
            tmp.AnmeldeDatum = kfz.AnmeldeDatum;
            tmp.Antrieb = kfz.Antrieb;
            tmp.Hubraum = kfz.Hubraum;
            tmp.IsSteuerbefreit = kfz.IsSteuerbefreit;
            // Antragsfragen
            // Abgelehnt
            tmp.Antragsfragen.IsAbgelehnt = kfz.Antragsfragen.IsAbgelehnt;
            tmp.Antragsfragen.AbgelehntGrund = kfz.Antragsfragen.AbgelehntGrund;
            tmp.Antragsfragen.AbgelehntUnternehmen = kfz.Antragsfragen.AbgelehntUnternehmen;

            this.CheckKfz();
        }

        public void UpdateKfz(VierradKl50 kfz)
        {
            VierradKl50 tmp = new VierradKl50();

            tmp = (VierradKl50)this.ListKfz.Find(k => k.Id == kfz.Id);

            tmp.Id = kfz.Id;
            tmp.Vertrag = kfz.Vertrag;
            tmp.Fahrzeug = kfz.Fahrzeug;
            tmp.PolNr = kfz.PolNr;
            tmp.Versicherungsbeginn = kfz.Versicherungsbeginn;
            tmp.Wunschhauptfaelligkeit = kfz.Wunschhauptfaelligkeit;
            tmp.Typ = kfz.Typ;
            tmp.Marke = kfz.Marke;
            tmp.Modell = kfz.Modell;
            tmp.Kennzeichen = kfz.Kennzeichen;
            tmp.VbNr = kfz.VbNr;
            tmp.FahrgestellNr = kfz.FahrgestellNr;
            tmp.ErstzulassungsDatum = kfz.ErstzulassungsDatum;
            tmp.Alter = kfz.Alter;
            tmp.AnmeldeDatum = kfz.AnmeldeDatum;
            tmp.Antrieb = kfz.Antrieb;
            tmp.Leistung = kfz.Leistung;
            tmp.IsSteuerbefreit = kfz.IsSteuerbefreit;
            // Antragsfragen
            // Abgelehnt
            tmp.Antragsfragen.IsAbgelehnt = kfz.Antragsfragen.IsAbgelehnt;
            tmp.Antragsfragen.AbgelehntGrund = kfz.Antragsfragen.AbgelehntGrund;
            tmp.Antragsfragen.AbgelehntUnternehmen = kfz.Antragsfragen.AbgelehntUnternehmen;

            this.CheckKfz();
        }

        public void UpdateKfz(VierradGr50 kfz)
        {
            VierradGr50 tmp = new VierradGr50();

            tmp = (VierradGr50)this.ListKfz.Find(k => k.Id == kfz.Id);

            tmp.Id = kfz.Id;
            tmp.Vertrag = kfz.Vertrag;
            tmp.Fahrzeug = kfz.Fahrzeug;
            tmp.PolNr = kfz.PolNr;
            tmp.Versicherungsbeginn = kfz.Versicherungsbeginn;
            tmp.Wunschhauptfaelligkeit = kfz.Wunschhauptfaelligkeit;
            tmp.Subtyp = kfz.Subtyp;
            tmp.Typ = kfz.Typ;
            tmp.Marke = kfz.Marke;
            tmp.Modell = kfz.Modell;
            tmp.Kennzeichen = kfz.Kennzeichen;
            tmp.VbNr = kfz.VbNr;
            tmp.FahrgestellNr = kfz.FahrgestellNr;
            tmp.ErstzulassungsDatum = kfz.ErstzulassungsDatum;
            tmp.Alter = kfz.Alter;
            tmp.AnmeldeDatum = kfz.AnmeldeDatum;
            tmp.Antrieb = kfz.Antrieb;
            tmp.Leistung = kfz.Leistung;
            tmp.IsSteuerbefreit = kfz.IsSteuerbefreit;
            // Antragsfragen
            // Abgelehnt
            tmp.Antragsfragen.IsAbgelehnt = kfz.Antragsfragen.IsAbgelehnt;
            tmp.Antragsfragen.AbgelehntGrund = kfz.Antragsfragen.AbgelehntGrund;
            tmp.Antragsfragen.AbgelehntUnternehmen = kfz.Antragsfragen.AbgelehntUnternehmen;

            this.CheckKfz();
        }

        public void UpdateKfz(Zugmaschine kfz)
        {
            Zugmaschine tmp = new Zugmaschine();

            tmp = (Zugmaschine)this.ListKfz.Find(k => k.Id == kfz.Id);

            tmp.Id = kfz.Id;
            tmp.Vertrag = kfz.Vertrag;
            tmp.Fahrzeug = kfz.Fahrzeug;
            tmp.PolNr = kfz.PolNr;
            tmp.Versicherungsbeginn = kfz.Versicherungsbeginn;
            tmp.Wunschhauptfaelligkeit = kfz.Wunschhauptfaelligkeit;
            tmp.Typ = kfz.Typ;
            tmp.Marke = kfz.Marke;
            tmp.Modell = kfz.Modell;
            tmp.Kennzeichen = kfz.Kennzeichen;
            tmp.VbNr = kfz.VbNr;
            tmp.FahrgestellNr = kfz.FahrgestellNr;
            tmp.ErstzulassungsDatum = kfz.ErstzulassungsDatum;
            tmp.Alter = kfz.Alter;
            tmp.AnmeldeDatum = kfz.AnmeldeDatum;
            tmp.Antrieb = kfz.Antrieb;
            tmp.Leistung = kfz.Leistung;
            tmp.Geschwindigkeit = kfz.Geschwindigkeit;
            // Antragsfragen
            // Abgelehnt
            tmp.Antragsfragen.IsAbgelehnt = kfz.Antragsfragen.IsAbgelehnt;
            tmp.Antragsfragen.AbgelehntGrund = kfz.Antragsfragen.AbgelehntGrund;
            tmp.Antragsfragen.AbgelehntUnternehmen = kfz.Antragsfragen.AbgelehntUnternehmen;

            this.CheckKfz();
        }

        public void UpdateKfz(Anhaenger kfz)
        {
            Anhaenger tmp = new Anhaenger();

            tmp = (Anhaenger)this.ListKfz.Find(k => k.Id == kfz.Id);

            tmp.Id = kfz.Id;
            tmp.Vertrag = kfz.Vertrag;
            tmp.Fahrzeug = kfz.Fahrzeug;
            tmp.PolNr = kfz.PolNr;
            tmp.Versicherungsbeginn = kfz.Versicherungsbeginn;
            tmp.Wunschhauptfaelligkeit = kfz.Wunschhauptfaelligkeit;
            tmp.Typ = kfz.Typ;
            tmp.Marke = kfz.Marke;
            tmp.Modell = kfz.Modell;
            tmp.Kennzeichen = kfz.Kennzeichen;
            tmp.VbNr = kfz.VbNr;
            tmp.FahrgestellNr = kfz.FahrgestellNr;
            tmp.ErstzulassungsDatum = kfz.ErstzulassungsDatum;
            tmp.Alter = kfz.Alter;
            tmp.AnmeldeDatum = kfz.AnmeldeDatum;
            tmp.Nutzlast = kfz.Nutzlast;
            // Antragsfragen
            // Abgelehnt
            kfz.Antragsfragen.IsAbgelehnt = kfz.Antragsfragen.IsAbgelehnt;
            kfz.Antragsfragen.AbgelehntGrund = kfz.Antragsfragen.AbgelehntGrund;
            kfz.Antragsfragen.AbgelehntUnternehmen = kfz.Antragsfragen.AbgelehntUnternehmen;

            this.CheckKfz();
        }

        public bool DeleteKfz(int id)
        {
            int index = ListKfz.FindIndex(k => k.Id == id);

            if (index == -1) // (wenn Session abläuft)
            {
                return false;
            }

            Kfz kfz = (Kfz)this.ListKfz.Find(k => k.Id == id);

            Kfz._Cnt--;
            switch (kfz.Typ)
            {
                case "Pkw":
                    Pkw._CntTyp--;
                    break;
                case "Lkw":
                    Lkw._CntTyp--;
                    break;
                case "Motorrad":
                    Motorrad._CntTyp--;
                    break;
                case "Moped":
                    Moped._CntTyp--;
                    break;
                case "Dreirad":
                    Dreirad._CntTyp--;
                    break;
                case "VierradKl50":
                    VierradKl50._CntTyp--;
                    break;
                case "VierradGr50":
                    VierradGr50._CntTyp--;
                    break;
                case "Zugmaschine":
                    Zugmaschine._CntTyp--;
                    break;
                case "Anhaenger":
                    Anhaenger._CntTyp--;
                    break;
            }

            ListKfz.RemoveAt(index);

            this.CheckKfz();

            return true;
        }

        private void CheckKfz()
        {
            foreach (var kfz in ListKfz)
            {
                // Pkw
                if (kfz is Pkw)
                {
                    Pkw tmp = (Pkw)this.ListKfz.Find(k => k.Id == kfz.Id);

                    // ### Haftpflicht
                    // Kfz Marke BMW I3/I4/I5/I8 -> keine Annahme
                    if (tmp.Marke == "BMW")
                    {
                        if (System.Text.RegularExpressions.Regex.IsMatch(tmp.Modell, "^([iI])\\s*([3458])$"))
                        {
                            tmp.HasErrorHaftpflicht_KfzMarke = true;
                        }
                        else
                        {
                            tmp.HasErrorHaftpflicht_KfzMarke = false;
                        }
                    }
                    else
                    {
                        tmp.HasErrorHaftpflicht_KfzMarke = false;
                    }

                    // ### Kasko
                    // Kfz Marke BMW X6 -> keine Annahme
                    if (tmp.Marke == "BMW")
                    {
                        if (System.Text.RegularExpressions.Regex.IsMatch(tmp.Modell, "^([xX])\\s*([6])$"))
                        {
                            tmp.HasErrorKasko_KfzMarke = true;
                        }
                        else
                        {
                            tmp.HasErrorKasko_KfzMarke = false;
                        }
                    }
                    else
                    {
                        tmp.HasErrorHaftpflicht_KfzMarke = false;
                    }

                    // Gesamtpreis ((Listenpreis + Sonderausstattung + Folierung) - Freibetrag) muss < 100.000,- sein -> keine Annahme
                    if (tmp.Gesamtpreis >= 100000)
                    {
                        tmp.HasErrorKasko_KfzGesamtpreis = true;
                    }
                    else
                    {
                        tmp.HasErrorKasko_KfzGesamtpreis = false;
                    }

                    // Kfz Alter > 5 && <= 8 -> nur Teilkasko
                    if (kfz.Alter >= 5 && kfz.Alter < 8)
                    {
                        tmp.HasErrorKasko_KfzAlter5 = true;
                    }
                    else
                    {
                        tmp.HasErrorKasko_KfzAlter5 = false;
                    }

                    // Kfz Alter > 8 -> keine Annahme
                    if (kfz.Alter >= 8)
                    {
                        tmp.HasErrorKasko_KfzAlter8 = true;
                    }
                    else
                    {
                        tmp.HasErrorKasko_KfzAlter8 = false;
                    }
                }
                // Lkw
                if (kfz is Lkw)
                {
                    Lkw tmp = (Lkw)this.ListKfz.Find(k => k.Id == kfz.Id);

                    // ### Haftpflicht
                    // Kfz Marke BMW I3/I4/I5/I8 -> keine Annahme
                    if (tmp.Marke == "BMW")
                    {
                        if (System.Text.RegularExpressions.Regex.IsMatch(tmp.Modell, "^([iI])\\s*([3458])$"))
                        {
                            tmp.HasErrorHaftpflicht_KfzMarke = true;
                        }
                        else
                        {
                            tmp.HasErrorHaftpflicht_KfzMarke = false;
                        }
                    }
                    else
                    {
                        tmp.HasErrorHaftpflicht_KfzMarke = false;
                    }

                    // ### Kasko
                    // Kfz Marke BMW X6 -> keine Annahme
                    if (tmp.Marke == "BMW")
                    {
                        if (System.Text.RegularExpressions.Regex.IsMatch(tmp.Modell, "^([xX])\\s*([6])$"))
                        {
                            tmp.HasErrorKasko_KfzMarke = true;
                        }
                        else
                        {
                            tmp.HasErrorKasko_KfzMarke = false;
                        }
                    }
                    else
                    {
                        tmp.HasErrorHaftpflicht_KfzMarke = false;
                    }

                    // Gesamtpreis ((Listenpreis + Sonderausstattung) - Freibetrag) muss < 100.000,- sein -> keine Annahme
                    if (tmp.Gesamtpreis >= 100000)
                    {
                        tmp.HasErrorKasko_KfzGesamtpreis = true;
                    }
                    else
                    {
                        tmp.HasErrorKasko_KfzGesamtpreis = false;
                    }

                    // Kfz Alter  > 5 && <= 8 -> nur Teilkasko
                    if (kfz.Alter >= 5 && kfz.Alter < 8)
                    {
                        tmp.HasErrorKasko_KfzAlter5 = true;
                    }
                    else
                    {
                        tmp.HasErrorKasko_KfzAlter5 = false;
                    }

                    // Kfz Alter > 8 -> keine Annahme
                    if (kfz.Alter >= 8)
                    {
                        tmp.HasErrorKasko_KfzAlter8 = true;
                    }
                    else
                    {
                        tmp.HasErrorKasko_KfzAlter8 = false;
                    }
                }
                // Motorrad
                if (kfz is Motorrad)
                {
                    Motorrad tmp = (Motorrad)this.ListKfz.Find(k => k.Id == kfz.Id);

                    // ### Kasko
                    // Gesamtpreis (Listenpreis + Sonderausstattung) muss < 100.000,- sein
                    if (tmp.Gesamtpreis >= 100000)
                    {
                        tmp.HasErrorKasko_KfzGesamtpreis = true;
                    }
                    else
                    {
                        tmp.HasErrorKasko_KfzGesamtpreis = false;
                    }

                    // Kfz Alter > 5 && <= 8 -> nur Teilkasko
                    if (kfz.Alter >= 5 && kfz.Alter < 8)
                    {
                        tmp.HasErrorKasko_KfzAlter5 = true;
                    }
                    else
                    {
                        tmp.HasErrorKasko_KfzAlter5 = false;
                    }

                    // Kfz Alter > 8 -> keine Annahme
                    if (kfz.Alter >= 8)
                    {
                        tmp.HasErrorKasko_KfzAlter8 = true;
                    }
                    else
                    {
                        tmp.HasErrorKasko_KfzAlter8 = false;
                    }
                }
            }

            this.PrepareAndExecuteKfz();
        }

        private void PrepareAndExecuteKfz()
        {
            List<Kfz> tmpListKfz = new List<Kfz>();

            foreach (var kfz in ListKfz)
            {
                // Pkw
                if (kfz is Pkw)
                {
                    Pkw tmp = (Pkw)this.ListKfz.Find(k => k.Id == kfz.Id);

                    // ### Vn
                    // Vn < 21 -> keine Annahme Haftpflicht Pkw/Lkw/Motorrad/Dreirad/VierradGr50/Zugmaschine/Anhänger
                    if (Vn.HasErrorVn_Alter21)
                    {
                        tmp.MarkToDelete = true;
                    }

                    // Kfz BMW I3/I4/I5/I8 -> keine Annahme Haftpflicht (Pkw/Lkw/Motorrad/Dreirad/VierradGr50/Zugmaschine/Anhänger)
                    if (tmp.HasErrorHaftpflicht_KfzMarke)
                    {
                        tmp.Produkte.HasHaftpflicht = false;
                        tmp.Produkte.Haftpflicht = null;
                    }

                    if (!tmp.MarkToDelete)
                    {
                        tmpListKfz.Add(tmp);
                    }
                }
                // Lkw
                if (kfz is Lkw)
                {
                    Lkw tmp = (Lkw)this.ListKfz.Find(k => k.Id == kfz.Id);

                    // ### Vn
                    // Vn < 21 -> keine Annahme Haftpflicht Pkw/Lkw/Motorrad/Dreirad/VierradGr50/Zugmaschine/Anhänger
                    if (Vn.HasErrorVn_Alter21)
                    {
                        tmp.MarkToDelete = true;
                    }

                    // Kfz BMW I3/I4/I5/I8 -> keine Annahme Haftpflicht (Pkw/Lkw/Motorrad/Dreirad/VierradGr50/Zugmaschine/Anhänger)
                    if (tmp.HasErrorHaftpflicht_KfzMarke)
                    {
                        tmp.Produkte.HasHaftpflicht = false;
                        tmp.Produkte.Haftpflicht = null;
                    }

                    if (!tmp.MarkToDelete)
                    {
                        tmpListKfz.Add(tmp);
                    }
                }
                // Motorrad
                if (kfz is Motorrad)
                {
                    Motorrad tmp = (Motorrad)this.ListKfz.Find(k => k.Id == kfz.Id);

                    // ### Vn
                    // Vn < 21 -> keine Annahme Haftpflicht Pkw/Lkw/Motorrad/Dreirad/VierradGr50/Zugmaschine/Anhänger
                    if (Vn.HasErrorVn_Alter21)
                    {
                        tmp.MarkToDelete = true;
                    }

                    if (!tmp.MarkToDelete)
                    {
                        tmpListKfz.Add(tmp);
                    }
                }
                // Moped
                if (kfz is Moped)
                {
                    Moped tmp = (Moped)this.ListKfz.Find(k => k.Id == kfz.Id);

                    // ### Vn
                    // Vn < 15 -> keine Annahme Haftpflicht
                    if (Vn.HasErrorVn_Alter15)
                    {
                        tmp.MarkToDelete = true;
                    }

                    if (!tmp.MarkToDelete)
                    {
                        tmpListKfz.Add(tmp);
                    }
                }
                // Dreirad
                if (kfz is Dreirad)
                {
                    Dreirad tmp = (Dreirad)this.ListKfz.Find(k => k.Id == kfz.Id);

                    // ### Vn
                    // Vn < 21 -> keine Annahme Haftpflicht Pkw/Lkw/Motorrad/Dreirad/VierradGr50/Zugmaschine/Anhänger
                    if (Vn.HasErrorVn_Alter21)
                    {
                        tmp.MarkToDelete = true;
                    }

                    if (!tmp.MarkToDelete)
                    {
                        tmpListKfz.Add(tmp);
                    }
                }
                // VierradKl50
                if (kfz is VierradKl50)
                {
                    VierradKl50 tmp = (VierradKl50)this.ListKfz.Find(k => k.Id == kfz.Id);

                    // ### Vn
                    // Vn < 21 -> keine Annahme Haftpflicht Pkw/Lkw/Motorrad/Dreirad/VierradGr50/Zugmaschine/Anhänger
                    if (Vn.HasErrorVn_Alter21)
                    {
                        tmp.MarkToDelete = true;
                    }

                    if (!tmp.MarkToDelete)
                    {
                        tmpListKfz.Add(tmp);
                    }
                }
                // VierradGr50
                if (kfz is VierradGr50)
                {
                    VierradGr50 tmp = (VierradGr50)this.ListKfz.Find(k => k.Id == kfz.Id);

                    // ### Vn
                    // Vn < 21 -> keine Annahme Haftpflicht Pkw/Lkw/Motorrad/Dreirad/VierradGr50/Zugmaschine/Anhänger
                    if (Vn.HasErrorVn_Alter21)
                    {
                        tmp.MarkToDelete = true;
                    }

                    if (!tmp.MarkToDelete)
                    {
                        tmpListKfz.Add(tmp);
                    }
                }
                // Zugmaschine
                if (kfz is Zugmaschine)
                {
                    Zugmaschine tmp = (Zugmaschine)this.ListKfz.Find(k => k.Id == kfz.Id);

                    // ### Vn
                    // Vn < 21 -> keine Annahme Haftpflicht Pkw/Lkw/Motorrad/Dreirad/VierradGr50/Zugmaschine/Anhänger
                    if (Vn.HasErrorVn_Alter21)
                    {
                        tmp.MarkToDelete = true;
                    }

                    if (!tmp.MarkToDelete)
                    {
                        tmpListKfz.Add(tmp);
                    }
                }
                // Anhaenger
                if (kfz is Anhaenger)
                {
                    Anhaenger tmp = (Anhaenger)this.ListKfz.Find(k => k.Id == kfz.Id);

                    // ### Vn
                    // Vn < 21 -> keine Annahme Haftpflicht Pkw/Lkw/Motorrad/Dreirad/VierradGr50/Zugmaschine/Anhänger
                    if (Vn.HasErrorVn_Alter21)
                    {
                        tmp.MarkToDelete = true;
                    }

                    if (!tmp.MarkToDelete)
                    {
                        tmpListKfz.Add(tmp);
                    }
                }
            }

            this.ListKfz = tmpListKfz;
        }

        public bool ToggleKfzHaftpflicht(Pkw kfz)
        {
            Pkw tmp = (Pkw)ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            if (kfz.Produkte.HasHaftpflicht == false)
            {
                tmp.Produkte.HasHaftpflicht = true;
                tmp.Produkte.Haftpflicht = new Haftpflicht_Pkw();
                tmp.Produkte.Haftpflicht.Tarif = EnumHaftpflichtTarif.Hp1; //Standard
                tmp.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs3; //20 Mio.
                tmp.Produkte.Haftpflicht.Variante = EnumHaftpflichtVariante.A; //Variante A
                tmp.Produkte.Haftpflicht.HasAssistance = false;
            }
            else
            {
                tmp.Produkte.HasHaftpflicht = false;
                tmp.Produkte.Haftpflicht = null;
                // Ohne Haftpflicht keine Kaskoversicherung
                tmp.Produkte.HasKasko = false;
                tmp.Produkte.Kasko = null;
                // Ohne Haftpflicht keine Rechtsschutzversicherung
                tmp.Produkte.HasRechtsschutz = false;
                tmp.Produkte.Rechtsschutz = null;
                // Ohne Haftpflicht keine Insassenversicherung
                tmp.Produkte.HasInsassen = false;
                tmp.Produkte.Insassen = null;
            }

            return true;
        }

        public bool UpdateKfzHaftpflicht(Pkw kfz)
        {
            Pkw tmp = (Pkw)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            // Daten zuweisen
            tmp.Produkte.Haftpflicht.Tarif = kfz.Produkte.Haftpflicht.Tarif;
            tmp.Produkte.Haftpflicht.VersSum = kfz.Produkte.Haftpflicht.VersSum;
            tmp.Produkte.Haftpflicht.Variante = kfz.Produkte.Haftpflicht.Variante;
            tmp.Produkte.Haftpflicht.HasAssistance = kfz.Produkte.Haftpflicht.HasAssistance;

            return true;
        }

        public bool ToggleKfzHaftpflicht(Lkw kfz)
        {
            Lkw tmp = (Lkw)ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            if (kfz.Produkte.HasHaftpflicht == false)
            {
                tmp.Produkte.HasHaftpflicht = true;
                tmp.Produkte.Haftpflicht = new Haftpflicht_Lkw();
                tmp.Produkte.Haftpflicht.Tarif = EnumHaftpflichtTarif.Hp1; //HpSolo
                tmp.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs3; //20 Mio.
                tmp.Produkte.Haftpflicht.HasAssistance = false;
            }
            else
            {
                tmp.Produkte.HasHaftpflicht = false;
                tmp.Produkte.Haftpflicht = null;
                // Ohne Haftpflicht keine Kaskoversicherung
                tmp.Produkte.HasKasko = false;
                tmp.Produkte.Kasko = null;
                // Ohne Haftpflicht keine Rechtsschutzversicherung
                tmp.Produkte.HasRechtsschutz = false;
                tmp.Produkte.Rechtsschutz = null;
                // Ohne Haftpflicht keine Insassenversicherung
                tmp.Produkte.HasInsassen = false;
                tmp.Produkte.Insassen = null;
            }

            return true;
        }

        public bool UpdateKfzHaftpflicht(Lkw kfz)
        {
            Lkw tmp = (Lkw)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            // Daten zuweisen
            tmp.Produkte.Haftpflicht.Tarif = kfz.Produkte.Haftpflicht.Tarif;
            tmp.Produkte.Haftpflicht.VersSum = kfz.Produkte.Haftpflicht.VersSum;
            tmp.Produkte.Haftpflicht.HasAssistance = kfz.Produkte.Haftpflicht.HasAssistance;

            return true;
        }

        public bool ToggleKfzHaftpflicht(Motorrad kfz)
        {
            Motorrad tmp = (Motorrad)ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            if (kfz.Produkte.HasHaftpflicht == false)
            {
                tmp.Produkte.HasHaftpflicht = true;
                tmp.Produkte.Haftpflicht = new Haftpflicht();
                tmp.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1; //10 Mio.
            }
            else
            {
                tmp.Produkte.HasHaftpflicht = false;
                tmp.Produkte.Haftpflicht = null;
                // Ohne Haftpflicht keine Kaskoversicherung
                tmp.Produkte.HasKasko = false;
                tmp.Produkte.Kasko = null;
                // Ohne Haftpflicht keine Rechtsschutzversicherung
                tmp.Produkte.HasRechtsschutz = false;
                tmp.Produkte.Rechtsschutz = null;
            }

            return true;
        }

        public bool UpdateKfzHaftpflicht(Motorrad kfz)
        {
            Motorrad tmp = (Motorrad)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            // Daten zuweisen
            tmp.Produkte.Haftpflicht.VersSum = kfz.Produkte.Haftpflicht.VersSum;

            return true;
        }

        public bool ToggleKfzHaftpflicht(Moped kfz)
        {
            Moped tmp = (Moped)ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null)
            {
                return false;
            }

            if (kfz.Produkte.HasHaftpflicht == false)
            {
                tmp.Produkte.HasHaftpflicht = true;
                tmp.Produkte.Haftpflicht = new Haftpflicht();
                tmp.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1; //10 Mio.
            }
            else
            {
                tmp.Produkte.HasHaftpflicht = false;
                tmp.Produkte.Haftpflicht = null;
                // Ohne Haftpflicht keine Rechtsschutzversicherung
                tmp.Produkte.HasRechtsschutz = false;
                tmp.Produkte.Rechtsschutz = null;
            }

            return true;
        }

        public bool UpdateKfzHaftpflicht(Moped kfz)
        {
            Moped tmp = (Moped)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            // Daten zuweisen
            tmp.Produkte.Haftpflicht.VersSum = kfz.Produkte.Haftpflicht.VersSum;

            return true;
        }

        public bool ToggleKfzHaftpflicht(Dreirad kfz)
        {
            Dreirad tmp = (Dreirad)ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null)
            {
                return false;
            }

            if (kfz.Produkte.HasHaftpflicht == false)
            {
                tmp.Produkte.HasHaftpflicht = true;
                tmp.Produkte.Haftpflicht = new Haftpflicht();
                tmp.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1; //10 Mio.
            }
            else
            {
                tmp.Produkte.HasHaftpflicht = false;
                tmp.Produkte.Haftpflicht = null;
                // Ohne Haftpflicht keine Rechtsschutzversicherung
                tmp.Produkte.HasRechtsschutz = false;
                tmp.Produkte.Rechtsschutz = null;
            }

            return true;
        }

        public bool UpdateKfzHaftpflicht(Dreirad kfz)
        {
            Dreirad tmp = (Dreirad)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            // Daten zuweisen
            tmp.Produkte.Haftpflicht.VersSum = kfz.Produkte.Haftpflicht.VersSum;

            return true;
        }

        public bool ToggleKfzHaftpflicht(VierradKl50 kfz)
        {
            VierradKl50 tmp = (VierradKl50)ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null)
            {
                return false;
            }

            if (kfz.Produkte.HasHaftpflicht == false)
            {
                tmp.Produkte.HasHaftpflicht = true;
                tmp.Produkte.Haftpflicht = new Haftpflicht();
                tmp.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1; //10 Mio.
            }
            else
            {
                tmp.Produkte.HasHaftpflicht = false;
                tmp.Produkte.Haftpflicht = null;
                // Ohne Haftpflicht keine Rechtsschutzversicherung
                tmp.Produkte.HasRechtsschutz = false;
                tmp.Produkte.Rechtsschutz = null;
            }

            return true;
        }

        public bool UpdateKfzHaftpflicht(VierradKl50 kfz)
        {
            VierradKl50 tmp = (VierradKl50)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            // Daten zuweisen
            tmp.Produkte.Haftpflicht.VersSum = kfz.Produkte.Haftpflicht.VersSum;

            return true;
        }

        public bool ToggleKfzHaftpflicht(VierradGr50 kfz)
        {
            VierradGr50 tmp = (VierradGr50)ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null)
            {
                return false;
            }

            if (kfz.Produkte.HasHaftpflicht == false)
            {
                tmp.Produkte.HasHaftpflicht = true;
                tmp.Produkte.Haftpflicht = new Haftpflicht_VierradGr50();
                tmp.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1; //10 Mio.
                tmp.Produkte.Haftpflicht.Variante = EnumHaftpflichtVariante.None; //kein Variante
            }
            else
            {
                tmp.Produkte.HasHaftpflicht = false;
                tmp.Produkte.Haftpflicht = null;
                // Ohne Haftpflicht keine Rechtsschutzversicherung
                tmp.Produkte.HasRechtsschutz = false;
                tmp.Produkte.Rechtsschutz = null;
            }

            return true;
        }

        public bool UpdateKfzHaftpflicht(VierradGr50 kfz)
        {
            VierradGr50 tmp = (VierradGr50)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            // Daten zuweisen
            tmp.Produkte.Haftpflicht.Variante = kfz.Produkte.Haftpflicht.Variante;
            tmp.Produkte.Haftpflicht.VersSum = kfz.Produkte.Haftpflicht.VersSum;

            return true;
        }

        public bool ToggleKfzHaftpflicht(Zugmaschine kfz)
        {
            Zugmaschine tmp = (Zugmaschine)ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null)
            {
                return false;
            }

            if (kfz.Produkte.HasHaftpflicht == false)
            {
                tmp.Produkte.HasHaftpflicht = true;
                tmp.Produkte.Haftpflicht = new Haftpflicht();
                tmp.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1; //10 Mio.
            }
            else
            {
                tmp.Produkte.HasHaftpflicht = false;
                tmp.Produkte.Haftpflicht = null;
                // Ohne Haftpflicht keine Rechtsschutzversicherung
                tmp.Produkte.HasRechtsschutz = false;
                tmp.Produkte.Rechtsschutz = null;
            }

            return true;
        }

        public bool UpdateKfzHaftpflicht(Zugmaschine kfz)
        {
            Zugmaschine tmp = (Zugmaschine)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            // Daten zuweisen
            tmp.Produkte.Haftpflicht.VersSum = kfz.Produkte.Haftpflicht.VersSum;

            return true;
        }

        public bool ToggleKfzHaftpflicht(Anhaenger kfz)
        {
            Anhaenger tmp = (Anhaenger)ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null)
            {
                return false;
            }

            if (kfz.Produkte.HasHaftpflicht == false)
            {
                tmp.Produkte.HasHaftpflicht = true;
                tmp.Produkte.Haftpflicht = new Haftpflicht();
                tmp.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1; //10 Mio.
            }
            else
            {
                tmp.Produkte.HasHaftpflicht = false;
                tmp.Produkte.Haftpflicht = null;
                // Ohne Haftpflicht keine Rechtsschutzversicherung
                tmp.Produkte.HasRechtsschutz = false;
                tmp.Produkte.Rechtsschutz = null;
            }

            return true;
        }

        public bool UpdateKfzHaftpflicht(Anhaenger kfz)
        {
            Anhaenger tmp = (Anhaenger)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            // Daten zuweisen
            tmp.Produkte.Haftpflicht.VersSum = kfz.Produkte.Haftpflicht.VersSum;

            return true;
        }

        private void CheckHaftpflicht()
        {

        }

        public bool ToggleKfzKasko(Pkw kfz)
        {
            Pkw tmp = (Pkw)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            if (kfz.Produkte.HasKasko == false)
            {
                tmp.Produkte.HasKasko = true;
                tmp.Produkte.Kasko = new Kasko_Pkw_Lkw();
                tmp.Produkte.Kasko.Tarif = EnumKaskoTarif.Kk1;
                tmp.Produkte.Kasko.Selbstbehalt = EnumKaskoSelbstbehalt.Sb1;
                tmp.Produkte.Kasko.HasFifty = false;
                tmp.Produkte.Kasko.HasGap = false;
                tmp.Produkte.Kasko.HasKnt = false;
            }
            else
            {
                tmp.Produkte.HasKasko = false;
                tmp.Produkte.Kasko = null;
            }

            return true;
        }

        public bool UpdateKfzKasko(Pkw kfz)
        {
            Pkw tmp = (Pkw)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            // Daten zuweisen
            tmp.Produkte.Kasko.Tarif = kfz.Produkte.Kasko.Tarif;
            tmp.Produkte.Kasko.Selbstbehalt = kfz.Produkte.Kasko.Selbstbehalt;
            tmp.Produkte.Kasko.HasFifty = kfz.Produkte.Kasko.HasFifty;
            tmp.Produkte.Kasko.HasGap = kfz.Produkte.Kasko.HasGap;
            tmp.Produkte.Kasko.HasKnt = kfz.Produkte.Kasko.HasKnt;
            tmp.Produkte.Kasko.HasElektropaket = kfz.Produkte.Kasko.HasElektropaket;

            return true;
        }

        public bool ToggleKfzKasko(Lkw kfz)
        {
            Lkw tmp = (Lkw)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            if (kfz.Produkte.HasKasko == false)
            {
                tmp.Produkte.HasKasko = true;
                tmp.Produkte.Kasko = new Kasko_Pkw_Lkw();
                tmp.Produkte.Kasko.Tarif = EnumKaskoTarif.Kk1;
                tmp.Produkte.Kasko.Selbstbehalt = EnumKaskoSelbstbehalt.Sb1;
                tmp.Produkte.Kasko.HasFifty = false;
                tmp.Produkte.Kasko.HasGap = false;
                tmp.Produkte.Kasko.HasKnt = false;
            }
            else
            {
                tmp.Produkte.HasKasko = false;
                tmp.Produkte.Kasko = null;
            }

            return true;
        }

        public bool UpdateKfzKasko(Lkw kfz)
        {
            Lkw tmp = (Lkw)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            // Daten zuweisen
            tmp.Produkte.Kasko.Tarif = kfz.Produkte.Kasko.Tarif;
            tmp.Produkte.Kasko.Selbstbehalt = kfz.Produkte.Kasko.Selbstbehalt;
            tmp.Produkte.Kasko.HasFifty = kfz.Produkte.Kasko.HasFifty;
            tmp.Produkte.Kasko.HasGap = kfz.Produkte.Kasko.HasGap;
            tmp.Produkte.Kasko.HasKnt = kfz.Produkte.Kasko.HasKnt;
            tmp.Produkte.Kasko.HasElektropaket = kfz.Produkte.Kasko.HasElektropaket;

            return true;
        }

        public bool ToggleKfzKasko(Motorrad kfz)
        {
            Motorrad tmp = (Motorrad)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            if (kfz.Produkte.HasKasko == false)
            {
                tmp.Produkte.HasKasko = true;
                tmp.Produkte.Kasko = new Kasko_Motorrad();
                tmp.Produkte.Kasko.Tarif = EnumKaskoTarif.Kk5;
            }
            else
            {
                tmp.Produkte.HasKasko = false;
                tmp.Produkte.Kasko = null;
            }

            return true;
        }

        public bool UpdateKfzKasko(Motorrad kfz)
        {
            Motorrad tmp = (Motorrad)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            // Daten zuweisen
            tmp.Produkte.Kasko.Tarif = kfz.Produkte.Kasko.Tarif;

            return true;
        }

        private void CheckKasko()
        {

        }

        public bool ToggleKfzRechtsschutz(Pkw kfz)
        {
            Pkw tmp = (Pkw)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            if (kfz.Produkte.HasRechtsschutz == false)
            {
                tmp.Produkte.HasRechtsschutz = true;
                tmp.Produkte.Rechtsschutz = new Rechtsschutz();
            }
            else
            {
                tmp.Produkte.HasRechtsschutz = false;
                tmp.Produkte.Rechtsschutz = null;
            }

            return true;
        }

        public bool ToggleKfzRechtsschutz(Lkw kfz)
        {
            Lkw tmp = (Lkw)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            if (kfz.Produkte.HasRechtsschutz == false)
            {
                tmp.Produkte.HasRechtsschutz = true;
                tmp.Produkte.Rechtsschutz = new Rechtsschutz();
            }
            else
            {
                tmp.Produkte.HasRechtsschutz = false;
                tmp.Produkte.Rechtsschutz = null;
            }

            return true;
        }

        public bool ToggleKfzRechtsschutz(Motorrad kfz)
        {
            Motorrad tmp = (Motorrad)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            if (kfz.Produkte.HasRechtsschutz == false)
            {
                tmp.Produkte.HasRechtsschutz = true;
                tmp.Produkte.Rechtsschutz = new Rechtsschutz();
            }
            else
            {
                tmp.Produkte.HasRechtsschutz = false;
                tmp.Produkte.Rechtsschutz = null;
            }

            return true;
        }

        public bool ToggleKfzRechtsschutz(Moped kfz)
        {
            Moped tmp = (Moped)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            if (kfz.Produkte.HasRechtsschutz == false)
            {
                tmp.Produkte.HasRechtsschutz = true;
                tmp.Produkte.Rechtsschutz = new Rechtsschutz();
            }
            else
            {
                tmp.Produkte.HasRechtsschutz = false;
                tmp.Produkte.Rechtsschutz = null;
            }

            return true;
        }

        public bool ToggleKfzRechtsschutz(Dreirad kfz)
        {
            Dreirad tmp = (Dreirad)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            if (kfz.Produkte.HasRechtsschutz == false)
            {
                tmp.Produkte.HasRechtsschutz = true;
                tmp.Produkte.Rechtsschutz = new Rechtsschutz();
            }
            else
            {
                tmp.Produkte.HasRechtsschutz = false;
                tmp.Produkte.Rechtsschutz = null;
            }

            return true;
        }

        public bool ToggleKfzRechtsschutz(VierradKl50 kfz)
        {
            VierradKl50 tmp = (VierradKl50)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            if (kfz.Produkte.HasRechtsschutz == false)
            {
                tmp.Produkte.HasRechtsschutz = true;
                tmp.Produkte.Rechtsschutz = new Rechtsschutz();
            }
            else
            {
                tmp.Produkte.HasRechtsschutz = false;
                tmp.Produkte.Rechtsschutz = null;
            }

            return true;
        }

        public bool ToggleKfzRechtsschutz(VierradGr50 kfz)
        {
            VierradGr50 tmp = (VierradGr50)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            if (kfz.Produkte.HasRechtsschutz == false)
            {
                tmp.Produkte.HasRechtsschutz = true;
                tmp.Produkte.Rechtsschutz = new Rechtsschutz();
            }
            else
            {
                tmp.Produkte.HasRechtsschutz = false;
                tmp.Produkte.Rechtsschutz = null;
            }

            return true;
        }

        public bool ToggleKfzRechtsschutz(Zugmaschine kfz)
        {
            Zugmaschine tmp = (Zugmaschine)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            if (kfz.Produkte.HasRechtsschutz == false)
            {
                tmp.Produkte.HasRechtsschutz = true;
                tmp.Produkte.Rechtsschutz = new Rechtsschutz();
            }
            else
            {
                tmp.Produkte.HasRechtsschutz = false;
                tmp.Produkte.Rechtsschutz = null;
            }

            return true;
        }

        public bool ToggleKfzRechtsschutz(Anhaenger kfz)
        {
            Anhaenger tmp = (Anhaenger)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            if (kfz.Produkte.HasRechtsschutz == false)
            {
                tmp.Produkte.HasRechtsschutz = true;
                tmp.Produkte.Rechtsschutz = new Rechtsschutz();
            }
            else
            {
                tmp.Produkte.HasRechtsschutz = false;
                tmp.Produkte.Rechtsschutz = null;
            }

            return true;
        }

        private void CheckRechtsschutz()
        {

        }

        public bool ToggleKfzInsassen(Pkw kfz)
        {
            Pkw tmp = (Pkw)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            if (kfz.Produkte.HasInsassen == false)
            {
                tmp.Produkte.HasInsassen = true;
                tmp.Produkte.Insassen = new Insassen();
            }
            else
            {
                tmp.Produkte.HasInsassen = false;
                tmp.Produkte.Insassen = null;
            }

            return true;
        }

        public bool ToggleKfzInsassen(Lkw kfz)
        {
            Lkw tmp = (Lkw)this.ListKfz.Find(k => k.Id == kfz.Id);

            if (tmp == null) // (wenn Session abläuft)
            {
                return false;
            }

            if (kfz.Produkte.HasInsassen == false)
            {
                tmp.Produkte.HasInsassen = true;
                tmp.Produkte.Insassen = new Insassen();
            }
            else
            {
                tmp.Produkte.HasInsassen = false;
                tmp.Produkte.Insassen = null;
            }

            return true;
        }

        public void CheckInsassen()
        {

        }
        #endregion

        #region Methoden Allgemein
        public int CalcAlter(DateTime start)
        {
            int years = DateTime.Now.Year - start.Year;
            start = start.AddYears(years);
            if (DateTime.Now.CompareTo(start) < 0) { years--; }
            return years;
        }

        public int CalcAlter(DateTime start, DateTime versicherungsbeginn)
        {
            int years = versicherungsbeginn.Year - start.Year;
            start = start.AddYears(years);
            if (versicherungsbeginn.CompareTo(start) < 0) { years--; }
            return years;
        }

        public int CalcAlterVerstech(DateTime start)
        {
            return DateTime.Now.Year - start.Year;
        }

        public int CalcAlterVerstech(DateTime start, DateTime versicherungsbeginn)
        {
            return versicherungsbeginn.Year - start.Year;
        }
        #endregion
    }

    // https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/enum
    // Usually it is best to define an enum directly within a namespace so that all classes in the namespace can access it with equal convenience.
    #region Enums
    // Vertrag gesamt
    public enum EnumPlattform
    {
        None,
        tis,
        muki
    }

    public enum EnumKunde
    {
        None,
        privat,
        gewerbe
    }

    public enum EnumModus
    {
        None,
        rechnung,
        angebot,
        antrag
    }

    public enum EnumAnrede
    {
        None,
        Herr,
        Frau,
        Familie,
        Firma
    };

    public enum EnumAnredePerson
    {
        None,
        Herr,
        Frau,
    };

    public enum EnumGeschlecht
    {
        None,
        maennlich,
        weiblich
    };

    public enum EnumArtBeschaeftigung
    {
        None,
        selbstaendig,
        unselbstaendig
    }

    public enum EnumFamilienstand
    {
        None,
        ledig,
        verheiratet,
        geschieden,
        verwitwet,
        lebensgemeinschaft
    };

    public enum EnumSvAnstalt
    {
        None,
        GKK,
        KFA,
        GSKK_SL,
        GSKK_GL,
        BVA,
        VAEB,
        SVB,
        BKK,
        KFG
    }

    public enum EnumBezugsberechtigt
    {
        None,
        Ueberbringer,
        Erben,
        Person
    }

    // Kfz
    public enum EnumEingabeArt
    {
        None,
        Natcode,
        MarkeModell,
        Manuell
    }

    public enum EnumVierradSubtyp
    {
        None,
        Atv_Quad,
        Mopedauto
    }

    public enum EnumAntrieb
    {
        None,
        Benzin,
        Diesel,
        Hybrid,
        Elektro
    }

    public enum EnumHaftpflichtTarif
    {
        None,
        Hp1, //Hp Solo
        Hp2  //Hp Unbegrenzter Freischaden
    }

    public enum EnumHaftpflichtVariante
    {
        None,
        A, //kein Anspruch auf Ersatzfahrzeug
        B  //Anspruch auf Ersatzfahrzeug
    }

    public enum EnumHaftpflichtVersSum
    {
        None,
        Vs1, //10 Mio.
        Vs2, //15 Mio.
        Vs3  //20 Mio.
    }

    public enum EnumKaskoTarif
    {
        None,
        Kk1, //Teilkasko Standard
        Kk2, //Teilkasko Premium
        Kk3, //Vollkasko Standard
        Kk4, //Vollkasko Premium
        Kk5, //Motorrad Teilkasko
        Kk6  //Motorrad Vollkasko
    }

    public enum EnumKaskoSelbstbehalt
    {
        None,
        Sb1, // 320
        Sb2, // 480
        Sb3  // 880
    }
    #endregion
}
