import { useState, useEffect } from "react";
import { useMockTestLogic } from "../../hooks/useMockTestLogic";
import { DesktopMockTest } from "./DesktopMockTest";
import { MobileMockTest } from "./MobileMockTest";

export default function MockTest() {
  const logic = useMockTestLogic();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileMockTest logic={logic} />
      ) : (
        <DesktopMockTest logic={logic} />
      )}
    </>
  );
}
