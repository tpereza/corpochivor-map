import * as React from 'react';
import '../styles/popup.css';
import '../font-awesome/css/font-awesome.css';

function CityInfo({ info }) {
  const displayName = `${info["NOMBRE DE LA ORGANIZACIÓN"]}`;
  let Facebook;
  let Instagram;
  let logo;
  if (info["FACEBOOK"] !== "No implementado") {
    Facebook =
      <div class="facebook">
        <a href={`${info["FACEBOOK"]}`} target="_blank">
          <button>
            <span class="fa-stack fa-lg">
              <i class="fa fa-square-o fa-stack-2x"></i>
              <i class="fa fa-facebook fa-stack-1x"></i>
            </span>
            Facebook
          </button>
        </a>
      </div>
  }
  if (info["INSTAGRAM"] !== "No implementado") {
    Instagram =
      <div class="instagram">
        <a href={`${info["INSTAGRAM"]}`} target="_blank">
          <button>
            <span class="fa-stack fa-lg">
              <i class="fa fa-instagram fa-stack-2x"></i>
            </span>
            Instagram
          </button>
        </a>
      </div>
  }
  info["LOGO"] ? logo = info["LOGO"] : logo = "https://www.corpochivor.gov.co/wp-content/uploads/2021/05/logo-corpo-1.jpg";
  console.log(info["LOGO"])

  return (
    <div className="popup">
      <div className="card-logo">
        <img src={logo} alt="Logo negocio verde" />
        <h4>
          Contacto:
        </h4>
        <span>
          {info["TELEFONO"]}
          <br />
          {info["DIRECCCIÓN"]}
        </span>
      </div>
      <div className="info">
        <div>
          <h3>
            {displayName}
          </h3>
        </div>
        <div>
          <p className="overflow-ellipsis">{info["ACTIVIDAD DE LA EMPRESA"]}</p>
        </div>
        <div class="social">
          {Facebook}
          {Instagram}
        </div>
      </div>
    </div>
  );
}

export default CityInfo;