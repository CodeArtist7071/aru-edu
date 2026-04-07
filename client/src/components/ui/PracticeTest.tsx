import { useState, useEffect } from "react";
import { usePracticeTestLogic } from "../../hooks/usePracticeTestLogic";
import { DesktopPracticeTest } from "./DesktopPracticeTest";
import { MobilePracticeTest } from "./MobilePracticeTest";

export default function PracticeTest() {
  const logic = usePracticeTestLogic();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <MobilePracticeTest logic={logic} />
      ) : (
        <DesktopPracticeTest logic={logic} />
      )}
    </>
  );
}
