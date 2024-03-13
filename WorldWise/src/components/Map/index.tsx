import styles from "./Map.module.css";
import { useNavigate } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { LatLngExpression } from "leaflet";
import { useCitiesContext } from "@/hooks/useCitiesContext";
import { useGeolocation } from "@hooks/useGeolocation";
import Button from "@components/Button";
import { useUrlPosition } from "@hooks/useUrlPosition";

export default function Map() {
  const { cities } = useCitiesContext();
  const [mapPosition, setMapPosition] = useState<LatLngExpression>([40, 0]);
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  const { lat, lng } = useUrlPosition();

  useEffect(() => {
    if (lat && lng) setMapPosition([+lat, +lng]);
  }, [lat, lng]);

  useEffect(() => {
    if (geolocationPosition) setMapPosition(geolocationPosition);
  }, [geolocationPosition]);

  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <Button buttonType="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use your position"}
        </Button>
      )}

      <MapContainer
        center={mapPosition}
        zoom={6}
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

        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

type ChangeCenterProps = {
  position: LatLngExpression;
};

function ChangeCenter({ position }: ChangeCenterProps) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      navigate(`form?lat=${lat}&lng=${lng}`);
    },
  });
  return null;
}
