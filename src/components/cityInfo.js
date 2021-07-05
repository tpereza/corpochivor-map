import * as React from 'react';
import '../styles/popup.css';

function CityInfo({info}) {
  const displayName = `${info.NAME}`;

  return (
    <div className="popup">
      <h3>
        {displayName}
      </h3>
      <p>{info.DESCRIPTION}</p>
      {/* <img width={240} src={info.image} /> */}
    </div>
  );
}

export default CityInfo;