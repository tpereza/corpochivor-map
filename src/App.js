import "./styles/App.css";
import ReactaMapGL, {
  Marker,
  Popup,
  NavigationControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import { useState, useEffect } from "react";
import CityInfo from "./components/cityInfo";
import FileUpload from "./components/fileUpload";
import useWindowDimensions from './useWindowDimensions'

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: "10px",
};

const navStyle = {
  top: 72,
  left: 0,
  padding: "10px",
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: "10px",
};

const { innerWidth, innerHeight } = window;

function App() {
  const [parkData, setParkData] = useState([])
  const { height, width } = useWindowDimensions();
  // console.log(height, width, innerWidth, innerHeight)
  const [viewport, setViewPort] = useState({
    latitude: 5.66667, 
    longitude: -73.0,
    width: width * .6,
    height: height * .6,
    zoom: 7,
  });

  if(height !== innerHeight || width !== innerWidth){
    window.location.reload(false);
  }

  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div className="map">
      <ReactaMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewPort(viewport);
        }}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        styles = ""
      >
        {parkData.length !== 0 && parkData.map((park, index) => (
          <Marker
            id={index}
            latitude={park.Y}
            longitude={park.X}
          >
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
              <img src="/mountain.png" alt="Mountain Park Icon" />
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          <Popup
            tipSize={5}
            anchor="bottom"
            latitude={selectedPark.Y}
            longitude={selectedPark.X}
            closeOnClick={false}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <CityInfo info={selectedPark} />
          </Popup>
        ) : null}
        <GeolocateControl style={geolocateStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </ReactaMapGL>
      <FileUpload onFileUpload={setParkData}/>
    </div>
  );
}

export default App;
