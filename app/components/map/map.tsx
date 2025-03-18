import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { type ReactNode, useEffect, useState } from "react";

const center = {
  lat: 50.041,
  lng: 21.999,
};

const containerStyles = {
  height: "400px",
  width: "100%",
};

interface MapComponentProps {
  googleMapsKey: string;
}

function ClientOnly({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? children : null;
}

function PlainMap({ googleMapsKey }: MapComponentProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapsKey,
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyles} zoom={15} center={center} />
  ) : (
    <div style={containerStyles}></div>
  );
}

export const Map = ({ googleMapsKey }: MapComponentProps) => {
  return (
    <div data-chromatic="ignore">
      <PlainMap googleMapsKey={googleMapsKey} />
    </div>
  );
};
