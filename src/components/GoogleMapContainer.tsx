import React, { useState } from "react";
import styled from "styled-components";
import { useGoogleMaps } from "react-hook-google-maps";
import { GOOGLE_API_KEY } from "../config";

const MapCloseButton = styled.button`
  background: black;
  width: 100px;
  height: 40px;
  position: absolute;
  left: 50%;
  bottom: 10px;
  padding: 15px;
  border-radius: 8px;
  color: white;
  transform: translateX(-50%);
`;

interface mProps {
  location: any;
  handleCloseMap: Function;
}

export default function GoogleMapContainer({
  location,
  handleCloseMap,
}: mProps) {
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
      <div
        ref={ref}
        style={{ width: "100vw", height: "100vh", position: "absolute" }}
      />
      <MapCloseButton onClick={() => handleCloseMap()}>닫기</MapCloseButton>
    </>
  );
}

//export const GoogleMapContainer = React.memo(Map);
