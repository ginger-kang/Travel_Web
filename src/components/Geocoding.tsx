import React, { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "../config";
import Geocode from "react-geocode";
import GoogleMapContainer from "./GoogleMapContainer";

interface cProps {
  location: any;
  handleCloseMap: Function;
}

export default function Geocoding({ location, handleCloseMap }: cProps) {
  const [resultLatitude, setResultLatitue] = useState(0);
  const [resultLongitude, setResultLongitude] = useState(0);

  useEffect(() => {
    Geocode.setApiKey(GOOGLE_API_KEY);
    Geocode.setLanguage("en");
    Geocode.fromAddress(location).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        //console.log(lat, lng);
        //console.log(typeof lat);
        if (lat > 0 && lng > 0) {
          setResultLatitue(lat);
          setResultLongitude(lng);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  const resultLocation = { lat: resultLatitude, lng: resultLongitude };
  console.log(resultLocation);

  return resultLocation.lat && resultLocation.lng ? (
    <GoogleMapContainer
      location={resultLocation}
      handleCloseMap={handleCloseMap}
    />
  ) : null;
}
