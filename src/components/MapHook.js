import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
const mapToken = process.env.MAPBOX_TOKEN;
mapboxgl.accessToken = mapToken;

const Map = ({ lon, lat, label }) => {
  const mapEl = useRef(null);
  const [map, setMap] = useState();

  // const placeMarker = (longitude, latitude, marker) => {
  //   new mapboxgl.Marker(marker).setLngLat([longitude, latitude]).addTo(map);
  // };

  useEffect(() => {
    if (mapEl) {
      console.log("mapEl", mapEl);
      setMap(
        new mapboxgl.Map({
          container: mapEl.current,
          style: "mapbox://styles/mapbox/light-v9",
          center: [0, 0],
          zoom: 1
        })
      );
    }
  }, [mapEl]);

  useEffect(() => {
    // console.log("props", this.props);
    // placeMarker(lon, lat, false);
    const markerElement = document.createElement("DIV");
    markerElement.className = "custom-marker";
    const textnode = document.createTextNode(label);
    markerElement.appendChild(textnode);
    map && new mapboxgl.Marker(markerElement).setLngLat([lon, lat]).addTo(map);
  }, [lon, lat]);

  return <div className="map" ref={mapEl}></div>;
};

// class Map extends React.Component {
//   placeMarker(longitude, latitude, marker) {
//     new mapboxgl.Marker(marker).setLngLat([longitude, latitude]).addTo(map);
//   }
//   componentDidMount() {
//     // navigator.geolocation.getCurrentPosition(data => {
//     //   const markerElement = document.createElement("DIV");
//     //   markerElement.className = "custom-marker";
//     //   const { latitude, longitude } = data.coords;
//     //   this.placeMarker(longitude, latitude, false);
//     // });

//     this.map = new mapboxgl.Map({
//       container: this.mapDiv,
//       style: "mapbox://styles/mapbox/light-v9",
//       center: [0, 0],
//       zoom: 1
//     });
//   }

//   componentDidUpdate() {
//     console.log("props", this.props);
//     this.placeMarker(this.props.lon, this.props.lat, false);
//   }

//   render() {
//     console.log("map render", this.props);
//     return <div className="map" ref={el => (this.mapDiv = el)}></div>;
//   }
// }

export default Map;
