import * as React from 'react';
import '../styles/popup.css';

function CityInfo({info}) {
  const displayName = `${info["NOMBRE DE LA ORGANIZACIÓN"]}`;

  return (
    <div className="popup">
      <h3>
        {displayName}
      </h3>
      <p>{info["ACTIVIDAD DE LA EMPRESA"]}</p>
      {/* <img width={240} src={info.image} /> */}
    </div>
  );
}

export default CityInfo;