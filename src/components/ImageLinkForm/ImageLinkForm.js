import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {`This Magic Brain will detect faces in your pictures. Be sure to use an image from the web, like Google Photos`}
        {`For example: ${'https://lh3.googleusercontent.com/LxiJHGruxtJOWLDKEte3fcpNs2RH5MVZIFXZZusZgOkH1fYLmtfWZ862sEFFbC59GeS5R3mA1qk9cnCOpFEma4DCPOP0dixoHA77NjScebqxw_5pwy8-GeoGsW0BeI-2AuG59KKEe92zqN-yplLeTyc8EfRI6dQz6e5FXrSELfMWA6Rd7CliOx0rNrAOwsn54eHsPqbV4toX89hHGtnMZNC5os4qHP87weIefTi36FS0Vzt3dM_OfohHLyhbtWDpI6mvVsZ4CC1BXtYnkvGeSXGBKZeGTIatbIz3o9-mKoRDMSn9Tj3odSS6waiQsDOKGKp0LmRRIMiVaB-X5irbwyk2ifL9KVaEjm4-U0iwB0JRTxPpTgS_9ja8kHzbwA_ttbvoFnYPLKNz6YoTX0-POwPapIB6uP1zTDMGCWgI8EVN-E8lNVv4ciosNsKYFCZQIjIrONrG03RXIIUSDPX0Pb6NkIj2VpcSHDffltGi_5Wwbeiy2bxnRclwkngRBEHZbiDnNvN0j2pkkkC5IA2Z_7D4dY8m1LgOyf-SJaAKxq8XaF92bR1AK57XUV-uL3fMCdXd9ryKMHXfA4KWDNEUFhf4pZA00FPy6quiGWq45YlSPiiMXUp6dAVgYuwoToLxBKDRN8I8AWCFLQRjb5oON8Ow2eunf4rxZGzwvy2xz903ep3NR2v0kg=w1182-h1574-no'}`}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          ></input>
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
