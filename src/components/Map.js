import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
const mapToken = process.env.MAPBOX_TOKEN;
mapboxgl.accessToken = mapToken;

class Map extends React.Component {
  placeMarker(longitude, latitude, marker) {
    new mapboxgl.Marker(marker)
      .setLngLat([longitude, latitude])
      .addTo(this.map);
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(data => {
      const markerElement = document.createElement("DIV");
      markerElement.className = "custom-marker";
      const { latitude, longitude } = data.coords;
      this.placeMarker(longitude, latitude, false);
    });

    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: "mapbox://styles/mapbox/light-v9",
      center: [0, 0],
      zoom: 1
    });
  }

  componentDidUpdate() {
    console.log("props", this.props);
    this.placeMarker(this.props.lon, this.props.lat, false);
  }

  render() {
    console.log("map render", this.props);
    return <div className="map" ref={el => (this.mapDiv = el)}></div>;
  }
}

export default Map;
