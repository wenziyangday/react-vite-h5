import { useEffect } from "react";

declare const AMap: any;

function AMapCon() {
  useEffect(() => {
    const aa = new AMap.Map("container", {
      resizeEnable: true,
      center: [121.544346, 31.221461],
      zoom: 17
    });

    console.log(aa);
  }, []);

  return (
    <div className="amap">
      <div id="container" style={{ width: "100vw", height: "70vh" }} />
    </div>
  );
}

export default AMapCon;
