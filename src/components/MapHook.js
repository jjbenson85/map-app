import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

const Map = ({ lon, lat, label }) => {
  const mapEl = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    mapEl &&
      setMap(
        new mapboxgl.Map({
          container: mapEl.current,
          style: "mapbox://styles/mapbox/light-v9"
        })
      );
  }, [mapEl]);

  useEffect(() => {
    const textnode = document.createTextNode(label);
    const markerElement = document.createElement("DIV");
    markerElement.className = "custom-marker";
    markerElement.appendChild(textnode);
    map && new mapboxgl.Marker(markerElement).setLngLat([lon, lat]).addTo(map);
  }, [lon, lat]);

  return <div className="map" ref={mapEl}></div>;
};

export default Map;
