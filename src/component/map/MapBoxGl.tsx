import MapboxLanguage from "@mapbox/mapbox-gl-language";
import Map from "react-map-gl";

const mapboxAccessToken = "pk.eyJ1IjoidmluY2VudHdlbiIsImEiOiJja2k2c2Z5aGQxdW90MnRuejFjcnR6MG94In0.yCYY_RpjUokkySYdtGVenQ";

function MapBoxGl() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Map
        initialViewState={{
          longitude: 120.764673,
          latitude: 31.650293,
          zoom: 10
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        mapboxAccessToken={mapboxAccessToken}
        onLoad={(event) => {
          const map = event && event.target;
          if (map) {
            map.addControl(
              new MapboxLanguage({
                defaultLanguage: "zh-Hans"
              })
            );
            map.setLayoutProperty("country-label", "text-field", ["get", "name_zh"]);
          }
        }}
      />
    </div>
  );
}

export default MapBoxGl;
