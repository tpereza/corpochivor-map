import * as React from 'react';
import '../styles/popup.css';

function CityInfo({info}) {
  const {properties} = info;
  const displayName = `${properties.NAME}`;

  return (
    <div className="popup">
      <h3>
        {displayName}
      </h3>
      <p>{properties.DESCRIPTION}</p>
      {/* <img width={240} src={info.image} /> */}
    </div>
  );
}

export default CityInfo;