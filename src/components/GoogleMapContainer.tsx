import React from "react";
import { useGoogleMaps } from "react-hook-google-maps";
import { GOOGLE_API_KEY } from "../config";

const uluru = { lat: -25.344, lng: 131.036 };

interface mProps {
  location: any;
}

export default function Map({ location }: mProps) {
  const { ref, map, google } = useGoogleMaps(GOOGLE_API_KEY, {
    zoom: 10,
    center: location,
  });

  if (map) {
    // execute when map object is ready
    new google.maps.Marker({ position: location, map });
  }

  return (
    <>
      <div ref={ref} style={{ width: "100vw", height: "100vh" }} />
    </>
  );
}

export const GoogleMapContainer = React.memo(Map);
