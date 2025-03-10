import "./Carousel.scss";
import React, { useState, useEffect, useCallback } from "react";
import CustomButton from "../button/custom-button/Custom-Button";
import { useNavigate } from "react-router-dom";

const Carousel: React.FC = () => {
  // Mock data for the carousel
  const carouselItems = [
    {
      title: "Nến Hương Cung Hoàng Đạo",
      description: "Khám phá bộ sưu tập nến thơm mang dấu ấn 12 cung hoàng đạo, phản ánh tính cách độc đáo của bạn.",
      image: "/src/assets/images/bg-1.jpg",
    },
    {
      title: "Nến Hương Địa Danh",
      description: "Trải nghiệm hương thơm từ những vùng đất nổi tiếng như Paris, Kyoto, và Đà Lạt ngay tại ngôi nhà bạn.",
      image: "/src/assets/images/bg-1.jpg",
    },
    {
      title: "Hành Trình Hương Thơm",
      description: "Bộ sưu tập nến thơm kết hợp hương vị độc đáo của thiên nhiên và văn hóa từng vùng miền.",
      image: "/src/assets/images/bg-3.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
  }, [carouselItems.length]);

  // const prevSlide = useCallback(() => {
  //   setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselItems.length) % carouselItems.length);
  // }, [carouselItems.length]);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <div className="carousel">
      {carouselItems.map((item, index) => (
        <div key={index} className={`carousel-slide ${index === currentSlide ? "active" : ""}`}>
          <img
            src={item.image} 
            alt={item.title}
            style={{ height: "90vh", width: "100%", opacity: "30%" }}
          />
          <div className="carousel-content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <CustomButton 
              className="button-experience" 
              width="216px" 
              borderRadius="5px" 
              title="Trải nghiệm ngay"
              backgroundColor="#fe7d6a"
              onClick={() => navigate("/product")}
            />
          </div>
        </div>
      ))}

      {/* Indicators */}
        <div className="carousel-indicators">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
      </div>
    </div>
  );
};

export default Carousel;
