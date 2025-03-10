import { useState, useEffect } from "react"
import { zodiacProducts } from "../../../data/product"
import { placeProducts } from "../../../data/places"

import { Link, useParams } from "react-router-dom"
import styles from "./product-grid.module.scss"

export default function ProductGrid() {
  const [products, setProducts] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    if (id === "zodiac") {
      setProducts(zodiacProducts);
    } else {
      setProducts(placeProducts);
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

  return (
    <div className={styles.productGrid}>
      {products.map((product: any) => (
        <Link to={`/product/${product.id}`} key={product.id} className={styles.productCard}>
          <div className={styles.imageContainer}>
            <img
              src={product.image}
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
