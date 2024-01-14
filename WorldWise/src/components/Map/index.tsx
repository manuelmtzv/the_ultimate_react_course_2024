import styles from "./Map.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import { LatLngExpression } from "leaflet";
import { useCitiesContext } from "../../hooks/useCitiesContext";

export default function Map() {
  const navigate = useNavigate();
  const { cities } = useCitiesContext();
  const [mapPosition] = useState<LatLngExpression>([40, 0]);
  // const [searchParams] = useSearchParams();

  // const lat = searchParams.get("lat");
  // const lng = searchParams.get("lng");

  const moveToForm = () => {
    navigate("form");
  };

  return (
    <div className={styles.mapContainer} onClick={moveToForm}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {cities.map((city) => {
          const { position } = city;
          const markerPosition: LatLngExpression = [position.lat, position.lng];
          return (
            <Marker key={city.id} position={markerPosition}>
              <Popup>
                <span>{city.emoji}</span>
                <span>{city.cityName}</span>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
