import React from "react";

export const useDeviceInfo = () => {
  const [deviceSize, setDeviceSize] = React.useState("BIG");
  const handleResize = () => {
    if (window.innerWidth <= 1200) {
      setDeviceSize("SMALL");
    } else {
      setDeviceSize("BIG");
    }
  };
  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { deviceSize };
};
