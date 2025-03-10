import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../components/common/carousel/Carousel";
import Collection from "./collection/Collection";

function Home() {
  const collectionRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToCollection) {
      collectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Carousel />
      <Collection />
    </>
  );
}

export default Home;
