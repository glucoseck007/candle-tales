import { useEffect, useRef } from "react";
import "./collection.scss";

export default function Collection() {
  const collectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      collectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    window.addEventListener("scrollToCollection", handleScroll);
    return () => window.removeEventListener("scrollToCollection", handleScroll);
  }, []);

  return (
    <div ref={collectionRef} id="collection" className="scent-categories-container">
      <div className="category-item">
        <h2 className="category-title">12 Cung Hoàng Đạo</h2>
        <a href="/collection/zodiac" className="view-all">
          XEM TẤT CẢ
        </a>
        <div className="image-container">
          <img src="/src/assets/images/zodiac.jpg" alt="Zodiac scent candles" className="category-image" />
        </div>
      </div>

      <div className="category-item">
        <h2 className="category-title">Địa danh</h2>
        <a href="/collection/place" className="view-all">
          XEM TẤT CẢ
        </a>
        <div className="image-container">
          <img style={{ width: "300px", height: "300px" }} src="/src/assets/images/da-nang.jpg" alt="Places scent candles" className="category-image" />
        </div>
      </div>
    </div>
  );
}
