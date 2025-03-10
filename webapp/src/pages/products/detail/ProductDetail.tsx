import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { zodiacProducts } from "../../../data/product";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import styles from "./product-detail.module.scss";
import { useCart } from "../../../context/CartContext"; // Import CartContext

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = zodiacProducts.find((p) => p.id === id);

  if (!product) {
    navigate("/not-found", { replace: true });
    return null;
  }

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value > 0) {
      setQuantity(value)
    } else if (e.target.value === "") {
      setQuantity(1)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8" style={{ margin: "36px" }}>
      <Link to="/collection/zodiac" className={styles.backLink}>
        <ArrowLeft size={20} />
        <span>Trở lại bộ sưu tập</span>
      </Link>

      <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={500}
            height={500}
            className={styles.productImage}
            loading="lazy"
          />
        </div>

        <div className={styles.productInfo}>
          <div className={styles.zodiacSign}>{product.zodiacSign}</div>
          <h1 className={styles.productName}>{product.name}</h1>
          <div className={styles.productPrice}>
            {product.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
          </div>

          <div className={styles.productDescription}>
            <p>{product.description}</p>
          </div>

          <div className={styles.productDetails}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Ghi chú mùi hương:</span>
              <span>{product.scentNotes}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Thời gian cháy:</span>
              <span>{product.burnTime} giờ</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Trọng lượng:</span>
              <span>{product.weight} g</span>
            </div>
          </div>

          <div className={styles.quantitySelector}>
            <button className={styles.quantityButton} onClick={handleDecrement} aria-label="Giảm số lượng">
              <Minus size={16} />
            </button>
            <input
              type="text"
              value={quantity}
              onChange={handleQuantityChange}
              className={styles.quantityInput}
              aria-label="Số lượng"
            />
            <button className={styles.quantityButton} onClick={handleIncrement} aria-label="Tăng số lượng">
              <Plus size={16} />
            </button>
          </div>

          <div className={styles.actions}>
            <button className={styles.addToCartButton} onClick={() => addToCart(product, quantity)}>
              <ShoppingCart size={20} />
              Thêm vào giỏ hàng
            </button>
          </div>

          <div className={styles.compatibility}>
            <h3>Khả năng tương hợp của cung hoàng đạo</h3>
            <p>{product.compatibility}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
