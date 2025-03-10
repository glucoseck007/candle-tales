"use client"

import { useState, useEffect, useRef } from "react"
import { zodiacProducts } from "../../../data/product"
import { placeProducts } from "../../../data/places"
import { Link, useParams } from "react-router-dom"
import styles from "./product-grid.module.scss"

const bestSellerProducts = [
  ...zodiacProducts.filter((product) => product.isBestSeller),
  ...placeProducts.filter((product) => product.isBestSeller),
];

// Fallback in case there aren't enough best-seller products
if (bestSellerProducts.length < 6) {
  bestSellerProducts.push(
    ...zodiacProducts.slice(0, 6 - bestSellerProducts.length),
    ...placeProducts.slice(0, 6 - bestSellerProducts.length)
  );
}

export default function ProductGeneral() {
  const [products, setProducts] = useState<any>({})
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    if (id === "zodiac") {
      setProducts(zodiacProducts)
    } else if (id === "places") {
      setProducts(placeProducts)
    } else if (id === "best-seller") {
      setProducts(bestSellerProducts)
    } else {
      // If no specific category is selected, we'll show all categories in their sections
      setProducts({
        bestSellers: bestSellerProducts,
        zodiacs: zodiacProducts,
        places: placeProducts,
      })
    }

    return () => clearTimeout(timer)
  }, [id])

  if (isLoading) {
    return (
      <div className={styles.loadingGrid}>
        {[...Array(12)].map((_, index) => (
          <div key={index} className={styles.loadingCard}>
            <div className={styles.loadingImage}></div>
            <div className={styles.loadingTitle}></div>
            <div className={styles.loadingPrice}></div>
          </div>
        ))}
      </div>
    )
  }

  // If we're viewing a specific category, show the regular grid
  if (id) {
    return (
      <div className={styles.productGrid} >
        {products.map((product: any) => (
          <Link to={`/product/${product.id}`} key={product.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className={styles.productImage}
                loading="lazy"
              />
            </div>
            <div className={styles.productInfo}>
              <h2 className={styles.productName}>{product.name}</h2>
              <p className={styles.productDescription}>{product.shortDescription}</p>
              <p className={styles.productPrice}>
                {product.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    )
  }

  // Otherwise, show all categories with carousels
  return (
    <div className={styles.categoriesContainer} style={{margin: "36px"}}>
      <section className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Best Sellers</h2>
        <ProductCarousel products={products.bestSellers} />
      </section>

      <section className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Zodiac Collection</h2>
        <ProductCarousel products={products.zodiacs} />
      </section>

      <section className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Places Collection</h2>
        <ProductCarousel products={products.places} />
      </section>
    </div>
  )
}

function ProductCarousel({ products }: { products: any[] }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const maxSlides = Math.ceil(products.length / 3)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % maxSlides)
    }, 5000)

    return () => clearInterval(interval)
  }, [maxSlides])

  // Update carousel position when slide changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentSlide * 100}%)`
    }
  }, [currentSlide])

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides)
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides)
  }

  return (
    <div className={styles.carouselContainer}>
      <button
        className={`${styles.carouselButton} ${styles.prevButton}`}
        onClick={handlePrev}
        aria-label="Previous products"
      >
        &lt;
      </button>

      <div className={styles.carouselViewport}>
        <div className={styles.carouselTrack} ref={carouselRef}>
          {Array.from({ length: maxSlides }).map((_, slideIndex) => (
            <div className={styles.carouselSlide} key={slideIndex}>
              {products.slice(slideIndex * 3, slideIndex * 3 + 3).map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className={styles.productCard}>
                  <div className={styles.imageContainer}>
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className={styles.productImage}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.productInfo}>
                    <h2 className={styles.productName}>{product.name}</h2>
                    <p className={styles.productDescription}>{product.shortDescription}</p>
                    <p className={styles.productPrice}>
                      {product.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        className={`${styles.carouselButton} ${styles.nextButton}`}
        onClick={handleNext}
        aria-label="Next products"
      >
        &gt;
      </button>

      <div className={styles.carouselDots}>
        {Array.from({ length: maxSlides }).map((_, index) => (
          <button
            key={index}
            className={`${styles.carouselDot} ${currentSlide === index ? styles.activeDot : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

