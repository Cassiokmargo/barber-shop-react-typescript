import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "./GoogleMapsComponent.Module.css";

// export interface GoogleMapsComponentProps {}

const GoogleMapsComponent = () => {
  const position = {
    lat: -27.590824,
    lng: -48.551262,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBoxjCygOPlUlED08TZ5he-kEOtPdBMbvI",
  });
  
  return (
    <div className="map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={18}
          options={{
    styles: [
      { elementType: "geometry", stylers: [{ color: "#bfa98c" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#bfa98c" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#ffffff" }] },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#a58c6f" }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#a58c6f" }]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#bfa98c" }]
      },
    ],
  }}
        >
          <Marker position={position} icon={{
    url: "data:image/svg+xml;utf8,<svg width='40' height='40' viewBox='0 0 40 56' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M20 0C11.1634 0 4 7.16344 4 16.0001C4 28.0001 20 56 20 56C20 56 36 28.0001 36 16.0001C36 7.16344 28.8366 0 20 0Z' fill='%23FFA726'/><circle cx='20' cy='17' r='9' fill='brown'/></svg>",
    scaledSize: new window.google.maps.Size(40, 40),
  }} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default GoogleMapsComponent;
