using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vertrag
{
    [Serializable]
    public class VertragContainer
    {
        #region Members
        private string _xmlVersionMUKI;
        private string _build;
        //
        private Vertrag _vertrag;
        #endregion

        #region Property
        public string XMLVersionMUKI
        {
            get { return _xmlVersionMUKI; }
            set { _xmlVersionMUKI = value; }
        }
        public string Build
        {
            get { return _build; }
            set { _build = value; }
        }
        //
        public Vertrag Vertrag
        {
            get { return _vertrag; }
            set { _vertrag = value; }
        }
        #endregion

        #region Konstruktor
        public VertragContainer()
        {
            _xmlVersionMUKI = "Vertrag_1.0";
            _build = "0.0.1";
            _vertrag = new Vertrag();
        }
        #endregion

        #region Methoden
        #endregion
    }
}
