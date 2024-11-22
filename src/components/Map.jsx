import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Define custom pin icon
const customIcon = new L.Icon({
  iconUrl: "/Group 103.svg",

  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
});

const FitBounds = ({ locations }) => {
  const map = useMap();

  useEffect(() => {
    if (locations.length > 0) {
      const bounds = L.latLngBounds(
        locations.map((location) => [location.lat, location.lng])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [locations, map]);

  return null;
};

const Map = () => {
  // Locations to pin
  const locations = [
    { lat: 37.7749, lng: -122.4194, name: "San Francisco" },
    { lat: 37.9026, lng: -122.4852, name: "Paradise Cay" },
    { lat: 37.9358, lng: -122.3478, name: "Richmond" },
    { lat: 37.8044, lng: -122.2711, name: "Oakland" },
    { lat: 37.7799, lng: -121.978, name: "San Ramon" },
    { lat: 38.5816, lng: -121.4944, name: "Sacramento" },
    { lat: 37.977978, lng: -122.031073, name: "Concord" },
  ];

  return (
    <div className=" h-full w-full  ">
      <MapContainer
        center={[37.7749, -122.4194]}
        className=" h-[318px] w-full rounded-lg "
        zoomControl={false}
        scrollWheelZoom={false}
        dragging={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <FitBounds locations={locations} />
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={[location.lat, location.lng]}
            icon={customIcon}
          >
            <Popup
              closeButton={false}
              className="rounded-md shadow-md"
            >
              <h3 className=" font-inter font-medium text-xs text-[#344054] -mb-2">
                {location.name}
              </h3>
              <p className=" font-inter font-normal text-xs text-[#667085]">
                201 Customers
              </p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
