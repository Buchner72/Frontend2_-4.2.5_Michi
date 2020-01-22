using System;
using System.IO;
using System.Xml;
using System.Xml.Serialization;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Net.Http;
using System.Data.SqlClient;
using System.Data;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Frontend.Models;
using Vertrag;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Frontend.Controllers
{
    [Route("api/[controller]")]
    public class VertragController : Controller
    {
        public VertragContainer VertragContainer { get; set; }

        public JsonSerializerSettings jsonSettings = new JsonSerializerSettings() { TypeNameHandling = TypeNameHandling.Objects };

        #region ### VERTRAG ###
        // Reset Vertrag
        [HttpGet("[action]")]
        public bool Reset()
        {
            // Session start
            this.StartSession();

            VertragContainer = new VertragContainer();

            // Session end
            this.EndSession();

            return true;
        }

        // Load Vertrag
        [HttpPost("[action]")]
        public void Load(IFormFile file)
        {
            // XmlInclude
            Type[] xmlIncludes = new Type[]
            {
                // Vn
                typeof(Vn),
                // Vp-Fp
                typeof(Vp),
                // Kfz
                typeof(Pkw),
                typeof(Lkw),
                typeof(Motorrad),
                typeof(Moped),
                typeof(Dreirad),
                typeof(VierradKl50),
                typeof(VierradGr50),
                typeof(Zugmaschine),
                typeof(Anhaenger)
            };
            XmlSerializer xmlSerializer;
            MemoryStream memoryStream;

            // Session start
            this.StartSession();

            xmlSerializer = new XmlSerializer(typeof(VertragContainer), xmlIncludes);
            memoryStream = new MemoryStream();

            file.CopyTo(memoryStream);
            memoryStream.Position = 0;

            VertragContainer = (VertragContainer)xmlSerializer.Deserialize(memoryStream);

            memoryStream.Flush();
            memoryStream.Close();

            // Session end
            this.EndSession();
        }

        // Save Vertrag
        [HttpGet("[action]")]
        public ActionResult Save()
        {
            // XmlInclude
            Type[] xmlIncludes = new Type[]
            {
                // Kfz
                typeof(Pkw),
                typeof(Lkw),
                typeof(Motorrad),
                typeof(Moped),
                typeof(Dreirad),
                typeof(VierradKl50),
                typeof(VierradGr50),
                typeof(Zugmaschine),
                typeof(Anhaenger)
            };
            XmlSerializer xmlSerializer;
            MemoryStream memoryStream;

            // Session start
            this.StartSession();

            xmlSerializer = new XmlSerializer(typeof(VertragContainer), xmlIncludes);
            memoryStream = new MemoryStream();

            xmlSerializer.Serialize(memoryStream, VertragContainer);
            memoryStream.Position = 0;

            byte[] byteStream = memoryStream.GetBuffer();

            memoryStream.Flush();
            memoryStream.Close();

            // Session end
            this.EndSession();

            return File(byteStream, "application/octet-stream");
        }
        #endregion

        #region ### PLATTFORM ###
        // mögliche Werte: muki/tis
        [HttpGet("[action]")]
        public String GetPlattform()
        {
            string plattform = "none";
            // Session start
            this.StartSession();

            switch (VertragContainer.Vertrag.Plattform)
            {
                case EnumPlattform.tis:
                    plattform = "tis";
                    break;
                case EnumPlattform.muki:
                    plattform = "muki";
                    break;
                default:
                    plattform = "muki";
                    break;
            }

            // Session end
            this.EndSession();

            return plattform;
        }
        #endregion

        #region ### MODUS ###
        // mögliche Werte: angebot/antrag
        [HttpGet("[action]/{modus?}")]
        public String SetModus(string modus)
        {
            // Session start
            this.StartSession();

            switch (modus)
            {
                case "angebot":
                    VertragContainer.Vertrag.Modus = EnumModus.angebot;
                    break;
                case "antrag":
                    VertragContainer.Vertrag.Modus = EnumModus.antrag;
                    break;
                default:
                    VertragContainer.Vertrag.Modus = EnumModus.angebot;
                    break;
            }

            // Session end
            this.EndSession();

            return modus;
        }

        [HttpGet("[action]")]
        public String GetModus()
        {
            string modus = "none";
            // Session start
            this.StartSession();

            switch (VertragContainer.Vertrag.Modus)
            {
                //case EnumModus.rechnung:
                //    modus = "rechnung";
                //    break;
                case EnumModus.angebot:
                    modus = "angebot";
                    break;
                case EnumModus.antrag:
                    modus = "antrag";
                    break;
                default:
                    modus = "angebot";
                    break;
            }

            // Session end
            this.EndSession();

            return modus;
        }
        #endregion

        #region ### Kunde ###
        // mögliche Werte: privat/gewerbe,
        [HttpGet("[action]/{kunde?}")]
        public String SetKunde(string kunde)
        {
            // Session start
            this.StartSession();

            switch (kunde)
            {
                case "privat":
                    VertragContainer.Vertrag.Kunde = EnumKunde.privat;
                    break;
                case "gewerbe":
                    VertragContainer.Vertrag.Kunde = EnumKunde.gewerbe;
                    break;
                default:
                    VertragContainer.Vertrag.Kunde = EnumKunde.privat;
                    break;
            }

            // Session end
            this.EndSession();

            return kunde;
        }

        [HttpGet("[action]")]
        public String GetKunde()
        {
            string kunde = "none";
            // Session start
            this.StartSession();

            switch (VertragContainer.Vertrag.Kunde)
            {
                case EnumKunde.privat:
                    kunde = "privat";
                    break;
                case EnumKunde.gewerbe:
                    kunde = "gewerbe";
                    break;
                default:
                    kunde = "privat";
                    break;
            }

            // Session end
            this.EndSession();

            return kunde;
        }
        #endregion

        #region  ### Sparten ###
        // Fp
        [HttpGet("[action]/{value?}")]
        public Boolean ToggleEnableablePFp(bool value)
        {
            // Session start
            this.StartSession();

            if (value)
            {
                VertragContainer.Vertrag.IsEnabledPFp = true;
            }
            else
            {
                VertragContainer.Vertrag.IsEnabledPFp = false;
            }

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsEnabledPFp;
        }

        [HttpGet("[action]")]
        public Boolean GetEnableablePFp()
        {
            // Session start
            this.StartSession();

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsEnabledPFp;
        }

        // Kv
        [HttpGet("[action]/{value?}")]
        public Boolean ToggleEnableablePKv(bool value)
        {
            // Session start
            this.StartSession();

            if (value)
            {
                VertragContainer.Vertrag.IsEnabledPKv = true;
            }
            else
            {
                VertragContainer.Vertrag.IsEnabledPKv = false;
            }

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsEnabledPKv;
        }

        [HttpGet("[action]")]
        public Boolean GetEnableablePKv()
        {
            // Session start
            this.StartSession();

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsEnabledPKv;
        }

        // Uv
        [HttpGet("[action]/{value?}")]
        public Boolean ToggleEnableablePUv(bool value)
        {
            // Session start
            this.StartSession();

            if (value)
            {
                VertragContainer.Vertrag.IsEnabledPUv = true;
            }
            else
            {
                VertragContainer.Vertrag.IsEnabledPUv = false;
            }

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsEnabledPUv;
        }

        [HttpGet("[action]")]
        public Boolean GetEnableablePUv()
        {
            // Session start
            this.StartSession();

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsEnabledPUv;
        }

        // Uvk
        [HttpGet("[action]/{value?}")]
        public Boolean ToggleEnableablePUvk(bool value)
        {
            // Session start
            this.StartSession();

            if (value)
            {
                VertragContainer.Vertrag.IsEnabledPUvk = true;
            }
            else
            {
                VertragContainer.Vertrag.IsEnabledPUvk = false;
            }

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsEnabledPUvk;
        }

        [HttpGet("[action]")]
        public Boolean GetEnableablePUvk()
        {
            // Session start
            this.StartSession();

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsEnabledPUvk;
        }

        // Kfz
        [HttpGet("[action]/{value?}")]
        public Boolean ToggleEnableablePKfz(bool value)
        {
            // Session start
            this.StartSession();

            if (value)
            {
                VertragContainer.Vertrag.IsEnabledPKfz = true;
            }
            else
            {
                VertragContainer.Vertrag.IsEnabledPKfz = false;
                // Bei Deaktivierung der Sparte alle Kfzpositionen löschen
                VertragContainer.Vertrag.ListKfz = new List<Kfz>();
            }

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsEnabledPKfz;
        }

        [HttpGet("[action]")]
        public Boolean GetEnableablePKfz()
        {
            // Session start
            this.StartSession();

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsEnabledPKfz;
        }

        // He
        [HttpGet("[action]/{value?}")]
        public Boolean ToggleEnableablePHe(bool value)
        {
            // Session start
            this.StartSession();

            if (value)
            {
                VertragContainer.Vertrag.IsEnabledPHe = true;
            }
            else
            {
                VertragContainer.Vertrag.IsEnabledPHe = false;
            }

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsEnabledPHe;
        }

        [HttpGet("[action]")]
        public Boolean GetEnableablePHe()
        {
            // Session start
            this.StartSession();

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsEnabledPHe;
        }

        // Rs
        [HttpGet("[action]/{value?}")]
        public Boolean ToggleEnableablePRs(bool value)
        {
            // Session start
            this.StartSession();

            if (value)
            {
                VertragContainer.Vertrag.IsEnabledPRs = true;
            }
            else
            {
                VertragContainer.Vertrag.IsEnabledPRs = false;
            }

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsEnabledPRs;
        }

        [HttpGet("[action]")]
        public Boolean GetEnableablePRs()
        {
            // Session start
            this.StartSession();

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsEnabledPRs;
        }
        #endregion

        #region ### Panel Collapsibility ###
        // Vn
        [HttpGet("[action]")]
        public Boolean GetCollapseableVn()
        {
            // Session start
            this.StartSession();

            return VertragContainer.Vertrag.IsCollapsedVn;
        }

        [HttpGet("[action]/{value?}")]
        public Boolean ToggleCollapseableVn(bool value)
        {
            // Session start
            this.StartSession();

            VertragContainer.Vertrag.IsCollapsedVn = value;

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsCollapsedVn;
        }

        // Fp
        [HttpGet("[action]")]
        public Boolean GetCollapseablePFp()
        {
            // Session start
            this.StartSession();

            return VertragContainer.Vertrag.IsCollapsedPFp;
        }

        [HttpGet("[action]/{value?}")]
        public Boolean ToggleCollapseablePFp(bool value)
        {
            // Session start
            this.StartSession();

            VertragContainer.Vertrag.IsCollapsedPFp = value;

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsCollapsedPFp;
        }

        // Kv
        [HttpGet("[action]")]
        public Boolean GetCollapseablePKv()
        {
            // Session start
            this.StartSession();

            return VertragContainer.Vertrag.IsCollapsedPKv;
        }

        [HttpGet("[action]/{value?}")]
        public Boolean ToggleCollapseablePKv(bool value)
        {
            // Session start
            this.StartSession();

            VertragContainer.Vertrag.IsCollapsedPKv = value;

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsCollapsedPKv;
        }

        // Uv
        [HttpGet("[action]")]
        public Boolean GetCollapseablePUv()
        {
            // Session start
            this.StartSession();

            return VertragContainer.Vertrag.IsCollapsedPUv;
        }

        [HttpGet("[action]/{value?}")]
        public Boolean ToggleCollapseablePUv(bool value)
        {
            // Session start
            this.StartSession();

            VertragContainer.Vertrag.IsCollapsedPUv = value;

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsCollapsedPUv;
        }

        // Uvk
        [HttpGet("[action]")]
        public Boolean GetCollapseablePUvk()
        {
            // Session start
            this.StartSession();

            return VertragContainer.Vertrag.IsCollapsedPUvk;
        }

        [HttpGet("[action]/{value?}")]
        public Boolean ToggleCollapseablePUvk(bool value)
        {
            // Session start
            this.StartSession();

            VertragContainer.Vertrag.IsCollapsedPUvk = value;

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsCollapsedPUvk;
        }

        // Kfz
        [HttpGet("[action]")]
        public Boolean GetCollapseablePKfz()
        {
            // Session start
            this.StartSession();

            return VertragContainer.Vertrag.IsCollapsedPKfz;
        }

        [HttpGet("[action]/{value?}")]
        public Boolean ToggleCollapseablePKfz(bool value)
        {
            // Session start
            this.StartSession();

            VertragContainer.Vertrag.IsCollapsedPKfz = value;

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsCollapsedPKfz;
        }

        // He
        [HttpGet("[action]")]
        public Boolean GetCollapseablePHe()
        {
            // Session start
            this.StartSession();

            return VertragContainer.Vertrag.IsCollapsedPHe;
        }

        [HttpGet("[action]/{value?}")]
        public Boolean ToggleCollapseablePHe(bool value)
        {
            // Session start
            this.StartSession();

            VertragContainer.Vertrag.IsCollapsedPHe = value;

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsCollapsedPHe;
        }

        // Rs
        [HttpGet("[action]")]
        public Boolean GetCollapseablePRs()
        {
            // Session start
            this.StartSession();

            return VertragContainer.Vertrag.IsCollapsedPHe;
        }

        [HttpGet("[action]/{value?}")]
        public Boolean ToggledCollapseablePRs(bool value)
        {
            // Session start
            this.StartSession();

            VertragContainer.Vertrag.IsCollapsedPRs = value;

            // Session end
            this.EndSession();

            return VertragContainer.Vertrag.IsCollapsedPRs;
        }
        #endregion

        #region ### VN ###
        [HttpGet("[action]")]
        public ActionResult GetVn()
        {
            // Session start
            this.StartSession();

            // Session end
            this.EndSession();

            return Json(VertragContainer.Vertrag.Vn);
        }

        [HttpGet("[action]")]
        public ActionResult NewVn()
        {
            // Session start
            this.StartSession();

            return Json(new Vn());
        }

        [HttpPost("[action]")]
        public ActionResult AddVn([FromBody] VnViewModel model)
        {
            Vn vn;

            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            model.id = 1;

            // Vn aufbereiten
            if (ModelState.IsValid)
            {
                vn = new Vn { };
                vn.Id = model.id;
                vn.Kundennr = model.kundennr;
                switch (model.anrede)
                {
                    case "1":
                        vn.Anrede = EnumAnrede.Herr;
                        break;
                    case "2":
                        vn.Anrede = EnumAnrede.Frau;
                        break;
                    case "3":
                        vn.Anrede = EnumAnrede.Familie;
                        break;
                    case "4":
                        vn.Anrede = EnumAnrede.Firma;
                        break;
                    default:
                        vn.Anrede = EnumAnrede.None;
                        break;
                }
                vn.Titel = model.titel;
                vn.Vorname = model.vorname;
                vn.Nachname = model.nachname;
                vn.Geburtsdatum = Convert.ToDateTime(model.geburtsdatum);
                vn.Alter = VertragContainer.Vertrag.CalcAlter(Convert.ToDateTime(model.geburtsdatum));
                vn.AlterVerstech = VertragContainer.Vertrag.CalcAlterVerstech(Convert.ToDateTime(model.geburtsdatum));
                vn.Adresse.StrasseNr = model.adresse.strasseNr;
                vn.Adresse.Plz = model.adresse.plz;
                vn.Adresse.Ort = model.adresse.ort;
                switch (model.familienstand)
                {
                    case 1:
                        vn.Familienstand = EnumFamilienstand.ledig;
                        break;
                    case 2:
                        vn.Familienstand = EnumFamilienstand.verheiratet;
                        break;
                    case 3:
                        vn.Familienstand = EnumFamilienstand.geschieden;
                        break;
                    case 4:
                        vn.Familienstand = EnumFamilienstand.verwitwet;
                        break;
                    case 5:
                        vn.Familienstand = EnumFamilienstand.lebensgemeinschaft;
                        break;
                    default:
                        vn.Familienstand = EnumFamilienstand.None;
                        break;
                }
                switch (model.svAnstalt)
                {
                    case 1:
                        vn.SvAnstalt = EnumSvAnstalt.GKK;
                        break;
                    case 2:
                        vn.SvAnstalt = EnumSvAnstalt.KFA;
                        break;
                    case 3:
                        vn.SvAnstalt = EnumSvAnstalt.GSKK_SL;
                        break;
                    case 4:
                        vn.SvAnstalt = EnumSvAnstalt.GSKK_GL;
                        break;
                    case 5:
                        vn.SvAnstalt = EnumSvAnstalt.BVA;
                        break;
                    case 6:
                        vn.SvAnstalt = EnumSvAnstalt.VAEB;
                        break;
                    case 7:
                        vn.SvAnstalt = EnumSvAnstalt.SVB;
                        break;
                    case 8:
                        vn.SvAnstalt = EnumSvAnstalt.BKK;
                        break;
                    case 9:
                        vn.SvAnstalt = EnumSvAnstalt.KFG;
                        break;
                    default:
                        vn.SvAnstalt = EnumSvAnstalt.None;
                        break;
                }
                vn.SvNr = model.svNr;
                vn.Hausarzt = model.hausarzt;
                vn.Kontakt.Tel = model.kontakt.tel;
                vn.Kontakt.Mobil = model.kontakt.mobil;
                vn.Kontakt.Email = model.kontakt.email;
                switch (model.artBeschaeftigung)
                {
                    case 1:
                        vn.ArtBeschaeftigung = EnumArtBeschaeftigung.selbstaendig;
                        break;
                    case 2:
                        vn.ArtBeschaeftigung = EnumArtBeschaeftigung.unselbstaendig;
                        break;
                    default:
                        vn.ArtBeschaeftigung = EnumArtBeschaeftigung.None;
                        break;
                }
                vn.Beruf = model.beruf;
                vn.BesondererArbeitgeber = model.besondererArbeitgeber;
                vn.BesondererBeruf = model.besondererBeruf;
                vn.BesondererDienstort = model.besondererDienstort;
                vn.Nationalitaet = model.nationalitaet;
                vn.IsEuBuerger = model.isEuBuerger;
                vn.HasProbefuehrerschein = model.hasProbefuehrerschein;
                vn.FuehrerscheinSeitVon = model.fuehrerscheinSeitVon;
                vn.FuehrerscheinGruppe = model.fuehrerscheinGruppe;
                vn.IsVnKontoinhaber = model.isVnKontoinhaber;
                vn.Bankdaten.Kontoinhaber = model.bankdaten.kontoinhaber;
                vn.Bankdaten.StrasseNr = model.bankdaten.strasseNr;
                vn.Bankdaten.Plz = model.bankdaten.plz;
                vn.Bankdaten.Ort = model.bankdaten.ort;
                vn.Bankdaten.IBAN = model.bankdaten.iban;
                vn.Bankdaten.BIC = model.bankdaten.bic;
                switch (model.isBezugsberechtigt)
                {
                    case 1:
                        vn.IsBezugsberechtigt = EnumBezugsberechtigt.Ueberbringer;
                        break;
                    case 2:
                        vn.IsBezugsberechtigt = EnumBezugsberechtigt.Erben;
                        break;
                    case 3:
                        vn.IsBezugsberechtigt = EnumBezugsberechtigt.Person;
                        break;
                    default:
                        vn.IsBezugsberechtigt = EnumBezugsberechtigt.None;
                        break;
                }
                vn.Bezugsberechtigt.Vorname = model.bezugsberechtigt.vorname;
                vn.Bezugsberechtigt.Nachname = model.bezugsberechtigt.nachname;
                vn.Bezugsberechtigt.Geburtsdatum = model.bezugsberechtigt.geburtsdatum;
                vn.Bezugsberechtigt.WeiterePerson = model.bezugsberechtigt.weiterePerson;
                vn.HasWeitereVn = model.hasWeitereVn;
                switch (model.weitereVn.anrede)
                {
                    case 1:
                        vn.WeitereVn.Anrede = EnumAnredePerson.Herr;
                        break;
                    case 2:
                        vn.WeitereVn.Anrede = EnumAnredePerson.Frau;
                        break;
                    default:
                        vn.WeitereVn.Anrede = EnumAnredePerson.None;
                        break;
                }
                vn.WeitereVn.Titel = model.weitereVn.titel;
                vn.WeitereVn.Vorname = model.weitereVn.vorname;
                vn.WeitereVn.Nachname = model.weitereVn.nachname;
                vn.WeitereVn.Geburtsdatum = model.weitereVn.geburtsdatum;
                vn.WeitereVn.Adresse.StrasseNr = model.weitereVn.adresse.strasseNr;
                vn.WeitereVn.Adresse.Plz = model.weitereVn.adresse.plz;
                vn.WeitereVn.Adresse.Ort = model.weitereVn.adresse.ort;
                vn.WeitereVn.ArtBeschaeftigung = model.weitereVn.artBeschaeftigung;
                vn.WeitereVn.Beruf = model.weitereVn.beruf;
                vn.HasAbweichendeInkassoAdr = model.hasAbweichendeInkassoAdr;
                switch (model.inkassoAdr.anrede)
                {
                    case 1:
                        vn.InkassoAdr.Anrede = EnumAnredePerson.Herr;
                        break;
                    case 2:
                        vn.InkassoAdr.Anrede = EnumAnredePerson.Frau;
                        break;
                    default:
                        vn.InkassoAdr.Anrede = EnumAnredePerson.None;
                        break;
                }
                vn.InkassoAdr.Titel = model.inkassoAdr.titel;
                vn.InkassoAdr.Vorname = model.inkassoAdr.vorname;
                vn.InkassoAdr.Nachname = model.inkassoAdr.nachname;
                vn.InkassoAdr.Adresse.StrasseNr = model.inkassoAdr.adresse.strasseNr;
                vn.InkassoAdr.Adresse.Plz = model.inkassoAdr.adresse.plz;
                vn.InkassoAdr.Adresse.Ort = model.inkassoAdr.adresse.ort;

                VertragContainer.Vertrag.AddVn(vn);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.Vn);
            }

            return Json(new EmptyResult());
        }

        [HttpPut("[action]")]
        public ActionResult UpdateVn([FromBody] VnViewModel model)
        {
            Vn vn;

            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            // Vn aufbereiten
            if (ModelState.IsValid)
            {
                vn = new Vn { };
                vn.Id = model.id;
                vn.Kundennr = model.kundennr;
                switch (model.anrede)
                {
                    case "1":
                        vn.Anrede = EnumAnrede.Herr;
                        break;
                    case "2":
                        vn.Anrede = EnumAnrede.Frau;
                        break;
                    case "3":
                        vn.Anrede = EnumAnrede.Familie;
                        break;
                    case "4":
                        vn.Anrede = EnumAnrede.Firma;
                        break;
                    default:
                        vn.Anrede = EnumAnrede.None;
                        break;
                }
                vn.Titel = model.titel;
                vn.Vorname = model.vorname;
                vn.Nachname = model.nachname;
                vn.Geburtsdatum = model.geburtsdatum;
                vn.Alter = VertragContainer.Vertrag.CalcAlter(Convert.ToDateTime(model.geburtsdatum));
                vn.AlterVerstech = VertragContainer.Vertrag.CalcAlterVerstech(Convert.ToDateTime(model.geburtsdatum));
                vn.Adresse.StrasseNr = model.adresse.strasseNr;
                vn.Adresse.Plz = model.adresse.plz;
                vn.Adresse.Ort = model.adresse.ort;
                switch (model.familienstand)
                {
                    case 1:
                        vn.Familienstand = EnumFamilienstand.ledig;
                        break;
                    case 2:
                        vn.Familienstand = EnumFamilienstand.verheiratet;
                        break;
                    case 3:
                        vn.Familienstand = EnumFamilienstand.geschieden;
                        break;
                    case 4:
                        vn.Familienstand = EnumFamilienstand.verwitwet;
                        break;
                    case 5:
                        vn.Familienstand = EnumFamilienstand.lebensgemeinschaft;
                        break;
                    default:
                        vn.Familienstand = EnumFamilienstand.None;
                        break;
                }
                switch (model.svAnstalt)
                {
                    case 1:
                        vn.SvAnstalt = EnumSvAnstalt.GKK;
                        break;
                    case 2:
                        vn.SvAnstalt = EnumSvAnstalt.KFA;
                        break;
                    case 3:
                        vn.SvAnstalt = EnumSvAnstalt.GSKK_SL;
                        break;
                    case 4:
                        vn.SvAnstalt = EnumSvAnstalt.GSKK_GL;
                        break;
                    case 5:
                        vn.SvAnstalt = EnumSvAnstalt.BVA;
                        break;
                    case 6:
                        vn.SvAnstalt = EnumSvAnstalt.VAEB;
                        break;
                    case 7:
                        vn.SvAnstalt = EnumSvAnstalt.SVB;
                        break;
                    case 8:
                        vn.SvAnstalt = EnumSvAnstalt.BKK;
                        break;
                    case 9:
                        vn.SvAnstalt = EnumSvAnstalt.KFG;
                        break;
                    default:
                        vn.SvAnstalt = EnumSvAnstalt.None;
                        break;
                }
                vn.SvNr = model.svNr;
                vn.Hausarzt = model.hausarzt;
                vn.Kontakt.Tel = model.kontakt.tel;
                vn.Kontakt.Mobil = model.kontakt.mobil;
                vn.Kontakt.Email = model.kontakt.email;
                switch (model.artBeschaeftigung)
                {
                    case 1:
                        vn.ArtBeschaeftigung = EnumArtBeschaeftigung.selbstaendig;
                        break;
                    case 2:
                        vn.ArtBeschaeftigung = EnumArtBeschaeftigung.unselbstaendig;
                        break;
                    default:
                        vn.ArtBeschaeftigung = EnumArtBeschaeftigung.None;
                        break;
                }
                vn.Beruf = model.beruf;
                vn.BesondererArbeitgeber = model.besondererArbeitgeber;
                vn.BesondererBeruf = model.besondererBeruf;
                vn.BesondererDienstort = model.besondererDienstort;
                vn.Nationalitaet = model.nationalitaet;
                vn.IsEuBuerger = model.isEuBuerger;
                vn.HasProbefuehrerschein = model.hasProbefuehrerschein;
                vn.FuehrerscheinSeitVon = model.fuehrerscheinSeitVon;
                vn.FuehrerscheinGruppe = model.fuehrerscheinGruppe;
                vn.IsVnKontoinhaber = model.isVnKontoinhaber;
                vn.Bankdaten.Kontoinhaber = model.bankdaten.kontoinhaber;
                vn.Bankdaten.StrasseNr = model.bankdaten.strasseNr;
                vn.Bankdaten.Plz = model.bankdaten.plz;
                vn.Bankdaten.Ort = model.bankdaten.ort;
                vn.Bankdaten.IBAN = model.bankdaten.iban;
                vn.Bankdaten.BIC = model.bankdaten.bic;
                switch (model.isBezugsberechtigt)
                {
                    case 1:
                        vn.IsBezugsberechtigt = EnumBezugsberechtigt.Ueberbringer;
                        break;
                    case 2:
                        vn.IsBezugsberechtigt = EnumBezugsberechtigt.Erben;
                        break;
                    case 3:
                        vn.IsBezugsberechtigt = EnumBezugsberechtigt.Person;
                        break;
                    default:
                        vn.IsBezugsberechtigt = EnumBezugsberechtigt.None;
                        break;
                }
                vn.Bezugsberechtigt.Vorname = model.bezugsberechtigt.vorname;
                vn.Bezugsberechtigt.Nachname = model.bezugsberechtigt.nachname;
                vn.Bezugsberechtigt.Geburtsdatum = model.bezugsberechtigt.geburtsdatum;
                vn.Bezugsberechtigt.WeiterePerson = model.bezugsberechtigt.weiterePerson;
                vn.HasWeitereVn = model.hasWeitereVn;
                switch (model.weitereVn.anrede)
                {
                    case 1:
                        vn.WeitereVn.Anrede = EnumAnredePerson.Herr;
                        break;
                    case 2:
                        vn.WeitereVn.Anrede = EnumAnredePerson.Frau;
                        break;
                    default:
                        vn.WeitereVn.Anrede = EnumAnredePerson.None;
                        break;
                }
                vn.WeitereVn.Titel = model.weitereVn.titel;
                vn.WeitereVn.Vorname = model.weitereVn.vorname;
                vn.WeitereVn.Nachname = model.weitereVn.nachname;
                vn.WeitereVn.Geburtsdatum = model.weitereVn.geburtsdatum;
                vn.WeitereVn.Adresse.StrasseNr = model.weitereVn.adresse.strasseNr;
                vn.WeitereVn.Adresse.Plz = model.weitereVn.adresse.plz;
                vn.WeitereVn.Adresse.Ort = model.weitereVn.adresse.ort;
                vn.WeitereVn.ArtBeschaeftigung = model.weitereVn.artBeschaeftigung;
                vn.WeitereVn.Beruf = model.weitereVn.beruf;
                vn.HasAbweichendeInkassoAdr = model.hasAbweichendeInkassoAdr;
                switch (model.inkassoAdr.anrede)
                {
                    case 1:
                        vn.InkassoAdr.Anrede = EnumAnredePerson.Herr;
                        break;
                    case 2:
                        vn.InkassoAdr.Anrede = EnumAnredePerson.Frau;
                        break;
                    default:
                        vn.InkassoAdr.Anrede = EnumAnredePerson.None;
                        break;
                }
                vn.InkassoAdr.Titel = model.inkassoAdr.titel;
                vn.InkassoAdr.Vorname = model.inkassoAdr.vorname;
                vn.InkassoAdr.Nachname = model.inkassoAdr.nachname;
                vn.InkassoAdr.Adresse.StrasseNr = model.inkassoAdr.adresse.strasseNr;
                vn.InkassoAdr.Adresse.Plz = model.inkassoAdr.adresse.plz;
                vn.InkassoAdr.Adresse.Ort = model.inkassoAdr.adresse.ort;

                VertragContainer.Vertrag.UpdateVn(vn);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.Vn);
            }

            return Json(new EmptyResult());
        }

        [HttpDelete("[action]")]
        public ActionResult DeleteVn()
        {
            // Session start
            this.StartSession();

            VertragContainer.Vertrag.DeleteVn();

            // Session end
            this.EndSession();

            //return Json(null);
            return Json(VertragContainer.Vertrag.Vn);
        }
        #endregion

        #region ### VP ###
        // ### Vp (Versicherte Person)
        [HttpGet("[action]")]
        public ActionResult QueryVp()
        {
            // Session start
            this.StartSession();

            // Session end
            this.EndSession();

            return Json(VertragContainer.Vertrag.ListVp);
        }

        [HttpGet("[action]")]
        public ActionResult NewVp()
        {
            // Session start
            this.StartSession();

            Vp vp = new Vp();

            if (vp != null)
            {
                return Json(vp);
            }
            return Json(new EmptyResult());
        }

        [HttpPost("[action]")]
        public ActionResult AddVp([FromBody] VpViewModel model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            // neue Id suchen
            foreach (Vp vp in VertragContainer.Vertrag.ListVp)
            {
                if (model.id <= vp.Id)
                {
                    model.id = vp.Id;
                }
            }
            model.id = model.id + 1;

            if (ModelState.IsValid)
            {
                var vp = new Vp
                {
                    Id = model.id
                };
                switch (model.anrede)
                {
                    case "1":
                        vp.Anrede = EnumAnrede.Herr;
                        break;
                    case "2":
                        vp.Anrede = EnumAnrede.Frau;
                        break;
                    case "3":
                        vp.Anrede = EnumAnrede.Familie;
                        break;
                    case "4":
                        vp.Anrede = EnumAnrede.Firma;
                        break;
                    default:
                        vp.Anrede = EnumAnrede.None;
                        break;
                }
                vp.Titel = model.titel;
                vp.Vorname = model.vorname;
                vp.Nachname = model.nachname;
                vp.Geburtsdatum = Convert.ToDateTime(model.geburtsdatum);
                vp.Adresse.StrasseNr = model.adresse.strasseNr;
                vp.Adresse.Plz = model.adresse.plz;
                vp.Adresse.Ort = model.adresse.ort;
                switch (model.familienstand)
                {
                    case 1:
                        vp.Familienstand = EnumFamilienstand.ledig;
                        break;
                    case 2:
                        vp.Familienstand = EnumFamilienstand.verheiratet;
                        break;
                    case 3:
                        vp.Familienstand = EnumFamilienstand.geschieden;
                        break;
                    case 4:
                        vp.Familienstand = EnumFamilienstand.verwitwet;
                        break;
                    case 5:
                        vp.Familienstand = EnumFamilienstand.lebensgemeinschaft;
                        break;
                    default:
                        vp.Familienstand = EnumFamilienstand.None;
                        break;
                }
                vp.Kontakt.Tel = model.kontakt.tel;
                vp.Kontakt.Mobil = model.kontakt.mobil;
                vp.Kontakt.Email = model.kontakt.email;

                VertragContainer.Vertrag.ListVp.Add(vp);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListVp);
            }

            return Json(new EmptyResult());
        }

        [HttpPut("[action]")]
        public ActionResult UpdateVp([FromBody] VpViewModel model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                var vp = new Vp();
                vp = VertragContainer.Vertrag.ListVp.Find(p => p.Id == model.id);

                vp.Id = model.id;
                switch (model.anrede)
                {
                    case "1":
                        vp.Anrede = EnumAnrede.Herr;
                        break;
                    case "2":
                        vp.Anrede = EnumAnrede.Frau;
                        break;
                    case "3":
                        vp.Anrede = EnumAnrede.Familie;
                        break;
                    case "4":
                        vp.Anrede = EnumAnrede.Firma;
                        break;
                    default:
                        vp.Anrede = EnumAnrede.None;
                        break;
                }
                vp.Titel = model.titel;
                vp.Vorname = model.vorname;
                vp.Nachname = model.nachname;
                vp.Geburtsdatum = Convert.ToDateTime(model.geburtsdatum);
                vp.Adresse.StrasseNr = model.adresse.strasseNr;
                vp.Adresse.Plz = model.adresse.plz;
                vp.Adresse.Ort = model.adresse.ort;
                switch (model.familienstand)
                {
                    case 1:
                        vp.Familienstand = EnumFamilienstand.ledig;
                        break;
                    case 2:
                        vp.Familienstand = EnumFamilienstand.verheiratet;
                        break;
                    case 3:
                        vp.Familienstand = EnumFamilienstand.geschieden;
                        break;
                    case 4:
                        vp.Familienstand = EnumFamilienstand.verwitwet;
                        break;
                    case 5:
                        vp.Familienstand = EnumFamilienstand.lebensgemeinschaft;
                        break;
                    default:
                        vp.Familienstand = EnumFamilienstand.None;
                        break;
                }
                vp.Kontakt.Tel = model.kontakt.tel;
                vp.Kontakt.Mobil = model.kontakt.mobil;
                vp.Kontakt.Email = model.kontakt.email;

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListVp);
            }
            //throw new HttpException(400, "Error");
            return null;
        }

        [HttpDelete("[action]/{id?}")]
        public ActionResult DeleteVp(int Id)
        {
            // Session start
            this.StartSession();

            int index = VertragContainer.Vertrag.ListVp.FindIndex(p => p.Id == Id);

            VertragContainer.Vertrag.ListVp.RemoveAt(index);

            // Session end
            this.EndSession();

            return Json(VertragContainer.Vertrag.ListVp);
        }
        #endregion

        #region ### KFZ ###
        // ### Kfz (Versicherte Fahrzeuge)
        [HttpGet("[action]")]
        public ActionResult QueryKfz()
        {
            // Session start
            this.StartSession();

            return Json(VertragContainer.Vertrag.ListKfz);
        }

        [HttpGet("[action]/{typ?}")]
        public ActionResult GetKfzNew(string typ)
        {
            // Session start
            this.StartSession();

            switch (typ)
            {
                case "Pkw":
                    Pkw pkw = new Pkw
                    {
                        Typ = "Pkw"
                    };
                    return Json(pkw);
                case "Lkw":
                    Lkw lkw = new Lkw
                    {
                        Typ = "Lkw"
                    };
                    return Json(lkw);
                case "Motorrad":
                    Motorrad motorrad = new Motorrad
                    {
                        Typ = "Motorrad"
                    };
                    return Json(motorrad);
                case "Moped":
                    Moped moped = new Moped
                    {
                        Typ = "Moped"
                    };
                    return Json(moped);
                case "Dreirad":
                    Dreirad dreirad = new Dreirad
                    {
                        Typ = "Dreirad"
                    };
                    return Json(dreirad);
                case "VierradKl50":
                    VierradKl50 vierradkl50 = new VierradKl50
                    {
                        Typ = "VierradKl50"
                    };
                    return Json(vierradkl50);
                case "VierradGr50":
                    VierradGr50 vierradgr50 = new VierradGr50
                    {
                        Typ = "VierradGr50"
                    };
                    return Json(vierradgr50);
                case "Zugmaschine":
                    Zugmaschine zugmaschine = new Zugmaschine
                    {
                        Typ = "Zugmaschine"
                    };
                    return Json(zugmaschine);
                case "Anhaenger":
                    Anhaenger anhaenger = new Anhaenger
                    {
                        Typ = "Anhaenger"
                    };
                    return Json(anhaenger);
            }
            return Json(new EmptyResult());
        }

        [HttpPost("[action]")]
        public ActionResult AddKfzPkw([FromBody] KfzViewModel_Pkw model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            // neue Id suchen
            foreach (Kfz k in VertragContainer.Vertrag.ListKfz)
            {
                if (model.id <= k.Id)
                {
                    model.id = k.Id;
                }
            }
            model.id++;

            // Kfz aufbereiten
            if (ModelState.IsValid)
            {
                Pkw kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.AddKfz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            //throw new HttpException(400, "Error");
            return null;
        }

        [HttpPost("[action]")]
        public ActionResult AddKfzLkw([FromBody] KfzViewModel_Lkw model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            // neue Id suchen
            foreach (Kfz k in VertragContainer.Vertrag.ListKfz)
            {
                if (model.id <= k.Id)
                {
                    model.id = k.Id;
                }
            }
            model.id++;

            // Kfz aufbereiten
            if (ModelState.IsValid)
            {
                Lkw kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.AddKfz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            //throw new HttpException(400, "Error");
            return null;
        }

        [HttpPost("[action]")]
        public ActionResult AddKfzMotorrad([FromBody] KfzViewModel_Motorrad model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            // neue Id suchen
            foreach (Kfz k in VertragContainer.Vertrag.ListKfz)
            {
                if (model.id <= k.Id)
                {
                    model.id = k.Id;
                }
            }
            model.id++;

            // Kfz aufbereiten
            if (ModelState.IsValid)
            {
                Motorrad kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.AddKfz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            //throw new HttpException(400, "Error");
            return null;
        }

        [HttpPost("[action]")]
        public ActionResult AddKfzMoped([FromBody] KfzViewModel_Moped model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            // neue Id suchen
            foreach (Kfz k in VertragContainer.Vertrag.ListKfz)
            {
                if (model.id <= k.Id)
                {
                    model.id = k.Id;
                }
            }
            model.id++;

            // Kfz aufbereiten
            if (ModelState.IsValid)
            {
                Moped kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.AddKfz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            //throw new HttpException(400, "Error");
            return null;
        }

        [HttpPost("[action]")]
        public ActionResult AddKfzDreirad([FromBody] KfzViewModel_Dreirad model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            // neue Id suchen
            foreach (Kfz k in VertragContainer.Vertrag.ListKfz)
            {
                if (model.id <= k.Id)
                {
                    model.id = k.Id;
                }
            }
            model.id++;

            // Kfz aufbereiten
            if (ModelState.IsValid)
            {
                Dreirad kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.AddKfz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            //throw new HttpException(400, "Error");
            return null;
        }

        [HttpPost("[action]")]
        public ActionResult AddKfzVierradKl50([FromBody] KfzViewModel_VierradKl50 model)
        {

            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            // neue Id suchen
            foreach (Kfz k in VertragContainer.Vertrag.ListKfz)
            {
                if (model.id <= k.Id)
                {
                    model.id = k.Id;
                }
            }
            model.id++;

            // Kfz aufbereiten
            if (ModelState.IsValid)
            {
                VierradKl50 kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.AddKfz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            //throw new HttpException(400, "Error");
            return null;
        }

        [HttpPost("[action]")]
        public ActionResult AddKfzVierradGr50([FromBody] KfzViewModel_VierradGr50 model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            // neue Id suchen
            foreach (Kfz k in VertragContainer.Vertrag.ListKfz)
            {
                if (model.id <= k.Id)
                {
                    model.id = k.Id;
                }
            }
            model.id++;

            if (ModelState.IsValid)
            {
                VierradGr50 kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.AddKfz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            //throw new HttpException(400, "Error");
            return null;
        }

        [HttpPost("[action]")]
        public ActionResult AddKfzZugmaschine([FromBody] KfzViewModel_Zugmaschine model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            // neue Id suchen
            foreach (Kfz k in VertragContainer.Vertrag.ListKfz)
            {
                if (model.id <= k.Id)
                {
                    model.id = k.Id;
                }
            }
            model.id++;

            // Kfz aufbereiten
            if (ModelState.IsValid)
            {
                Zugmaschine kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.AddKfz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            //throw new HttpException(400, "Error");
            return null;
        }

        [HttpPost("[action]")]
        public ActionResult AddKfzAnhaenger([FromBody] KfzViewModel_Anhaenger model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            // neue Id suchen
            foreach (Kfz k in VertragContainer.Vertrag.ListKfz)
            {
                if (model.id <= k.Id)
                {
                    model.id = k.Id;
                }
            }
            model.id++;

            // Kfz aufbereiten
            if (ModelState.IsValid)
            {
                Anhaenger kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.AddKfz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            //throw new HttpException(400, "Error");
            return null;
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzPkw([FromBody] KfzViewModel_Pkw model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            // kfz aufbereiten
            if (ModelState.IsValid)
            {
                Pkw kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.UpdateKfz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            //throw new HttpException(400, "Error");
            return null;
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzLkw([FromBody] KfzViewModel_Lkw model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                var kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.UpdateKfz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            //throw new HttpException(400, "Error");
            return null;
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzMotorrad([FromBody] KfzViewModel_Motorrad model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                var kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.UpdateKfz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            //throw new HttpException(400, "Error");
            return null;
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzMoped([FromBody] KfzViewModel_Moped model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                var kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.UpdateKfz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            //throw new HttpException(400, "Error");
            return null;
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzDreirad([FromBody] KfzViewModel_Dreirad model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                var kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.UpdateKfz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            //throw new HttpException(400, "Error");
            return null;
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzVierradKl50([FromBody] KfzViewModel_VierradKl50 model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                var kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.UpdateKfz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            //throw new HttpException(400, "Error");
            return null;
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzVierradGr50([FromBody] KfzViewModel_VierradGr50 model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                var kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.UpdateKfz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            //throw new HttpException(400, "Error");
            return null;
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzZugmaschine([FromBody] KfzViewModel_Zugmaschine model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                var kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.UpdateKfz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            //throw new HttpException(400, "Error");
            return null;
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzAnhaenger([FromBody] KfzViewModel_Anhaenger model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                var kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.UpdateKfz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            //throw new HttpException(400, "Error");
            return null;
        }

        [HttpDelete("[action]/{id?}")]
        public ActionResult DeleteKfz(int id)
        {
            // Session start
            this.StartSession();

            if (VertragContainer.Vertrag.DeleteKfz(id))
            {
                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }

            return Json(new EmptyResult());
        }

        // ### Haftpflicht
        // Pkw
        [HttpPut("[action]")]
        public ActionResult ToggleKfzHaftpflichtPkw([FromBody] KfzViewModel_Pkw model)
        {
            // Session start
            this.StartSession();

            // kfz aufbereiten
            if (ModelState.IsValid)
            {
                Pkw kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzHaftpflicht(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }

            // Session end
            //this.EndSession(); brauch ich nicht?

            return Json(new EmptyResult());
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzHaftpflichtPkw([FromBody] KfzViewModel_Pkw model)
        {
            // Session start
            this.StartSession();

            Pkw kfz = AssignParameterToKfz(model);

            VertragContainer.Vertrag.UpdateKfzHaftpflicht(kfz);

            // Session end
            this.EndSession();

            return Json(VertragContainer.Vertrag.ListKfz);
        }

        // Lkw
        [HttpPut("[action]")]
        public ActionResult ToggleKfzHaftpflichtLkw([FromBody] KfzViewModel_Lkw model)
        {
            // Session start
            this.StartSession();

            // kfz aufbereiten
            if (ModelState.IsValid)
            {
                Lkw kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzHaftpflicht(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }

            // Session end
            this.EndSession();

            return Json(new EmptyResult());
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzHaftpflichtLkw([FromBody] KfzViewModel_Lkw model)
        {
            // Session start
            this.StartSession();

            Lkw kfz = AssignParameterToKfz(model);

            VertragContainer.Vertrag.UpdateKfzHaftpflicht(kfz);

            // Session end
            this.EndSession();

            return Json(VertragContainer.Vertrag.ListKfz);
        }

        // Motorrad
        [HttpPut("[action]")]
        public ActionResult ToggleKfzHaftpflichtMotorrad([FromBody] KfzViewModel_Motorrad model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                Motorrad kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzHaftpflicht(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }

            // Session end
            this.EndSession();

            return Json(new EmptyResult());
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzHaftpflichtMotorrad([FromBody] KfzViewModel_Motorrad model)
        {
            // Session start
            this.StartSession();

            Motorrad kfz = AssignParameterToKfz(model);

            VertragContainer.Vertrag.UpdateKfzHaftpflicht(kfz);

            // Session end
            this.EndSession();

            return Json(VertragContainer.Vertrag.ListKfz);
        }

        // Moped
        [HttpPut("[action]")]
        public ActionResult ToggleKfzHaftpflichtMoped([FromBody] KfzViewModel_Moped model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                Moped kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzHaftpflicht(kfz);

                // Sasion end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            // Session end
            this.EndSession();

            return Json(new EmptyResult());
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzHaftpflichtMoped([FromBody] KfzViewModel_Moped model)
        {
            // Session start
            this.StartSession();

            Moped kfz = AssignParameterToKfz(model);

            VertragContainer.Vertrag.UpdateKfzHaftpflicht(kfz);

            // Session end
            this.EndSession();

            return Json(VertragContainer.Vertrag.ListKfz);
        }

        // Dreirad
        [HttpPut("[action]")]
        public ActionResult ToggleKfzHaftpflichtDreirad([FromBody] KfzViewModel_Dreirad model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                Dreirad kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzHaftpflicht(kfz);

                // Sasion end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            // Session end
            this.EndSession();

            return Json(new EmptyResult());
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzHaftpflichtDreirad([FromBody] KfzViewModel_Dreirad model)
        {
            // Session start
            this.StartSession();

            Dreirad kfz = AssignParameterToKfz(model);

            VertragContainer.Vertrag.UpdateKfzHaftpflicht(kfz);

            // Session end
            this.EndSession();

            return Json(VertragContainer.Vertrag.ListKfz);
        }

        // VierradKl50
        [HttpPut("[action]")]
        public ActionResult ToggleKfzHaftpflichtVierradKl50([FromBody] KfzViewModel_VierradKl50 model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                VierradKl50 kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzHaftpflicht(kfz);

                // Sasion end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            // Session end
            this.EndSession();

            return Json(new EmptyResult());
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzHaftpflichtVierradKl50([FromBody] KfzViewModel_VierradKl50 model)
        {
            // Session start
            this.StartSession();

            VierradKl50 kfz = AssignParameterToKfz(model);

            VertragContainer.Vertrag.UpdateKfzHaftpflicht(kfz);

            // Session end
            this.EndSession();

            return Json(VertragContainer.Vertrag.ListKfz);
        }

        // VierradGr50
        [HttpPut("[action]")]
        public ActionResult ToggleKfzHaftpflichtVierradGr50([FromBody] KfzViewModel_VierradGr50 model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                VierradGr50 kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzHaftpflicht(kfz);

                // Sasion end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            // Session end
            this.EndSession();

            return Json(new EmptyResult());
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzHaftpflichtVierradGr50([FromBody] KfzViewModel_VierradGr50 model)
        {
            // Session start
            this.StartSession();

            VierradGr50 kfz = AssignParameterToKfz(model);

            VertragContainer.Vertrag.UpdateKfzHaftpflicht(kfz);

            // Session end
            this.EndSession();

            return Json(VertragContainer.Vertrag.ListKfz);
        }

        // Zugmaschine
        [HttpPut("[action]")]
        public ActionResult ToggleKfzHaftpflichtZugmaschine([FromBody] KfzViewModel_Zugmaschine model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                Zugmaschine kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzHaftpflicht(kfz);

                // Sasion end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            // Session end
            this.EndSession();

            return Json(new EmptyResult());
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzHaftpflichtZugmaschine([FromBody] KfzViewModel_Zugmaschine model)
        {
            // Session start
            this.StartSession();

            Zugmaschine kfz = AssignParameterToKfz(model);

            VertragContainer.Vertrag.UpdateKfzHaftpflicht(kfz);

            // Session end
            this.EndSession();

            return Json(VertragContainer.Vertrag.ListKfz);
        }

        // Anhaenger
        [HttpPut("[action]")]
        public ActionResult ToggleKfzHaftpflichtAnhaenger([FromBody] KfzViewModel_Anhaenger model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                Anhaenger kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzHaftpflicht(kfz);

                // Sasion end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }

            return Json(new EmptyResult());
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzHaftpflichtAnhaenger([FromBody] KfzViewModel_Anhaenger model)
        {
            // Session start
            this.StartSession();

            Anhaenger kfz = AssignParameterToKfz(model);

            VertragContainer.Vertrag.UpdateKfzHaftpflicht(kfz);

            // Session end
            this.EndSession();

            return Json(VertragContainer.Vertrag.ListKfz);
        }

        // ### Kasko
        // Pkw
        [HttpPut("[action]")]
        public ActionResult ToggleKfzKaskoPkw([FromBody] KfzViewModel_Pkw model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                Pkw kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzKasko(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }

            return Json(new EmptyResult());
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzKaskoPkw([FromBody] KfzViewModel_Pkw model)
        {
            // Session start
            this.StartSession();

            Pkw kfz = AssignParameterToKfz(model);

            VertragContainer.Vertrag.UpdateKfzKasko(kfz);

            // Session end
            this.EndSession();

            return Json(VertragContainer.Vertrag.ListKfz);
        }

        // Lkw
        [HttpPut("[action]")]
        public ActionResult ToggleKfzKaskoLkw([FromBody] KfzViewModel_Lkw model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                Lkw kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzKasko(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }

            return Json(new EmptyResult());
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzKaskoLkw([FromBody] KfzViewModel_Lkw model)
        {
            // Session start
            this.StartSession();

            Lkw kfz = AssignParameterToKfz(model);

            VertragContainer.Vertrag.UpdateKfzKasko(kfz);

            // Session end
            this.EndSession();

            return Json(VertragContainer.Vertrag.ListKfz);
        }

        // Motorrad
        [HttpPut("[action]")]
        public ActionResult ToggleKfzKaskoMotorrad([FromBody] KfzViewModel_Motorrad model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                Motorrad kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzKasko(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }

            return Json(new EmptyResult());
        }

        [HttpPut("[action]")]
        public ActionResult UpdateKfzKaskoMotorrad([FromBody] KfzViewModel_Motorrad model)
        {
            // Session start
            this.StartSession();

            Motorrad kfz = AssignParameterToKfz(model);

            VertragContainer.Vertrag.UpdateKfzKasko(kfz);

            // Session end
            this.EndSession();

            return Json(VertragContainer.Vertrag.ListKfz);
        }

        // ### Rechtsschutz
        // Pkw
        [HttpPut("[action]")]
        public ActionResult ToggleKfzRechtsschutz_Pkw([FromBody] KfzViewModel_Pkw model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                Pkw kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzRechtsschutz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }

            return Json(new EmptyResult());
        }

        // Lkw
        [HttpPut("[action]")]
        public ActionResult ToggleKfzRechtsschutz_Lkw([FromBody] KfzViewModel_Lkw model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                Lkw kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzRechtsschutz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            return Json(new EmptyResult());
        }

        // Motorrad
        [HttpPut("[action]")]
        public ActionResult ToggleKfzRechtsschutz_Motorrad([FromBody] KfzViewModel_Motorrad model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                Motorrad kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzRechtsschutz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }
            return Json(new EmptyResult());
        }

        // Moped
        [HttpPut("[action]")]
        public ActionResult ToggleKfzRechtsschutz_Moped([FromBody] KfzViewModel_Moped model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                Moped kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzRechtsschutz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }

            return Json(new EmptyResult());
        }

        // Dreirad
        [HttpPut("[action]")]
        public ActionResult ToggleKfzRechtsschutz_Dreirad([FromBody] KfzViewModel_Dreirad model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                Dreirad kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzRechtsschutz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }

            return Json(new EmptyResult());
        }

        // VierradKl50
        [HttpPut("[action]")]
        public ActionResult ToggleKfzRechtsschutz_VierradKl50([FromBody] KfzViewModel_VierradKl50 model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                VierradKl50 kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzRechtsschutz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }

            return Json(new EmptyResult());
        }

        // VierradGr50
        [HttpPut("[action]")]
        public ActionResult ToggleKfzRechtsschutz_VierradGr50([FromBody] KfzViewModel_VierradGr50 model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                VierradGr50 kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzRechtsschutz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }

            return Json(new EmptyResult());
        }

        // Zugmaschine
        [HttpPut("[action]")]
        public ActionResult ToggleKfzRechtsschutz_Zugmaschine([FromBody] KfzViewModel_Zugmaschine model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                Zugmaschine kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzRechtsschutz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }

            return Json(new EmptyResult());
        }

        // Anhaenger
        [HttpPut("[action]")]
        public ActionResult ToggleKfzRechtsschutz_Anhaenger([FromBody] KfzViewModel_Anhaenger model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                Anhaenger kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzRechtsschutz(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }

            return Json(new EmptyResult());
        }

        // ### Insassenunfall
        // Pkw
        [HttpPut("[action]")]
        public ActionResult ToggleKfzInsassen_Pkw([FromBody] KfzViewModel_Pkw model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                Pkw kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzInsassen(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }

            return Json(new EmptyResult());
        }

        // Lkw
        [HttpPut("[action]")]
        public ActionResult ToggleKfzInsassen_Lkw([FromBody] KfzViewModel_Lkw model)
        {
            // Session start
            this.StartSession();

            if (ModelState.IsValid)
            {
                Lkw kfz = AssignParameterToKfz(model);

                VertragContainer.Vertrag.ToggleKfzInsassen(kfz);

                // Session end
                this.EndSession();

                return Json(VertragContainer.Vertrag.ListKfz);
            }

            return Json(new EmptyResult());
        }

        // ### Eurotax Markensuche
        [HttpGet("[action]/{vehTyp}")]
        public ActionResult SearchEurotaxMarke(string vehTyp)
        {
            List<Marke> marken = new List<Marke>();

            using (var con = new SqlConnection("Data Source = w-hq-srviis01.muki.com\\MUKI; Initial Catalog = Eurotax; Persist Security Info = True; User ID = eurotax; Password = Edinisone814"))
            using (var cmd = new SqlCommand("SELECT MAKName, MAKNatCode " +
                                            "FROM MAKE " +
                                            "WHERE MAKVehType = @typ " +
                                            "ORDER BY MAKName", con))
            {
                cmd.Parameters.AddWithValue("typ", Int32.Parse(vehTyp));
                var dt = new DataTable();
                using (var da = new SqlDataAdapter(cmd))
                {
                    da.Fill(dt);
                    foreach (DataRow row in dt.Rows)
                    {
                        Marke marke = new Marke
                        {
                            Name = row["MAKName"].ToString().Trim(),
                            NatCode = row["MAKNatCode"].ToString().Trim()
                        };
                        marken.Add(marke);
                    }
                }
            }
            return Json(marken);
        }

        [HttpGet("[action]/{vehTyp}/{searchTerm}")]
        public ActionResult SearchEurotaxMarke(string vehTyp, string searchTerm)
        {
            List<Marke> marken = new List<Marke>();

            if (searchTerm == "undefined")
            {
                searchTerm = "";
            }

            using (var con = new SqlConnection("Data Source = w-hq-srviis01.muki.com\\MUKI; Initial Catalog = Eurotax; Persist Security Info = True; User ID = eurotax; Password = Edinisone814"))
            using (var cmd = new SqlCommand("SELECT MAKName, MAKNatCode " +
                                            "FROM MAKE " +
                                            "WHERE MAKVehType = @typ AND " +
                                            "MAKName LIKE @name " +
                                            "ORDER BY MAKName", con))
            {
                cmd.Parameters.AddWithValue("typ", Int32.Parse(vehTyp));
                cmd.Parameters.AddWithValue("name", "%" + searchTerm + "%");
                var dt = new DataTable();
                using (var da = new SqlDataAdapter(cmd))
                {
                    da.Fill(dt);
                    foreach (DataRow row in dt.Rows)
                    {
                        Marke marke = new Marke
                        {
                            Name = row["MAKName"].ToString().Trim(),
                            NatCode = row["MAKNatCode"].ToString().Trim()
                        };
                        marken.Add(marke);
                    }
                }
            }
            return Json(marken);
        }

        // Eurotax Modellsuche
        [HttpGet("[action]/{vehTyp}/{baujahr}/{natCodeMarke}")]
        public ActionResult SearchEurotaxModell(string vehTyp, int baujahr, string natCodeMarke)
       {
            List<Modell> modelle = new List<Modell>();

            using (var con = new SqlConnection("Data Source = w-hq-srviis01.muki.com\\MUKI; Initial Catalog = Eurotax; Persist Security Info = True; User ID = eurotax; Password = Edinisone814"))
            using (var cmd = new SqlCommand("SELECT LTRIM(RTRIM(MODName)) as MODName, '(Import von ' +  SUBSTRING(LTRIM(RTRIM(MODImpBegin)), 5, 2) + '.' + SUBSTRING(LTRIM(RTRIM(MODImpBegin)), 1, 4) + ' bis ' + SUBSTRING(LTRIM(RTRIM(MODImpEnd)), 5, 2) + '.' + SUBSTRING(LTRIM(RTRIM(MODImpEnd)), 1, 4) + ')' as MODImportVonBis, MODNatCode " +
                                            "FROM MODEL " +
                                            "WHERE MODVehType = @typ AND " +
                                            "MODMakCd = @makNatCode AND " +
                                            "((CAST([MODImpBegin] AS int) <= @baujahr AND CAST([MODImpEnd] AS int) >= @baujahr) Or " +
                                            "(CAST([MODImpBegin] AS int) <= @baujahr AND CAST([MODImpEnd] AS int) = 0)) " +
                                            "ORDER BY MODSort", con))
            {
                cmd.Parameters.AddWithValue("typ", Int32.Parse(vehTyp));
                cmd.Parameters.AddWithValue("baujahr", baujahr);
                cmd.Parameters.AddWithValue("makNatCode", Int32.Parse(natCodeMarke));
                //
                var dt = new DataTable();
                using (var da = new SqlDataAdapter(cmd))
                {
                    da.Fill(dt);
                    foreach (DataRow row in dt.Rows)
                    {
                        Modell modell = new Modell
                        {
                            Name = row["MODName"].ToString().Trim(),
                            NatCode = row["MODNatCode"].ToString().Trim(),
                            ImportVonBis = row["MODImportVonBis"].ToString().Trim()
                        };
                        modelle.Add(modell);
                    }
                }
            }
            return Json(modelle);
        }

        [HttpGet("[action]/{vehTyp}/{baujahr}/{natCodeMarke}/{searchTerm}")]
        public ActionResult SearchEurotaxModell(string vehTyp, int baujahr, string natCodeMarke, string searchTerm)
        {
            List<Modell> modelle = new List<Modell>();
            String[] searchTermPart = new String[1];
            String whereSearchTerm = null;

            // searchTerm in Array zerlegen
            if (searchTerm.Contains(' '))
            {
                searchTermPart = searchTerm.Split(' ');
            }
            else
            {
                searchTermPart[0] = "%" + searchTerm + "%";
            }

            // Where String aufbauen für searchTerm
            whereSearchTerm = "AND (";
            int length = searchTermPart.Length;

            if (length > 1)
            {
                for (int i = 0; i < length; i++)
                {
                    whereSearchTerm += "MODName like @name" + i.ToString();

                    if (i < length - 1)
                    {
                        whereSearchTerm += " AND ";
                    }
                }
            }
            else
            {
                whereSearchTerm += "MODName like @name0";
            }
            whereSearchTerm += ") ";

            // DB Abfrage
            using (var con = new SqlConnection("Data Source = w-hq-srviis01.muki.com\\MUKI; Initial Catalog = Eurotax; Persist Security Info = True; User ID = eurotax; Password = Edinisone814"))
            using (var cmd = new SqlCommand("SELECT LTRIM(RTRIM(MODName)) as MODName, '(Import von ' +  SUBSTRING(LTRIM(RTRIM(MODImpBegin)), 5, 2) + '.' + SUBSTRING(LTRIM(RTRIM(MODImpBegin)), 1, 4) + ' bis ' + SUBSTRING(LTRIM(RTRIM(MODImpEnd)), 5, 2) + '.' + SUBSTRING(LTRIM(RTRIM(MODImpEnd)), 1, 4) + ')' as MODImportVonBis, MODNatCode " +
                                            "FROM MODEL " +
                                            "WHERE MODVehType = @typ AND " +
                                            "MODMakCd = @makNatCode AND " +
                                            "((CAST([MODImpBegin] AS int) <= @baujahr AND CAST([MODImpEnd] AS int) >= @baujahr) Or " +
                                            "(CAST([MODImpBegin] AS int) <= @baujahr AND CAST([MODImpEnd] AS int) = 0)) " +
                                            whereSearchTerm +
                                            "ORDER BY MODSort", con)) 
            {
                cmd.Parameters.AddWithValue("typ", Int32.Parse(vehTyp));
                cmd.Parameters.AddWithValue("baujahr", baujahr);
                cmd.Parameters.AddWithValue("makNatCode", Int32.Parse(natCodeMarke));
                switch (searchTermPart.Length)
                {
                    case 1:
                        cmd.Parameters.AddWithValue("name0", "%" + searchTermPart[0] + "%");
                        break;
                    case 2:
                        cmd.Parameters.AddWithValue("name0", "%" + searchTermPart[0] + "%");
                        cmd.Parameters.AddWithValue("name1", "%" + searchTermPart[1] + "%");
                        break;
                    case 3:
                        cmd.Parameters.AddWithValue("name0", "%" + searchTermPart[0] + "%");
                        cmd.Parameters.AddWithValue("name1", "%" + searchTermPart[1] + "%");
                        cmd.Parameters.AddWithValue("name2", "%" + searchTermPart[2] + "%");
                        break;
                    case 4:
                        cmd.Parameters.AddWithValue("name0", "%" + searchTermPart[0] + "%");
                        cmd.Parameters.AddWithValue("name1", "%" + searchTermPart[1] + "%");
                        cmd.Parameters.AddWithValue("name2", "%" + searchTermPart[2] + "%");
                        cmd.Parameters.AddWithValue("name3", "%" + searchTermPart[3] + "%");
                        break;
                    case 5:
                        cmd.Parameters.AddWithValue("name0", "%" + searchTermPart[0] + "%");
                        cmd.Parameters.AddWithValue("name1", "%" + searchTermPart[1] + "%");
                        cmd.Parameters.AddWithValue("name2", "%" + searchTermPart[2] + "%");
                        cmd.Parameters.AddWithValue("name3", "%" + searchTermPart[3] + "%");
                        cmd.Parameters.AddWithValue("name4", "%" + searchTermPart[4] + "%");
                        break;
                    case 6:
                        cmd.Parameters.AddWithValue("name0", "%" + searchTermPart[0] + "%");
                        cmd.Parameters.AddWithValue("name1", "%" + searchTermPart[1] + "%");
                        cmd.Parameters.AddWithValue("name2", "%" + searchTermPart[2] + "%");
                        cmd.Parameters.AddWithValue("name3", "%" + searchTermPart[3] + "%");
                        cmd.Parameters.AddWithValue("name4", "%" + searchTermPart[4] + "%");
                        cmd.Parameters.AddWithValue("name5", "%" + searchTermPart[5] + "%");
                        break;
                }
                
                // Daten aufbereiten
                var dt = new DataTable();
                using (var da = new SqlDataAdapter(cmd))
                {
                    da.Fill(dt);
                    foreach (DataRow row in dt.Rows)
                    {
                        Modell modell = new Modell
                        {
                            Name = row["MODName"].ToString().Trim(),
                            NatCode = row["MODNatCode"].ToString().Trim(),
                            ImportVonBis = row["MODImportVonBis"].ToString().Trim()
                        };
                        modelle.Add(modell);
                    }
                }
            }
            return Json(modelle);
        }

        // Eurotax Typsuche
        [HttpGet("[action]/{vehTyp}/{baujahr}/{natCodeMarke}/{natCodeModell}")]
        public ActionResult SearchEurotaxTyp(string vehTyp, int baujahr, string natCodeMarke, string natCodeModell)
       {
            List<Typ> typen = new List<Typ>();

            using (var con = new SqlConnection("Data Source = w-hq-srviis01.muki.com\\MUKI; Initial Catalog = Eurotax; Persist Security Info = True; User ID = eurotax; Password = Edinisone814"))
            using (var cmd = new SqlCommand("SELECT LTRIM(RTRIM(TYPName)) as TYPName, TYPNatCode, TYPKW, TYPHP, TYPDoor, TYPCylinder, TYPSeat, '(Import von ' +  SUBSTRING(LTRIM(RTRIM(TYPImpBegin)), 5, 2) + '.' + SUBSTRING(LTRIM(RTRIM(TYPImpBegin)), 1, 4) + ' bis ' + SUBSTRING(LTRIM(RTRIM(TYPImpEnd)), 5, 2) + '.' + SUBSTRING(LTRIM(RTRIM(TYPImpEnd)), 1, 4) + ')' as TYPImportVonBis " +
                                            "FROM TYPE " +
                                            "WHERE TYPVehType = @typ AND " +
                                            "TYPMakeCd = @makNatCode AND " +
                                            "TYPModCd = @modNatCode AND " +
                                            "((CAST([TYPImpBegin] AS int) <= @baujahr AND CAST([TYPImpEnd] AS int) >= @baujahr) Or " +
                                            "(CAST([TYPImpBegin] AS int) <= @baujahr AND CAST([TYPImpEnd] AS int) = 0)) " +
                                            "ORDER BY TYPSort", con))
            {
                cmd.Parameters.AddWithValue("typ", Int32.Parse(vehTyp));
                cmd.Parameters.AddWithValue("baujahr", baujahr);
                cmd.Parameters.AddWithValue("makNatCode", Int32.Parse(natCodeMarke));
                cmd.Parameters.AddWithValue("modNatCode", Int32.Parse(natCodeModell));
                //
                var dt = new DataTable();
                using (var da = new SqlDataAdapter(cmd))
                {
                    da.Fill(dt);
                    foreach (DataRow row in dt.Rows)
                    {
                        Typ typ = new Typ
                        {
                            Name = row["TYPName"].ToString().Trim(),
                            NatCode = row["TYPNatCode"].ToString().Trim(),
                            Kw = row["TYPKW"].ToString().Trim(),
                            Ps = row["TYPHP"].ToString().Trim(),
                            Tueren = row["TYPDoor"].ToString().Trim(),
                            Zylinder = row["TYPCylinder"].ToString().Trim(),
                            Sitze = row["TYPSeat"].ToString().Trim(),
                            ImportVonBis = row["TYPImportVonBis"].ToString().Trim()
                        };
                        typen.Add(typ);
                    }
                }
            }
            return Json(typen);
        }

        [HttpGet("[action]/{vehTyp}/{baujahr}/{natCodeMarke}/{natCodeModell}/{searchTerm}")]
        public ActionResult SearchEurotaxTyp(string vehTyp, int baujahr, string natCodeMarke, string natCodeModell, string searchTerm)
        {
            List<Typ> typen = new List<Typ>();
            String[] searchTermPart = new String[1];
            String whereSearchTerm = null;

            // searchTerm in Array zerlegen
            if (searchTerm.Contains(' '))
            {
                searchTermPart = searchTerm.Split(' ');
            }
            else
            {
                searchTermPart[0] = "%" + searchTerm + "%";
            }

            // Where String aufbauen für searchTerm
            whereSearchTerm = "AND (";
            int length = searchTermPart.Length;

            if (length > 1)
            {
                for (int i = 0; i < length; i++)
                {
                    whereSearchTerm += "TYPName like @name" + i.ToString();

                    if (i < length - 1)
                    {
                        whereSearchTerm += " AND ";
                    }
                }
            }
            else
            {
                whereSearchTerm += "TYPName like @name0";
            }
            whereSearchTerm += ") ";

            // DB Abfrage
            using (var con = new SqlConnection("Data Source = w-hq-srviis01.muki.com\\MUKI; Initial Catalog = Eurotax; Persist Security Info = True; User ID = eurotax; Password = Edinisone814"))
            using (var cmd = new SqlCommand("SELECT LTRIM(RTRIM(TYPName)) as TYPName, TYPNatCode, TYPKW, TYPHP, TYPDoor, TYPCylinder, TYPSeat, '(Import von ' +  SUBSTRING(LTRIM(RTRIM(TYPImpBegin)), 5, 2) + '.' + SUBSTRING(LTRIM(RTRIM(TYPImpBegin)), 1, 4) + ' bis ' + SUBSTRING(LTRIM(RTRIM(TYPImpEnd)), 5, 2) + '.' + SUBSTRING(LTRIM(RTRIM(TYPImpEnd)), 1, 4) + ')' as TYPImportVonBis  " +
                                            "FROM TYPE " +
                                            "WHERE TYPVehType = @typ AND " +
                                            "TYPMakeCd = @makNatCode AND " +
                                            "TYPModCd = @modNatCode AND " +
                                            "((CAST([TYPImpBegin] AS int) <= @baujahr AND CAST([TYPImpEnd] AS int) >= @baujahr) Or " +
                                            "(CAST([TYPImpBegin] AS int) <= @baujahr AND CAST([TYPImpEnd] AS int) = 0)) " +
                                            whereSearchTerm +
                                            "ORDER BY TYPSort", con))
            {
                cmd.Parameters.AddWithValue("typ", Int32.Parse(vehTyp));
                cmd.Parameters.AddWithValue("baujahr", baujahr);
                cmd.Parameters.AddWithValue("makNatCode", Int32.Parse(natCodeMarke));
                cmd.Parameters.AddWithValue("modNatCode", Int32.Parse(natCodeModell));
                switch (searchTermPart.Length)
                {
                    case 1:
                        cmd.Parameters.AddWithValue("name0", "%" + searchTermPart[0] + "%");
                        break;
                    case 2:
                        cmd.Parameters.AddWithValue("name0", "%" + searchTermPart[0] + "%");
                        cmd.Parameters.AddWithValue("name1", "%" + searchTermPart[1] + "%");
                        break;
                    case 3:
                        cmd.Parameters.AddWithValue("name0", "%" + searchTermPart[0] + "%");
                        cmd.Parameters.AddWithValue("name1", "%" + searchTermPart[1] + "%");
                        cmd.Parameters.AddWithValue("name2", "%" + searchTermPart[2] + "%");
                        break;
                    case 4:
                        cmd.Parameters.AddWithValue("name0", "%" + searchTermPart[0] + "%");
                        cmd.Parameters.AddWithValue("name1", "%" + searchTermPart[1] + "%");
                        cmd.Parameters.AddWithValue("name2", "%" + searchTermPart[2] + "%");
                        cmd.Parameters.AddWithValue("name3", "%" + searchTermPart[3] + "%");
                        break;
                    case 5:
                        cmd.Parameters.AddWithValue("name0", "%" + searchTermPart[0] + "%");
                        cmd.Parameters.AddWithValue("name1", "%" + searchTermPart[1] + "%");
                        cmd.Parameters.AddWithValue("name2", "%" + searchTermPart[2] + "%");
                        cmd.Parameters.AddWithValue("name3", "%" + searchTermPart[3] + "%");
                        cmd.Parameters.AddWithValue("name4", "%" + searchTermPart[4] + "%");
                        break;
                    case 6:
                        cmd.Parameters.AddWithValue("name0", "%" + searchTermPart[0] + "%");
                        cmd.Parameters.AddWithValue("name1", "%" + searchTermPart[1] + "%");
                        cmd.Parameters.AddWithValue("name2", "%" + searchTermPart[2] + "%");
                        cmd.Parameters.AddWithValue("name3", "%" + searchTermPart[3] + "%");
                        cmd.Parameters.AddWithValue("name4", "%" + searchTermPart[4] + "%");
                        cmd.Parameters.AddWithValue("name5", "%" + searchTermPart[5] + "%");
                        break;
                    case 7:
                        cmd.Parameters.AddWithValue("name0", "%" + searchTermPart[0] + "%");
                        cmd.Parameters.AddWithValue("name1", "%" + searchTermPart[1] + "%");
                        cmd.Parameters.AddWithValue("name2", "%" + searchTermPart[2] + "%");
                        cmd.Parameters.AddWithValue("name3", "%" + searchTermPart[3] + "%");
                        cmd.Parameters.AddWithValue("name4", "%" + searchTermPart[4] + "%");
                        cmd.Parameters.AddWithValue("name5", "%" + searchTermPart[5] + "%");
                        cmd.Parameters.AddWithValue("name6", "%" + searchTermPart[6] + "%");
                        break;
                    case 8:
                        cmd.Parameters.AddWithValue("name0", "%" + searchTermPart[0] + "%");
                        cmd.Parameters.AddWithValue("name1", "%" + searchTermPart[1] + "%");
                        cmd.Parameters.AddWithValue("name2", "%" + searchTermPart[2] + "%");
                        cmd.Parameters.AddWithValue("name3", "%" + searchTermPart[3] + "%");
                        cmd.Parameters.AddWithValue("name4", "%" + searchTermPart[4] + "%");
                        cmd.Parameters.AddWithValue("name5", "%" + searchTermPart[5] + "%");
                        cmd.Parameters.AddWithValue("name6", "%" + searchTermPart[6] + "%");
                        cmd.Parameters.AddWithValue("name7", "%" + searchTermPart[7] + "%");
                        break;
                    case 9:
                        cmd.Parameters.AddWithValue("name0", "%" + searchTermPart[0] + "%");
                        cmd.Parameters.AddWithValue("name1", "%" + searchTermPart[1] + "%");
                        cmd.Parameters.AddWithValue("name2", "%" + searchTermPart[2] + "%");
                        cmd.Parameters.AddWithValue("name3", "%" + searchTermPart[3] + "%");
                        cmd.Parameters.AddWithValue("name4", "%" + searchTermPart[4] + "%");
                        cmd.Parameters.AddWithValue("name5", "%" + searchTermPart[5] + "%");
                        cmd.Parameters.AddWithValue("name6", "%" + searchTermPart[6] + "%");
                        cmd.Parameters.AddWithValue("name7", "%" + searchTermPart[7] + "%");
                        cmd.Parameters.AddWithValue("name8", "%" + searchTermPart[8] + "%");
                        break;
                    case 10:
                        cmd.Parameters.AddWithValue("name0", "%" + searchTermPart[0] + "%");
                        cmd.Parameters.AddWithValue("name1", "%" + searchTermPart[1] + "%");
                        cmd.Parameters.AddWithValue("name2", "%" + searchTermPart[2] + "%");
                        cmd.Parameters.AddWithValue("name3", "%" + searchTermPart[3] + "%");
                        cmd.Parameters.AddWithValue("name4", "%" + searchTermPart[4] + "%");
                        cmd.Parameters.AddWithValue("name5", "%" + searchTermPart[5] + "%");
                        cmd.Parameters.AddWithValue("name6", "%" + searchTermPart[6] + "%");
                        cmd.Parameters.AddWithValue("name7", "%" + searchTermPart[7] + "%");
                        cmd.Parameters.AddWithValue("name8", "%" + searchTermPart[8] + "%");
                        cmd.Parameters.AddWithValue("name9", "%" + searchTermPart[9] + "%");
                        break;
                }

                // Daten aufbereiten
                var dt = new DataTable();
                using (var da = new SqlDataAdapter(cmd))
                {
                    da.Fill(dt);
                    foreach (DataRow row in dt.Rows)
                    {
                        Typ typ = new Typ
                        {
                            Name = row["TYPName"].ToString().Trim(),
                            NatCode = row["TYPNatCode"].ToString().Trim(),
                            Kw = row["TYPKW"].ToString().Trim(),
                            Ps = row["TYPHP"].ToString().Trim(),
                            Tueren = row["TYPDoor"].ToString().Trim(),
                            Zylinder = row["TYPCylinder"].ToString().Trim(),
                            Sitze = row["TYPSeat"].ToString().Trim(),
                            ImportVonBis = row["TYPImportVonBis"].ToString().Trim()
                        };
                        typen.Add(typ);
                    }
                }
            }
            return Json(typen);
        }

        // Eurotax Fahrzeugauswahl
        [HttpGet("[action]/{vehTyp}/{natCode}/{baujahr}")]
        public ActionResult SearchEurotaxFahrzeug(string vehTyp, string natCode, int baujahr)
        {
            List<Fahrzeug> fahrzeuge = new List<Fahrzeug>();

            using (var con = new SqlConnection("Data Source = w-hq-srviis01.muki.com\\MUKI; Initial Catalog = Eurotax; Persist Security Info = True; User ID = eurotax; Password = Edinisone814"))
            using (var cmd = new SqlCommand(
                "SELECT	TOP 1 " +
                "       ph.PRHNatCode, ph.PRHNP1, ph.PRHVal, SUBSTRING(LTRIM(RTRIM(ph.PRHVal)), 7, 2) + '.' + SUBSTRING(LTRIM(RTRIM(ph.PRHVal)), 5, 2) + '.' + SUBSTRING(LTRIM(RTRIM(ph.PRHVal)), 1, 4) as PreisAb, " +
                "       ty.TYPName, ty.TYPNatCode, ty.TYPModCd, ty.TYPMakeCd, ty.TYPKW, ty.TYPHP, ty.TYPDoor, ty.TYPCylinder, ty.TYPSeat, ty.TYPTXTFuelTypeCd2, ty.TYPSecFuelTypCd2, ty.TYPTotWgt, ty.TYPCurbWgt, " +
                "       mo.MODName, mo.MODMakCd, mo.MODImpBegin, mo.MODImpEnd, SUBSTRING(LTRIM(RTRIM(mo.MODImpBegin)), 5, 2) + '.' + SUBSTRING(LTRIM(RTRIM(mo.MODImpBegin)), 1, 4) as ImportStart, SUBSTRING(LTRIM(RTRIM(mo.MODImpEnd)), 5, 2) + '.' + SUBSTRING(LTRIM(RTRIM(mo.MODImpEnd)), 1, 4) as ImportEnde, " +
                "       ma.MAKName, " +
                "       txtFuelType1.TXTTextLong as TXTTextLongFuelTyp1, " +
                "       txtFuelType2.TXTTextLong as TXTTextLongFuelTyp2 " +
                "FROM [Eurotax].[dbo].[PRICEHistory] AS ph " +
                "     JOIN [Eurotax].[dbo].[TYPE] As ty ON ph.PRHNatCode = ty.TYPNatCode AND ph.PRHVehType = ty.TYPVehType " +
                "     JOIN [Eurotax].[dbo].[MODEL] As mo ON ty.TYPModCd = mo.MODNatCode AND ty.TYPVehType = mo.MODVehType " +
                "     JOIN [Eurotax].[dbo].[MAKE] As ma ON mo.MODMakCd = ma.MAKNatCode AND mo.MODVehType = ma.MAKVehType " +
                "     JOIN [Eurotax].[dbo].[TXTTABEL] As txtFuelType1 ON ty.TYPTXTFuelTypeCd2 = txtFuelType1.TXTCode " +
                "     JOIN [Eurotax].[dbo].[TXTTABEL] As txtFuelType2 ON ty.TYPSecFuelTypCd2 = txtFuelType2.TXTCode " +
                "WHERE ph.PRHVehType = @typ AND ph.PRHNatCode = @natCode AND CAST(SUBSTRING(ph.PRHVal, 1, 6) AS int) <= @baujahr " +
                "ORDER BY PRHVal desc", con))
            {
                cmd.Parameters.AddWithValue("typ", Int32.Parse(vehTyp));
                cmd.Parameters.AddWithValue("natCode", Int32.Parse(natCode));
                cmd.Parameters.AddWithValue("baujahr", baujahr);
                //
                var dt = new DataTable();
                using (var da = new SqlDataAdapter(cmd))
                {
                    da.Fill(dt);
                    foreach (DataRow row in dt.Rows)
                    {
                        Fahrzeug fahrzeug = new Fahrzeug();
                        fahrzeug.Marke = row["MAKName"].ToString().Trim();
                        fahrzeug.Modell = row["MODName"].ToString().Trim();
                        fahrzeug.Typ = row["TYPName"].ToString().Trim();
                        fahrzeug.Name = row["TYPName"].ToString().Trim();
                        fahrzeug.NationalCode = row["TYPNatCode"].ToString().Trim();
                        fahrzeug.Kw = row["TYPKW"].ToString().Trim();
                        fahrzeug.Ps = row["TYPHP"].ToString().Trim();
                        fahrzeug.Tueren = row["TYPDoor"].ToString().Trim();
                        fahrzeug.Zylinder = row["TYPCylinder"].ToString().Trim();
                        fahrzeug.Sitze = row["TYPSeat"].ToString().Trim();
                        fahrzeug.Antrieb1 = row["TXTTextLongFuelTyp1"].ToString().Trim();
                        if (row["TXTTextLongFuelTyp2"].ToString().Trim() != "keine Verknüpfung  (0010)")
                        {
                            fahrzeug.Antrieb2 = " / " + row["TXTTextLongFuelTyp2"].ToString().Trim();
                        }
                        else
                        {
                            fahrzeug.Antrieb2= "";
                        }
                        fahrzeug.ImportStart = row["ImportStart"].ToString().Trim();
                        fahrzeug.ImportEnde = row["ImportEnde"].ToString().Trim();
                        fahrzeug.PreisAb = row["PreisAb"].ToString().Trim();
                        fahrzeug.Neupreis = row["PRHNP1"].ToString().Trim();
                        fahrzeug.Leergewicht = (int)row["TYPCurbWgt"];
                        fahrzeug.Nutzlast = (int)row["TYPTotWgt"] - (int)row["TYPCurbWgt"];
                        fahrzeug.Gesamtgewicht = (int)row["TYPTotWgt"];
                        fahrzeuge.Add(fahrzeug);
                    }
                }
            }
            return Json(fahrzeuge);
        }

        [HttpGet("[action]/{vehTyp}/{natCode}/{baujahr}")]
        public ActionResult SearchEurotaxNatCode(string vehTyp, string natCode, int baujahr)
        {
            List<Fahrzeug> fahrzeuge = new List<Fahrzeug>();

            using (var con = new SqlConnection("Data Source = w-hq-srviis01.muki.com\\MUKI; Initial Catalog = Eurotax; Persist Security Info = True; User ID = eurotax; Password = Edinisone814"))
            using (var cmd = new SqlCommand(
                "SELECT	TOP 1 " +
                "       ph.PRHNatCode, ph.PRHNP1, ph.PRHVal, SUBSTRING(ph.PRHRecDate, 0, 5)," +
                "       ty.TYPName, ty.TYPNatCode, ty.TYPModCd, ty.TYPMakeCd, ty.TYPKW, ty.TYPHP, ty.TYPDoor, ty.TYPCylinder, ty.TYPSeat, ty.TYPTXTFuelTypeCd2, ty.TYPTotWgt, ty.TYPCurbWgt, " +
                "       mo.MODName, mo.MODMakCd, mo.MODImpBegin, mo.MODImpEnd, CAST(SUBSTRING(mo.MODImpBegin, 0, 5) AS int) AS ImportStart, CAST(SUBSTRING(mo.MODImpEnd, 0, 5) AS int) AS ImportEnde," +
                "       ma.MAKName, " +
                "       txtFuelType1.TXTTextLong as TXTTextLongFuelTyp1, " +
                "       txtFuelType2.TXTTextLong as TXTTextLongFuelTyp2 " +
                "FROM [Eurotax].[dbo].[PRICEHistory] AS ph " +
                "     JOIN [Eurotax].[dbo].[TYPE] As ty ON ph.PRHNatCode = ty.TYPNatCode AND ph.PRHVehType = ty.TYPVehType " +
                "     JOIN [Eurotax].[dbo].[MODEL] As mo ON ty.TYPModCd = mo.MODNatCode AND ty.TYPVehType = mo.MODVehType " +
                "     JOIN [Eurotax].[dbo].[MAKE] As ma ON mo.MODMakCd = ma.MAKNatCode AND mo.MODVehType = ma.MAKVehType " +
                "     JOIN [Eurotax].[dbo].[TXTTABEL] As txtFuelType1 ON ty.TYPTXTFuelTypeCd2 = txtFuelType1.TXTCode " +
                "     JOIN [Eurotax].[dbo].[TXTTABEL] As txtFuelType2 ON ty.TYPSecFuelTypCd2 = txtFuelType2.TXTCode " +
                "WHERE ph.PRHVehType = @typ AND ph.PRHNatCode = @natCode AND CAST(SUBSTRING(ph.PRHVal, 1, 6) AS int) <= @baujahr " +
                "ORDER BY PRHVal desc", con))
            {
                cmd.Parameters.AddWithValue("typ", Int32.Parse(vehTyp));
                cmd.Parameters.AddWithValue("natCode", Int32.Parse(natCode));
                cmd.Parameters.AddWithValue("baujahr", baujahr);
                //
                var dt = new DataTable();
                using (var da = new SqlDataAdapter(cmd))
                {
                    da.Fill(dt);
                    foreach (DataRow row in dt.Rows)
                    {
                        Fahrzeug fahrzeug = new Fahrzeug();
                        fahrzeug.Marke = row["MAKName"].ToString().Trim();
                        fahrzeug.Modell = row["MODName"].ToString().Trim();
                        fahrzeug.Typ = row["TYPName"].ToString().Trim();
                        fahrzeug.Name = row["MAKName"].ToString().Trim() + ' ' + row["MODName"].ToString().Trim() + ' ' + row["TYPName"].ToString().Trim();
                        fahrzeug.NationalCode = row["TYPNatCode"].ToString().Trim();
                        fahrzeug.Kw = row["TYPKW"].ToString().Trim();
                        fahrzeug.Ps = row["TYPHP"].ToString().Trim();
                        fahrzeug.Tueren = row["TYPDoor"].ToString().Trim();
                        fahrzeug.Zylinder = row["TYPCylinder"].ToString().Trim();
                        fahrzeug.Sitze = row["TYPSeat"].ToString().Trim();
                        fahrzeug.Antrieb1 = row["TXTTextLongFuelTyp1"].ToString().Trim();
                        if (row["TXTTextLongFuelTyp2"].ToString().Trim() != "keine Verknüpfung  (0010)")
                        {
                            fahrzeug.Antrieb2 = " / " + row["TXTTextLongFuelTyp2"].ToString().Trim();
                        }
                        else
                        {
                            fahrzeug.Antrieb2 = "";
                        }
                        fahrzeug.ImportStart = row["ImportStart"].ToString().Trim();
                        fahrzeug.ImportEnde = row["ImportEnde"].ToString().Trim();
                        fahrzeug.PreisAb = row["PRHVal"].ToString().Trim();
                        fahrzeug.Neupreis = row["PRHNP1"].ToString().Trim();
                        fahrzeug.Leergewicht = (int)row["TYPCurbWgt"];
                        fahrzeug.Nutzlast = (int)row["TYPTotWgt"] - (int)row["TYPCurbWgt"];
                        fahrzeug.Gesamtgewicht = (int)row["TYPTotWgt"];
                        fahrzeuge.Add(fahrzeug);
                    }
                }
            }
            return Json(fahrzeuge);
        }
        #endregion

        #region ### Helper ###
        // Kfz Parameter
        private Pkw AssignParameterToKfz(KfzViewModel_Pkw model)
        {
            Pkw kfz = new Pkw();

            kfz.Id = model.id;
            kfz.Vertrag = model.vertrag;
            kfz.Fahrzeug = model.fahrzeug;
            kfz.PolNr = model.polNr;
            kfz.Versicherungsbeginn = Convert.ToDateTime(model.versicherungsbeginn);
            kfz.Wunschhauptfaelligkeit = model.wunschhauptfaelligkeit;
            // Eingabeart
            switch (model.eingabeArt)
            {
                case 1:
                    kfz.EingabeArt = EnumEingabeArt.Natcode;
                    break;
                case 2:
                    kfz.EingabeArt = EnumEingabeArt.MarkeModell;
                    break;
                case 3:
                    kfz.EingabeArt = EnumEingabeArt.Manuell;
                    break;
                default:
                    kfz.EingabeArt = EnumEingabeArt.Manuell;
                    break;
            }
            kfz.Typ = model.typ;
            kfz.Marke = model.marke;
            kfz.Modell = model.modell.Trim();
            kfz.NationalCode = model.nationalCode;
            kfz.Kennzeichen = model.kennzeichen;
            kfz.VbNr = model.vbnr;
            kfz.FahrgestellNr = model.fahrgestellNr;
            // ErstzulassungsDatum
            if (model.erstzulassungsDatum != null)
            {
                kfz.ErstzulassungsDatum = Convert.ToDateTime(model.erstzulassungsDatum);
                kfz.Alter = VertragContainer.Vertrag.CalcAlter(Convert.ToDateTime(kfz.ErstzulassungsDatum), Convert.ToDateTime(kfz.Versicherungsbeginn));
            }
            else
            {
                kfz.ErstzulassungsDatum = null;
                kfz.Alter = null;
            }
            // AnmeldeDatum
            if (model.anmeldeDatum != null)
            {
                kfz.AnmeldeDatum = Convert.ToDateTime(model.anmeldeDatum);
            }
            else
            {
                kfz.AnmeldeDatum = null;
            }
            // Antrieb
            switch (model.antrieb)
            {
                case 1:
                    kfz.Antrieb = EnumAntrieb.Benzin;
                    break;
                case 2:
                    kfz.Antrieb = EnumAntrieb.Diesel;
                    break;
                case 3:
                    kfz.Antrieb = EnumAntrieb.Hybrid;
                    break;
                case 4:
                    kfz.Antrieb = EnumAntrieb.Elektro;
                    break;
                default:
                    kfz.Antrieb = EnumAntrieb.None;
                    break;
            }
            kfz.Leistung = model.leistung;
            // Listenpreis
            if (model.listenpreis != null && model.listenpreis != string.Empty)
            {
                kfz.Listenpreis = Convert.ToDouble(model.listenpreis);
            }
            else
            {
                kfz.Listenpreis = null;
            }
            // Sonderausstattung
            if (model.sonderausstattung != null && model.sonderausstattung != string.Empty)
            {
                kfz.Sonderausstattung = Convert.ToDouble(model.sonderausstattung);
            }
            else
            {
                kfz.Sonderausstattung = null;
            }
            // Folierung
            if (model.folierung != null && model.folierung != string.Empty)
            {
                kfz.Folierung = Convert.ToDouble(model.folierung);
            }
            else
            {
                kfz.Folierung = null;
            }
            // Gesamtpreis
            if ((model.listenpreis != null && model.listenpreis != string.Empty) ||
                (model.sonderausstattung != null && model.sonderausstattung != string.Empty) ||
                (model.folierung != null && model.folierung != string.Empty))
            {
                kfz.Gesamtpreis = Convert.ToDouble(model.listenpreis) + Convert.ToDouble(model.sonderausstattung) + Convert.ToDouble(model.folierung);
            }
            kfz.Bonusstufe = model.bonusstufe;
            kfz.HasKat = model.hasKat;
            kfz.HasSitze7Plus = model.hasSitze7Plus;
            kfz.IsOldtimer = model.isOldtimer;
            kfz.IsSteuerbefreit = model.isSteuerbefreit;
            // Fehlerkennzeichen
            // Haftpflicht
            kfz.HasErrorHaftpflicht_KfzMarke = model.hasErrorHaftpflicht_KfzMarke;
            // Kasko
            kfz.HasErrorKasko_KfzMarke = model.hasErrorKasko_KfzMarke;
            kfz.HasErrorKasko_KfzGesamtpreis = model.hasErrorKasko_KfzGesamtpreis;
            kfz.HasErrorKasko_KfzAlter5 = model.hasErrorKasko_KfzAlter5;
            kfz.HasErrorKasko_KfzAlter8 = model.hasErrorKasko_KfzAlter8;
            // Antragsfragen
            // BonusMalus
            kfz.Antragsfragen.IsBonusMalus = model.antragsfragen.isBonusMalus;
            kfz.Antragsfragen.BonusMalusVersicherer = model.antragsfragen.bonusMalusVersicherer;
            kfz.Antragsfragen.BonusMalusPolNr = model.antragsfragen.bonusMalusPolNr;
            kfz.Antragsfragen.BonusMalusBeendetAm = model.antragsfragen.bonusMalusBeendetAm;
            kfz.Antragsfragen.BonusMalusWegen = model.antragsfragen.bonusMalusWegen;
            // Abgelehnt
            kfz.Antragsfragen.IsAbgelehnt = model.antragsfragen.isAbgelehnt;
            kfz.Antragsfragen.AbgelehntGrund = model.antragsfragen.abgelehntGrund;
            kfz.Antragsfragen.AbgelehntUnternehmen = model.antragsfragen.abgelehntUnternehmen;
            // Kasko
            kfz.Antragsfragen.IsKasko = model.antragsfragen.isKasko;
            kfz.Antragsfragen.KaskoGrund = model.antragsfragen.kaskoGrund;
            kfz.Antragsfragen.KaskoHasSchaden = model.antragsfragen.kaskoHasSchaden;
            kfz.Antragsfragen.KaskoSchadenWelche = model.antragsfragen.kaskoSchadenWelche;
            // Vinkulierung
            kfz.Antragsfragen.HasVinkulierung = model.antragsfragen.hasVinkulierung;
            kfz.Antragsfragen.VinkulierungZuGunsten = model.antragsfragen.vinkulierungZuGunsten;
            // Produkte
            // Haftpflicht
            if (model.produkte.hasHaftpflicht && model.produkte.haftpflicht != null)
            {
                kfz.Produkte.HasHaftpflicht = model.produkte.hasHaftpflicht;
                kfz.Produkte.Haftpflicht = new Haftpflicht_Pkw();
                // Tarif
                switch (model.produkte.haftpflicht.tarif)
                {
                    case 1:
                        kfz.Produkte.Haftpflicht.Tarif = EnumHaftpflichtTarif.Hp1;
                        break;
                    case 2:
                        kfz.Produkte.Haftpflicht.Tarif = EnumHaftpflichtTarif.Hp2;
                        break;
                    default:
                        kfz.Produkte.Haftpflicht.Tarif = EnumHaftpflichtTarif.Hp1;
                        break;
                }
                // Versicherungssumme
                switch (model.produkte.haftpflicht.versSum)
                {
                    case 1:
                        // Pkw nicht vorhanden
                        break;
                    case 2:
                        // Pkw nicht vorhanden
                        break;
                    case 3:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs3;
                        break;
                    default:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs3;
                        break;
                }
                // Variante
                switch (model.produkte.haftpflicht.variante)
                {
                    case 1:
                        kfz.Produkte.Haftpflicht.Variante = EnumHaftpflichtVariante.A;
                        break;
                    case 2:
                        kfz.Produkte.Haftpflicht.Variante = EnumHaftpflichtVariante.B;
                        break;
                    default:
                        kfz.Produkte.Haftpflicht.Variante = EnumHaftpflichtVariante.A;
                        break;
                }
                // Assistance
                kfz.Produkte.Haftpflicht.HasAssistance = model.produkte.haftpflicht.hasAssistance;
            }
            else
            {
                kfz.Produkte.HasHaftpflicht = model.produkte.hasHaftpflicht;
                kfz.Produkte.Haftpflicht = null;
            }

            // Kasko
            if (model.produkte.hasKasko && model.produkte.kasko != null)
            {
                kfz.Produkte.HasKasko = model.produkte.hasKasko;
                kfz.Produkte.Kasko = new Kasko_Pkw_Lkw();
                // Tarif
                switch (model.produkte.kasko.tarif)
                {
                    case 1:
                        kfz.Produkte.Kasko.Tarif = EnumKaskoTarif.Kk1;
                        break;
                    case 2:
                        kfz.Produkte.Kasko.Tarif = EnumKaskoTarif.Kk2;
                        break;
                    case 3:
                        kfz.Produkte.Kasko.Tarif = EnumKaskoTarif.Kk3;
                        break;
                    case 4:
                        kfz.Produkte.Kasko.Tarif = EnumKaskoTarif.Kk4;
                        break;
                    default:
                        kfz.Produkte.Kasko.Tarif = EnumKaskoTarif.None;
                        break;
                }
                // Selbstbehalt
                switch (model.produkte.kasko.selbstbehalt)
                {
                    case 1:
                        kfz.Produkte.Kasko.Selbstbehalt = EnumKaskoSelbstbehalt.Sb1;
                        break;
                    case 2:
                        kfz.Produkte.Kasko.Selbstbehalt = EnumKaskoSelbstbehalt.Sb2;
                        break;
                    case 3:
                        kfz.Produkte.Kasko.Selbstbehalt = EnumKaskoSelbstbehalt.Sb3;
                        break;
                    default:
                        kfz.Produkte.Kasko.Selbstbehalt = EnumKaskoSelbstbehalt.None;
                        break;
                }
                // FiftyFiftyPackage
                kfz.Produkte.Kasko.HasFifty = model.produkte.kasko.hasFifty;
                // GAP Deckung
                kfz.Produkte.Kasko.HasGap = model.produkte.kasko.hasGap;
                // KNT Deckung
                kfz.Produkte.Kasko.HasKnt = model.produkte.kasko.hasKnt;
                // Elektropaket
                kfz.Produkte.Kasko.HasElektropaket = model.produkte.kasko.hasElektropaket;
            }
            else
            {
                kfz.Produkte.HasKasko = model.produkte.hasKasko;
                kfz.Produkte.Kasko = null;
            }

            // Rechtsschutz
            if (model.produkte.hasRechtsschutz && model.produkte.rechtsschutz != null)
            {
                kfz.Produkte.HasRechtsschutz = model.produkte.hasRechtsschutz;
                kfz.Produkte.Rechtsschutz = new Rechtsschutz();
            }
            else
            {
                kfz.Produkte.HasRechtsschutz = model.produkte.hasRechtsschutz;
                kfz.Produkte.Rechtsschutz = null;
            }

            // Insassen
            if (model.produkte.hasInsassen && model.produkte.insassen != null)
            {
                kfz.Produkte.HasInsassen = model.produkte.hasInsassen;
                kfz.Produkte.Insassen = new Insassen();
            }
            else
            {
                kfz.Produkte.HasInsassen = model.produkte.hasInsassen;
                kfz.Produkte.Insassen = null;
            }

            return kfz;
        }

        private Lkw AssignParameterToKfz(KfzViewModel_Lkw model)
        {
            Lkw kfz = new Lkw();

            kfz.Id = model.id;
            kfz.Vertrag = model.vertrag;
            kfz.Fahrzeug = model.fahrzeug;
            kfz.PolNr = model.polNr;
            kfz.Versicherungsbeginn = Convert.ToDateTime(model.versicherungsbeginn);
            kfz.Wunschhauptfaelligkeit = model.wunschhauptfaelligkeit;
            // Eingabeart
            switch (model.eingabeArt)
            {
                case 1:
                    kfz.EingabeArt = EnumEingabeArt.Natcode;
                    break;
                case 2:
                    kfz.EingabeArt = EnumEingabeArt.MarkeModell;
                    break;
                case 3:
                    kfz.EingabeArt = EnumEingabeArt.Manuell;
                    break;
                default:
                    kfz.EingabeArt = EnumEingabeArt.Manuell;
                    break;
            }
            kfz.Typ = model.typ;
            kfz.Marke = model.marke;
            kfz.Modell = model.modell.Trim();
            kfz.NationalCode = model.nationalCode;
            kfz.Kennzeichen = model.kennzeichen;
            kfz.VbNr = model.vbnr;
            kfz.FahrgestellNr = model.fahrgestellNr;
            // ErstzulassungsDatum
            if (model.erstzulassungsDatum != null)
            {
                kfz.ErstzulassungsDatum = Convert.ToDateTime(model.erstzulassungsDatum);
                kfz.Alter = VertragContainer.Vertrag.CalcAlter(Convert.ToDateTime(kfz.ErstzulassungsDatum), Convert.ToDateTime(kfz.Versicherungsbeginn));
            }
            else
            {
                kfz.ErstzulassungsDatum = null;
                kfz.Alter = null;
            }
            // AnmeldeDatum
            if (model.anmeldeDatum != null)
            {
                kfz.AnmeldeDatum = Convert.ToDateTime(model.anmeldeDatum);
            }
            else
            {
                kfz.AnmeldeDatum = null;
            }
            // Antrieb
            switch (model.antrieb)
            {
                case 1:
                    kfz.Antrieb = EnumAntrieb.Benzin;
                    break;
                case 2:
                    kfz.Antrieb = EnumAntrieb.Diesel;
                    break;
                case 3:
                    kfz.Antrieb = EnumAntrieb.Hybrid;
                    break;
                case 4:
                    kfz.Antrieb = EnumAntrieb.Elektro;
                    break;
                default:
                    kfz.Antrieb = EnumAntrieb.None;
                    break;
            }
            kfz.Leistung = model.leistung;
            kfz.Nutzlast = model.nutzlast;
            kfz.Gesamtgewicht = model.gesamtgewicht;
            // Listenpreis
            if (model.listenpreis != null)
            {
                kfz.Listenpreis = Convert.ToDouble(model.listenpreis);
            }
            else
            {
                kfz.Listenpreis = null;
            }
            // Sonderausstattung
            if (model.sonderausstattung != null)
            {
                kfz.Sonderausstattung = Convert.ToDouble(model.sonderausstattung);
            }
            else
            {
                kfz.Sonderausstattung = null;
            }
            // Folierung
            if (model.folierung != null && model.folierung != string.Empty)
            {
                kfz.Folierung = Convert.ToDouble(model.folierung);
            }
            else
            {
                kfz.Folierung = null;
            }
            // Gesamtpreis
            if ((model.listenpreis != null && model.listenpreis != string.Empty) ||
                (model.sonderausstattung != null && model.sonderausstattung != string.Empty) ||
                (model.folierung != null && model.folierung != string.Empty))
            {
                kfz.Gesamtpreis = Convert.ToDouble(model.listenpreis) + Convert.ToDouble(model.sonderausstattung) + Convert.ToDouble(model.folierung);
            }
            kfz.Bonusstufe = model.bonusstufe;
            kfz.IsSteuerbefreit = model.isSteuerbefreit;
            // Fehlerkennzeichen
            // Haftpflicht
            kfz.HasErrorHaftpflicht_KfzMarke = model.hasErrorHaftpflicht_KfzMarke;
            // Kasko
            kfz.HasErrorKasko_KfzMarke = model.hasErrorKasko_KfzMarke;
            kfz.HasErrorKasko_KfzGesamtpreis = model.hasErrorKasko_KfzGesamtpreis;
            kfz.HasErrorKasko_KfzAlter5 = model.hasErrorKasko_KfzAlter5;
            kfz.HasErrorKasko_KfzAlter8 = model.hasErrorKasko_KfzAlter8;
            // Antragsfragen
            // BonusMalus
            kfz.Antragsfragen.IsBonusMalus = model.antragsfragen.isBonusMalus;
            kfz.Antragsfragen.BonusMalusVersicherer = model.antragsfragen.bonusMalusVersicherer;
            kfz.Antragsfragen.BonusMalusPolNr = model.antragsfragen.bonusMalusPolNr;
            kfz.Antragsfragen.BonusMalusBeendetAm = model.antragsfragen.bonusMalusBeendetAm;
            kfz.Antragsfragen.BonusMalusWegen = model.antragsfragen.bonusMalusWegen;
            // Abgelehnt
            kfz.Antragsfragen.IsAbgelehnt = model.antragsfragen.isAbgelehnt;
            kfz.Antragsfragen.AbgelehntGrund = model.antragsfragen.abgelehntGrund;
            kfz.Antragsfragen.AbgelehntUnternehmen = model.antragsfragen.abgelehntUnternehmen;
            // Kasko
            kfz.Antragsfragen.IsKasko = model.antragsfragen.isKasko;
            kfz.Antragsfragen.KaskoGrund = model.antragsfragen.kaskoGrund;
            kfz.Antragsfragen.KaskoHasSchaden = model.antragsfragen.kaskoHasSchaden;
            kfz.Antragsfragen.KaskoSchadenWelche = model.antragsfragen.kaskoSchadenWelche;
            // Produkte
            // Haftpflicht
            if (model.produkte.hasHaftpflicht && model.produkte.haftpflicht != null)
            {
                kfz.Produkte.HasHaftpflicht = model.produkte.hasHaftpflicht;
                kfz.Produkte.Haftpflicht = new Haftpflicht_Lkw();
                // Tarif
                switch (model.produkte.haftpflicht.tarif)
                {
                    case 1:
                        kfz.Produkte.Haftpflicht.Tarif = EnumHaftpflichtTarif.Hp1;
                        break;
                    case 2:
                        kfz.Produkte.Haftpflicht.Tarif = EnumHaftpflichtTarif.Hp2;
                        break;
                    default:
                        kfz.Produkte.Haftpflicht.Tarif = EnumHaftpflichtTarif.Hp1;
                        break;
                }
                // Versicherungssumme
                switch (model.produkte.haftpflicht.versSum)
                {
                    case 1:
                        // Lkw nicht vorhanden
                        break;
                    case 2:
                        // Lkw nicht vorhanden
                        break;
                    case 3:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs3;
                        break;
                    default:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs3;
                        break;
                }
                // Assistance
                kfz.Produkte.Haftpflicht.HasAssistance = model.produkte.haftpflicht.hasAssistance;
            }
            else
            {
                kfz.Produkte.HasHaftpflicht = model.produkte.hasHaftpflicht;
                kfz.Produkte.Haftpflicht = null;
            }

            // Kasko
            if (model.produkte.hasKasko && model.produkte.kasko != null)
            {
                kfz.Produkte.HasKasko = model.produkte.hasKasko;
                kfz.Produkte.Kasko = new Kasko_Pkw_Lkw();
                // Tarif
                switch (model.produkte.kasko.tarif)
                {
                    case 1:
                        kfz.Produkte.Kasko.Tarif = EnumKaskoTarif.Kk1;
                        break;
                    case 2:
                        kfz.Produkte.Kasko.Tarif = EnumKaskoTarif.Kk2;
                        break;
                    case 3:
                        kfz.Produkte.Kasko.Tarif = EnumKaskoTarif.Kk3;
                        break;
                    case 4:
                        kfz.Produkte.Kasko.Tarif = EnumKaskoTarif.Kk4;
                        break;
                    default:
                        kfz.Produkte.Kasko.Tarif = EnumKaskoTarif.None;
                        break;
                }
                // Selbstbehalt
                switch (model.produkte.kasko.selbstbehalt)
                {
                    case 1:
                        kfz.Produkte.Kasko.Selbstbehalt = EnumKaskoSelbstbehalt.Sb1;
                        break;
                    case 2:
                        kfz.Produkte.Kasko.Selbstbehalt = EnumKaskoSelbstbehalt.Sb2;
                        break;
                    case 3:
                        kfz.Produkte.Kasko.Selbstbehalt = EnumKaskoSelbstbehalt.Sb3;
                        break;
                    default:
                        kfz.Produkte.Kasko.Selbstbehalt = EnumKaskoSelbstbehalt.None;
                        break;
                }
                // FiftyFiftyPackage
                kfz.Produkte.Kasko.HasFifty = model.produkte.kasko.hasFifty;
                // GAP Deckung
                kfz.Produkte.Kasko.HasGap = model.produkte.kasko.hasGap;
                // KNT Deckung
                kfz.Produkte.Kasko.HasKnt = model.produkte.kasko.hasKnt;
            }
            else
            {
                kfz.Produkte.HasKasko = model.produkte.hasKasko;
                kfz.Produkte.Kasko = null;
            }

            // Rechtsschutz
            if (model.produkte.hasRechtsschutz && model.produkte.rechtsschutz != null)
            {
                kfz.Produkte.HasRechtsschutz = model.produkte.hasRechtsschutz;
                kfz.Produkte.Rechtsschutz = new Rechtsschutz();
            }
            else
            {
                kfz.Produkte.HasRechtsschutz = model.produkte.hasRechtsschutz;
                kfz.Produkte.Rechtsschutz = null;
            }

            // Insassen
            if (model.produkte.hasInsassen && model.produkte.insassen != null)
            {
                kfz.Produkte.HasInsassen = model.produkte.hasInsassen;
                kfz.Produkte.Insassen = new Insassen();
            }
            else
            {
                kfz.Produkte.HasInsassen = model.produkte.hasInsassen;
                kfz.Produkte.Insassen = null;
            }

            return kfz;
        }

        private Motorrad AssignParameterToKfz(KfzViewModel_Motorrad model)
        {
            Motorrad kfz = new Motorrad();

            kfz.Id = model.id;
            kfz.Vertrag = model.vertrag;
            kfz.Fahrzeug = model.fahrzeug;
            kfz.PolNr = model.polNr;
            kfz.Versicherungsbeginn = Convert.ToDateTime(model.versicherungsbeginn);
            kfz.Wunschhauptfaelligkeit = model.wunschhauptfaelligkeit;
            kfz.Typ = model.typ;
            kfz.Marke = model.marke;
            kfz.Modell = model.modell.Trim();
            kfz.Kennzeichen = model.kennzeichen;
            kfz.VbNr = model.vbnr;
            kfz.FahrgestellNr = model.fahrgestellNr;
            // ErstzulassungsDatum
            if (model.erstzulassungsDatum != null)
            {
                kfz.ErstzulassungsDatum = Convert.ToDateTime(model.erstzulassungsDatum);
                kfz.Alter = VertragContainer.Vertrag.CalcAlter(Convert.ToDateTime(kfz.ErstzulassungsDatum), Convert.ToDateTime(kfz.Versicherungsbeginn));
            }
            else
            {
                kfz.ErstzulassungsDatum = null;
                kfz.Alter = null;
            }
            // AnmeldeDatum
            if (model.anmeldeDatum != null)
            {
                kfz.AnmeldeDatum = Convert.ToDateTime(model.anmeldeDatum);
            }
            else
            {
                kfz.AnmeldeDatum = null;
            }
            // Antrieb
            switch (model.antrieb)
            {
                case 1:
                    kfz.Antrieb = EnumAntrieb.Benzin;
                    break;
                case 2:
                    kfz.Antrieb = EnumAntrieb.Diesel;
                    break;
                case 3:
                    kfz.Antrieb = EnumAntrieb.Hybrid;
                    break;
                case 4:
                    kfz.Antrieb = EnumAntrieb.Elektro;
                    break;
                default:
                    kfz.Antrieb = EnumAntrieb.None;
                    break;
            }
            kfz.Hubraum = model.hubraum;
            // Listenpreis
            if (model.listenpreis != null || model.listenpreis != string.Empty)
            {
                kfz.Listenpreis = Convert.ToDouble(model.listenpreis);
            }
            else
            {
                kfz.Listenpreis = null;
            }
            // Sonderausstattung
            if (model.sonderausstattung != null || model.sonderausstattung != string.Empty)
            {
                kfz.Sonderausstattung = Convert.ToDouble(model.sonderausstattung);
            }
            else
            {
                kfz.Sonderausstattung = null;
            }
            // Gesamtpreis
            if ((model.listenpreis != null && model.listenpreis != string.Empty) ||
                (model.sonderausstattung != null && model.sonderausstattung != string.Empty))
            {
                kfz.Gesamtpreis = Convert.ToDouble(model.listenpreis) + Convert.ToDouble(model.sonderausstattung);
            }
            kfz.IsOldtimer = model.isOldtimer;
            kfz.IsSteuerbefreit = model.isSteuerbefreit;
            // Fehlerkennzeichen
            // Kasko
            kfz.HasErrorKasko_KfzGesamtpreis = model.hasErrorKasko_KfzGesamtpreis;
            kfz.HasErrorKasko_KfzAlter5 = model.hasErrorKasko_KfzAlter5;
            kfz.HasErrorKasko_KfzAlter8 = model.hasErrorKasko_KfzAlter8;
            // Antragsfragen
            // Abgelehnt
            kfz.Antragsfragen.IsAbgelehnt = model.antragsfragen.isAbgelehnt;
            kfz.Antragsfragen.AbgelehntGrund = model.antragsfragen.abgelehntGrund;
            kfz.Antragsfragen.AbgelehntUnternehmen = model.antragsfragen.abgelehntUnternehmen;
            // Kasko
            kfz.Antragsfragen.IsKasko = model.antragsfragen.isKasko;
            kfz.Antragsfragen.KaskoGrund = model.antragsfragen.kaskoGrund;
            kfz.Antragsfragen.KaskoHasSchaden = model.antragsfragen.kaskoHasSchaden;
            kfz.Antragsfragen.KaskoSchadenWelche = model.antragsfragen.kaskoSchadenWelche;
            // Produkte
            // Haftpflicht
            if (model.produkte.hasHaftpflicht && model.produkte.haftpflicht != null)
            {
                kfz.Produkte.HasHaftpflicht = model.produkte.hasHaftpflicht;
                kfz.Produkte.Haftpflicht = new Haftpflicht();
                // Versicherungssumme
                switch (model.produkte.haftpflicht.versSum)
                {
                    case 1:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1;
                        break;
                    case 2:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs2;
                        break;
                    default:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1;
                        break;
                }
            }

            // Kasko
            if (model.produkte.hasKasko && model.produkte.kasko != null)
            {
                kfz.Produkte.HasKasko = model.produkte.hasKasko;
                kfz.Produkte.Kasko = new Kasko_Motorrad();
                // Tarif
                switch (model.produkte.kasko.tarif)
                {
                    case 5:
                        kfz.Produkte.Kasko.Tarif = EnumKaskoTarif.Kk5;
                        break;
                    case 6:
                        kfz.Produkte.Kasko.Tarif = EnumKaskoTarif.Kk6;
                        break;
                    default:
                        kfz.Produkte.Kasko.Tarif = EnumKaskoTarif.None;
                        break;
                }
            }
            else
            {
                kfz.Produkte.HasKasko = model.produkte.hasKasko;
                kfz.Produkte.Kasko = null;
            }

            // Rechtsschutz
            if (model.produkte.hasRechtsschutz && model.produkte.rechtsschutz != null)
            {
                kfz.Produkte.HasRechtsschutz = model.produkte.hasRechtsschutz;
                kfz.Produkte.Rechtsschutz = new Rechtsschutz();
            }
            else
            {
                kfz.Produkte.HasRechtsschutz = model.produkte.hasRechtsschutz;
                kfz.Produkte.Rechtsschutz = null;
            }

            // keine Insassen

            return kfz;
        }

        private Moped AssignParameterToKfz(KfzViewModel_Moped model)
        {
            Moped kfz = new Moped();

            kfz.Id = model.id;
            kfz.Vertrag = model.vertrag;
            kfz.Fahrzeug = model.fahrzeug;
            kfz.PolNr = model.polNr;
            kfz.Versicherungsbeginn = Convert.ToDateTime(model.versicherungsbeginn);
            kfz.Wunschhauptfaelligkeit = model.wunschhauptfaelligkeit;
            kfz.Typ = model.typ;
            kfz.Marke = model.marke;
            kfz.Modell = model.modell.Trim();
            kfz.Kennzeichen = model.kennzeichen;
            kfz.VbNr = model.vbnr;
            kfz.FahrgestellNr = model.fahrgestellNr;
            // ErstzulassungsDatum
            if (model.erstzulassungsDatum != null)
            {
                kfz.ErstzulassungsDatum = Convert.ToDateTime(model.erstzulassungsDatum);
                kfz.Alter = VertragContainer.Vertrag.CalcAlter(Convert.ToDateTime(kfz.ErstzulassungsDatum), Convert.ToDateTime(kfz.Versicherungsbeginn));
            }
            else
            {
                kfz.ErstzulassungsDatum = null;
                kfz.Alter = null;
            }
            // AnmeldeDatum
            if (model.anmeldeDatum != null)
            {
                kfz.AnmeldeDatum = Convert.ToDateTime(model.anmeldeDatum);
            }
            else
            {
                kfz.AnmeldeDatum = null;
            }
            // Antrieb
            switch (model.antrieb)
            {
                case 1:
                    kfz.Antrieb = EnumAntrieb.Benzin;
                    break;
                case 2:
                    kfz.Antrieb = EnumAntrieb.Diesel;
                    break;
                case 3:
                    kfz.Antrieb = EnumAntrieb.Hybrid;
                    break;
                case 4:
                    kfz.Antrieb = EnumAntrieb.Elektro;
                    break;
                default:
                    kfz.Antrieb = EnumAntrieb.None;
                    break;
            }
            kfz.Hubraum = model.hubraum;
            kfz.Sitzplaetze = model.sitzplaetze;
            // Antragsfragen
            // Abgelehnt
            kfz.Antragsfragen.IsAbgelehnt = model.antragsfragen.isAbgelehnt;
            kfz.Antragsfragen.AbgelehntGrund = model.antragsfragen.abgelehntGrund;
            kfz.Antragsfragen.AbgelehntUnternehmen = model.antragsfragen.abgelehntUnternehmen;
            // Produkte
            // Haftpflicht
            if (model.produkte.hasHaftpflicht && model.produkte.haftpflicht != null)
            {
                kfz.Produkte.HasHaftpflicht = model.produkte.hasHaftpflicht;
                kfz.Produkte.Haftpflicht = new Haftpflicht();
                // Versicherungssumme
                switch (model.produkte.haftpflicht.versSum)
                {
                    case 1:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1;
                        break;
                    case 2:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs2;
                        break;
                    default:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1;
                        break;
                }
            }

            // keine Kasko

            // Rechtsschutz
            if (model.produkte.hasRechtsschutz && model.produkte.rechtsschutz != null)
            {
                kfz.Produkte.HasRechtsschutz = model.produkte.hasRechtsschutz;
                kfz.Produkte.Rechtsschutz = new Rechtsschutz();
            }
            else
            {
                kfz.Produkte.HasRechtsschutz = model.produkte.hasRechtsschutz;
                kfz.Produkte.Rechtsschutz = null;
            }

            // keine Insassen

            return kfz;
        }

        private Dreirad AssignParameterToKfz(KfzViewModel_Dreirad model)
        {
            Dreirad kfz = new Dreirad();

            kfz.Id = model.id;
            kfz.Vertrag = model.vertrag;
            kfz.Fahrzeug = model.fahrzeug;
            kfz.PolNr = model.polNr;
            kfz.Versicherungsbeginn = Convert.ToDateTime(model.versicherungsbeginn);
            kfz.Wunschhauptfaelligkeit = model.wunschhauptfaelligkeit;
            kfz.Typ = model.typ;
            kfz.Marke = model.marke;
            kfz.Modell = model.modell.Trim();
            kfz.Kennzeichen = model.kennzeichen;
            kfz.VbNr = model.vbnr;
            kfz.FahrgestellNr = model.fahrgestellNr;
            // ErstzulassungsDatum
            if (model.erstzulassungsDatum != null)
            {
                kfz.ErstzulassungsDatum = Convert.ToDateTime(model.erstzulassungsDatum);
                kfz.Alter = VertragContainer.Vertrag.CalcAlter(Convert.ToDateTime(kfz.ErstzulassungsDatum), Convert.ToDateTime(kfz.Versicherungsbeginn));
            }
            else
            {
                kfz.ErstzulassungsDatum = null;
                kfz.Alter = null;
            }
            // AnmeldeDatum
            if (model.anmeldeDatum != null)
            {
                kfz.AnmeldeDatum = Convert.ToDateTime(model.anmeldeDatum);
            }
            else
            {
                kfz.AnmeldeDatum = null;
            }
            // Antrieb
            switch (model.antrieb)
            {
                case 1:
                    kfz.Antrieb = EnumAntrieb.Benzin;
                    break;
                case 2:
                    kfz.Antrieb = EnumAntrieb.Diesel;
                    break;
                case 3:
                    kfz.Antrieb = EnumAntrieb.Hybrid;
                    break;
                case 4:
                    kfz.Antrieb = EnumAntrieb.Elektro;
                    break;
                default:
                    kfz.Antrieb = EnumAntrieb.None;
                    break;
            }
            kfz.Hubraum = model.hubraum;
            kfz.IsSteuerbefreit = model.isSteuerbefreit;
            // Antragsfragen
            // Abgelehnt
            kfz.Antragsfragen.IsAbgelehnt = model.antragsfragen.isAbgelehnt;
            kfz.Antragsfragen.AbgelehntGrund = model.antragsfragen.abgelehntGrund;
            kfz.Antragsfragen.AbgelehntUnternehmen = model.antragsfragen.abgelehntUnternehmen;
            // Produkte
            // Haftpflicht
            if (model.produkte.hasHaftpflicht && model.produkte.haftpflicht != null)
            {
                kfz.Produkte.HasHaftpflicht = model.produkte.hasHaftpflicht;
                kfz.Produkte.Haftpflicht = new Haftpflicht();
                // Versicherungssumme
                switch (model.produkte.haftpflicht.versSum)
                {
                    case 1:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1;
                        break;
                    case 2:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs2;
                        break;
                    default:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1;
                        break;
                }
            }

            // keine Kasko

            // Rechtsschutz
            if (model.produkte.hasRechtsschutz && model.produkte.rechtsschutz != null)
            {
                kfz.Produkte.HasRechtsschutz = model.produkte.hasRechtsschutz;
                kfz.Produkte.Rechtsschutz = new Rechtsschutz();
            }
            else
            {
                kfz.Produkte.HasRechtsschutz = model.produkte.hasRechtsschutz;
                kfz.Produkte.Rechtsschutz = null;
            }

            // keine Insassen

            return kfz;
        }

        private VierradKl50 AssignParameterToKfz(KfzViewModel_VierradKl50 model)
        {
            VierradKl50 kfz = new VierradKl50();

            kfz.Id = model.id;
            kfz.Vertrag = model.vertrag;
            kfz.Fahrzeug = model.fahrzeug;
            kfz.PolNr = model.polNr;
            kfz.Versicherungsbeginn = Convert.ToDateTime(model.versicherungsbeginn);
            kfz.Wunschhauptfaelligkeit = model.wunschhauptfaelligkeit;
            kfz.Typ = model.typ;
            kfz.Marke = model.marke;
            kfz.Modell = model.modell.Trim();
            kfz.Kennzeichen = model.kennzeichen;
            kfz.VbNr = model.vbnr;
            kfz.FahrgestellNr = model.fahrgestellNr;
            // ErstzulassungsDatum
            if (model.erstzulassungsDatum != null)
            {
                kfz.ErstzulassungsDatum = Convert.ToDateTime(model.erstzulassungsDatum);
                kfz.Alter = VertragContainer.Vertrag.CalcAlter(Convert.ToDateTime(kfz.ErstzulassungsDatum), Convert.ToDateTime(kfz.Versicherungsbeginn));
            }
            else
            {
                kfz.ErstzulassungsDatum = null;
                kfz.Alter = null;
            }
            // AnmeldeDatum
            if (model.anmeldeDatum != null)
            {
                kfz.AnmeldeDatum = Convert.ToDateTime(model.anmeldeDatum);
            }
            else
            {
                kfz.AnmeldeDatum = null;
            }
            // Antrieb
            switch (model.antrieb)
            {
                case 1:
                    kfz.Antrieb = EnumAntrieb.Benzin;
                    break;
                case 2:
                    kfz.Antrieb = EnumAntrieb.Diesel;
                    break;
                case 3:
                    kfz.Antrieb = EnumAntrieb.Hybrid;
                    break;
                case 4:
                    kfz.Antrieb = EnumAntrieb.Elektro;
                    break;
                default:
                    kfz.Antrieb = EnumAntrieb.None;
                    break;
            }
            kfz.Leistung = model.leistung;
            kfz.IsSteuerbefreit = model.isSteuerbefreit;
            // Antragsfragen
            // Abgelehnt
            kfz.Antragsfragen.IsAbgelehnt = model.antragsfragen.isAbgelehnt;
            kfz.Antragsfragen.AbgelehntGrund = model.antragsfragen.abgelehntGrund;
            kfz.Antragsfragen.AbgelehntUnternehmen = model.antragsfragen.abgelehntUnternehmen;
            // Produkte
            // Haftpflicht
            if (model.produkte.hasHaftpflicht && model.produkte.haftpflicht != null)
            {
                kfz.Produkte.HasHaftpflicht = model.produkte.hasHaftpflicht;
                kfz.Produkte.Haftpflicht = new Haftpflicht();
                // Versicherungssumme
                switch (model.produkte.haftpflicht.versSum)
                {
                    case 1:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1;
                        break;
                    case 2:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs2;
                        break;
                    default:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1;
                        break;
                }
            }

            // keine Kasko

            // Rechtsschutz
            if (model.produkte.hasRechtsschutz && model.produkte.rechtsschutz != null)
            {
                kfz.Produkte.HasRechtsschutz = model.produkte.hasRechtsschutz;
                kfz.Produkte.Rechtsschutz = new Rechtsschutz();
            }
            else
            {
                kfz.Produkte.HasRechtsschutz = model.produkte.hasRechtsschutz;
                kfz.Produkte.Rechtsschutz = null;
            }

            return kfz;
        }

        private VierradGr50 AssignParameterToKfz(KfzViewModel_VierradGr50 model)
        {
            VierradGr50 kfz = new VierradGr50();

            kfz.Id = model.id;
            kfz.Vertrag = model.vertrag;
            kfz.Fahrzeug = model.fahrzeug;
            kfz.PolNr = model.polNr;
            kfz.Versicherungsbeginn = Convert.ToDateTime(model.versicherungsbeginn);
            kfz.Wunschhauptfaelligkeit = model.wunschhauptfaelligkeit;
            kfz.Typ = model.typ;
            // Subtyp (ATV/Quad oder Mopedauto)
            switch (model.subtyp)
            {
                case 1:
                    kfz.Subtyp = EnumVierradSubtyp.Atv_Quad;
                    break;
                case 2:
                    kfz.Subtyp = EnumVierradSubtyp.Mopedauto;
                    break;
                default:
                    kfz.Subtyp = EnumVierradSubtyp.None;
                    break;
            }
            kfz.Marke = model.marke;
            kfz.Modell = model.modell.Trim();
            kfz.Kennzeichen = model.kennzeichen;
            kfz.VbNr = model.vbnr;
            kfz.FahrgestellNr = model.fahrgestellNr;
            // ErstzulassungsDatum
            if (model.erstzulassungsDatum != null)
            {
                kfz.ErstzulassungsDatum = Convert.ToDateTime(model.erstzulassungsDatum);
                kfz.Alter = VertragContainer.Vertrag.CalcAlter(Convert.ToDateTime(kfz.ErstzulassungsDatum), Convert.ToDateTime(kfz.Versicherungsbeginn));
            }
            else
            {
                kfz.ErstzulassungsDatum = null;
                kfz.Alter = null;
            }
            // AnmeldeDatum
            if (model.anmeldeDatum != null)
            {
                kfz.AnmeldeDatum = Convert.ToDateTime(model.anmeldeDatum);
            }
            else
            {
                kfz.AnmeldeDatum = null;
            }
            // Antrieb
            switch (model.antrieb)
            {
                case 1:
                    kfz.Antrieb = EnumAntrieb.Benzin;
                    break;
                case 2:
                    kfz.Antrieb = EnumAntrieb.Diesel;
                    break;
                case 3:
                    kfz.Antrieb = EnumAntrieb.Hybrid;
                    break;
                case 4:
                    kfz.Antrieb = EnumAntrieb.Elektro;
                    break;
                default:
                    kfz.Antrieb = EnumAntrieb.None;
                    break;
            }
            kfz.Leistung = model.leistung;
            kfz.IsSteuerbefreit = model.isSteuerbefreit;
            // Antragsfragen
            // Abgelehnt
            kfz.Antragsfragen.IsAbgelehnt = model.antragsfragen.isAbgelehnt;
            kfz.Antragsfragen.AbgelehntGrund = model.antragsfragen.abgelehntGrund;
            kfz.Antragsfragen.AbgelehntUnternehmen = model.antragsfragen.abgelehntUnternehmen;
            // Produkte
            // Haftpflicht
            if (model.produkte.hasHaftpflicht && model.produkte.haftpflicht != null)
            {
                kfz.Produkte.HasHaftpflicht = model.produkte.hasHaftpflicht;
                kfz.Produkte.Haftpflicht = new Haftpflicht_VierradGr50();
                // Versicherungssumme
                switch (model.produkte.haftpflicht.versSum)
                {
                    case 1:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1;
                        break;
                    case 2:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs2;
                        break;
                    default:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1;
                        break;
                }
            }

            // keine Kasko

            // Rechtsschutz
            if (model.produkte.hasRechtsschutz && model.produkte.rechtsschutz != null)
            {
                kfz.Produkte.HasRechtsschutz = model.produkte.hasRechtsschutz;
                kfz.Produkte.Rechtsschutz = new Rechtsschutz();
            }
            else
            {
                kfz.Produkte.HasRechtsschutz = model.produkte.hasRechtsschutz;
                kfz.Produkte.Rechtsschutz = null;
            }

            return kfz;
        }

        private Zugmaschine AssignParameterToKfz(KfzViewModel_Zugmaschine model)
        {
            Zugmaschine kfz = new Zugmaschine();

            kfz.Id = model.id;
            kfz.Vertrag = model.vertrag;
            kfz.Fahrzeug = model.fahrzeug;
            kfz.PolNr = model.polNr;
            kfz.Versicherungsbeginn = Convert.ToDateTime(model.versicherungsbeginn);
            kfz.Wunschhauptfaelligkeit = model.wunschhauptfaelligkeit;
            kfz.Typ = model.typ;
            kfz.Marke = model.marke;
            kfz.Modell = model.modell.Trim();
            kfz.Kennzeichen = model.kennzeichen;
            kfz.VbNr = model.vbnr;
            kfz.FahrgestellNr = model.fahrgestellNr;
            // ErstzulassungsDatum
            if (model.erstzulassungsDatum != null)
            {
                kfz.ErstzulassungsDatum = Convert.ToDateTime(model.erstzulassungsDatum);
                kfz.Alter = VertragContainer.Vertrag.CalcAlter(Convert.ToDateTime(kfz.ErstzulassungsDatum), Convert.ToDateTime(kfz.Versicherungsbeginn));
            }
            else
            {
                kfz.ErstzulassungsDatum = null;
                kfz.Alter = null;
            }
            // AnmeldeDatum
            if (model.anmeldeDatum != null)
            {
                kfz.AnmeldeDatum = Convert.ToDateTime(model.anmeldeDatum);
            }
            else
            {
                kfz.AnmeldeDatum = null;
            }
            // Antrieb
            switch (model.antrieb)
            {
                case 1:
                    kfz.Antrieb = EnumAntrieb.Benzin;
                    break;
                case 2:
                    kfz.Antrieb = EnumAntrieb.Diesel;
                    break;
                case 3:
                    kfz.Antrieb = EnumAntrieb.Hybrid;
                    break;
                case 4:
                    kfz.Antrieb = EnumAntrieb.Elektro;
                    break;
                default:
                    kfz.Antrieb = EnumAntrieb.None;
                    break;
            }
            kfz.Leistung = model.leistung;
            kfz.Geschwindigkeit = model.geschwindigkeit;
            // Antragsfragen
            // Abgelehnt
            kfz.Antragsfragen.IsAbgelehnt = model.antragsfragen.isAbgelehnt;
            kfz.Antragsfragen.AbgelehntGrund = model.antragsfragen.abgelehntGrund;
            kfz.Antragsfragen.AbgelehntUnternehmen = model.antragsfragen.abgelehntUnternehmen;
            // Produkte
            // Haftpflicht
            if (model.produkte.hasHaftpflicht && model.produkte.haftpflicht != null)
            {
                kfz.Produkte.HasHaftpflicht = model.produkte.hasHaftpflicht;
                kfz.Produkte.Haftpflicht = new Haftpflicht();
                // Versicherungssumme
                switch (model.produkte.haftpflicht.versSum)
                {
                    case 1:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1;
                        break;
                    case 2:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs2;
                        break;
                    default:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1;
                        break;
                }
            }

            // keine Kasko

            // Rechtsschutz
            if (model.produkte.hasRechtsschutz && model.produkte.rechtsschutz != null)
            {
                kfz.Produkte.HasRechtsschutz = model.produkte.hasRechtsschutz;
                kfz.Produkte.Rechtsschutz = new Rechtsschutz();
            }
            else
            {
                kfz.Produkte.HasRechtsschutz = model.produkte.hasRechtsschutz;
                kfz.Produkte.Rechtsschutz = null;
            }

            // Insassen

            return kfz;
        }

        private Anhaenger AssignParameterToKfz(KfzViewModel_Anhaenger model)
        {
            Anhaenger kfz = new Anhaenger();

            kfz.Id = model.id;
            kfz.Vertrag = model.vertrag;
            kfz.Fahrzeug = model.fahrzeug;
            kfz.PolNr = model.polNr;
            kfz.Versicherungsbeginn = Convert.ToDateTime(model.versicherungsbeginn);
            kfz.Wunschhauptfaelligkeit = model.wunschhauptfaelligkeit;
            kfz.Typ = model.typ;
            kfz.Marke = model.marke;
            kfz.Modell = model.modell.Trim();
            kfz.Kennzeichen = model.kennzeichen;
            kfz.VbNr = model.vbnr;
            kfz.FahrgestellNr = model.fahrgestellNr;
            // ErstzulassungsDatum
            if (model.erstzulassungsDatum != null)
            {
                kfz.ErstzulassungsDatum = Convert.ToDateTime(model.erstzulassungsDatum);
                kfz.Alter = VertragContainer.Vertrag.CalcAlter(Convert.ToDateTime(kfz.ErstzulassungsDatum), Convert.ToDateTime(kfz.Versicherungsbeginn));
            }
            else
            {
                kfz.ErstzulassungsDatum = null;
                kfz.Alter = null;
            }
            // AnmeldeDatum
            if (model.anmeldeDatum != null)
            {
                kfz.AnmeldeDatum = Convert.ToDateTime(model.anmeldeDatum);
            }
            else
            {
                kfz.AnmeldeDatum = null;
            }
            kfz.Nutzlast = model.nutzlast;
            // Antragsfragen
            // Abgelehnt
            kfz.Antragsfragen.IsAbgelehnt = model.antragsfragen.isAbgelehnt;
            kfz.Antragsfragen.AbgelehntGrund = model.antragsfragen.abgelehntGrund;
            kfz.Antragsfragen.AbgelehntUnternehmen = model.antragsfragen.abgelehntUnternehmen;
            // Produkte
            // Haftpflicht
            if (model.produkte.hasHaftpflicht && model.produkte.haftpflicht != null)
            {
                kfz.Produkte.HasHaftpflicht = model.produkte.hasHaftpflicht;
                kfz.Produkte.Haftpflicht = new Haftpflicht();
                // Versicherungssumme
                switch (model.produkte.haftpflicht.versSum)
                {
                    case 1:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1;
                        break;
                    case 2:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs2;
                        break;
                    default:
                        kfz.Produkte.Haftpflicht.VersSum = EnumHaftpflichtVersSum.Vs1;
                        break;
                }
            }

            // keine Kasko

            // Rechtsschutz
            if (model.produkte.hasRechtsschutz && model.produkte.rechtsschutz != null)
            {
                kfz.Produkte.HasRechtsschutz = model.produkte.hasRechtsschutz;
                kfz.Produkte.Rechtsschutz = new Rechtsschutz();
            }
            else
            {
                kfz.Produkte.HasRechtsschutz = model.produkte.hasRechtsschutz;
                kfz.Produkte.Rechtsschutz = null;
            }

            // Insassen

            return kfz;
        }
        #endregion

        #region ### SESSION ###
        protected void StartSession()
        {
            // Session lesen
            if (string.IsNullOrEmpty(HttpContext.Session.GetString("VertragContainer")))
            {
                HttpContext.Session.SetString("VertragContainer", JsonConvert.SerializeObject(new VertragContainer(), this.jsonSettings));
            }
            VertragContainer = JsonConvert.DeserializeObject<VertragContainer>(HttpContext.Session.GetString("VertragContainer"), this.jsonSettings);
        }

        protected void EndSession()
        {
            // Session schreiben
            HttpContext.Session.SetString("VertragContainer", JsonConvert.SerializeObject(VertragContainer, this.jsonSettings));
        }
        #endregion
    }
}

// Hilfsklassen für Eurotaxsuche
[Serializable]
[JsonObject(MemberSerialization.OptIn)]
public class Marke {
    [JsonProperty("name")]
    public string Name { get; set; }
    [JsonProperty("natCode")]
    public string NatCode { get; set; }
}

[Serializable]
[JsonObject(MemberSerialization.OptIn)]
public class Modell
{
    [JsonProperty("name")]
    public string Name { get; set; }
    [JsonProperty("natCode")]
    public string NatCode { get; set; }
    [JsonProperty("importVonBis")]
    public string ImportVonBis { get; set; }
}

[Serializable]
[JsonObject(MemberSerialization.OptIn)]
public class Typ
{
    [JsonProperty("name")]
    public string Name { get; set; }
    [JsonProperty("natCode")]
    public string NatCode { get; set; }
    [JsonProperty("kw")]
    public string Kw { get; set; }
    [JsonProperty("ps")]
    public string Ps { get; set; }
    [JsonProperty("tueren")]
    public string Tueren { get; set; }
    [JsonProperty("zylinder")]
    public string Zylinder { get; set; }
    [JsonProperty("sitze")]
    public string Sitze { get; set; }
    [JsonProperty("importVonBis")]
    public string ImportVonBis { get; set; }
}

[Serializable]
[JsonObject(MemberSerialization.OptIn)]
public class Fahrzeug
{
    [JsonProperty("marke")]
    public string Marke;
    [JsonProperty("modell")]
    public string Modell;
    [JsonProperty("typ")]
    public string Typ;
    [JsonProperty("name")]
    public string Name { get; set; }
    [JsonProperty("nationalCode")]
    public string NationalCode { get; set; }
    [JsonProperty("kw")]
    public string Kw { get; set; }
    [JsonProperty("ps")]
    public string Ps { get; set; }
    [JsonProperty("tueren")]
    public string Tueren { get; set; }
    [JsonProperty("zylinder")]
    public string Zylinder { get; set; }
    [JsonProperty("sitze")]
    public string Sitze { get; set; }
    [JsonProperty("antrieb1")]
    public string Antrieb1 { get; set; }
    [JsonProperty("antrieb2")]
    public string Antrieb2 { get; set; }
    [JsonProperty("importStart")]
    public string ImportStart { get; set; }
    [JsonProperty("importEnde")]
    public string ImportEnde { get; set; }
    [JsonProperty("preisAb")]
    public string PreisAb { get; set; }
    [JsonProperty("neupreis")]
    public string Neupreis { get; set; }
    [JsonProperty("leergewicht")]
    public int Leergewicht { get; set; }
    [JsonProperty("nutzlast")]
    public int Nutzlast { get; set; }
    [JsonProperty("gesamtgewicht")]
    public int Gesamtgewicht { get; set; }
}