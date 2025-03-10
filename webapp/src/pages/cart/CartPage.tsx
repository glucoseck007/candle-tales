"use client"

import type React from "react"

import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { Trash2, Plus, Minus } from "lucide-react"
import styles from "./cart.module.scss"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart()
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const navigate = useNavigate()

  // Handle select all checkbox
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedItems(cart.map((item) => item.id))
    } else {
      setSelectedItems([])
    }
  }

  // Handle individual item selection
  const handleSelectItem = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedItems((prev) => [...prev, id])
    } else {
      setSelectedItems((prev) => prev.filter((itemId) => itemId !== id))
    }
  }

  // Calculate total for selected items
  const calculateSelectedTotal = () => {
    return cart
      .filter((item) => selectedItems.includes(item.id))
      .reduce((total, item) => total + item.price * item.quantity, 0)
  }

  // Handle checkout
  const handleCheckout = () => {
    if (selectedItems.length > 0) {
      navigate("/checkout")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8" style={{ margin: "42px" }}>
      <h1 className={styles.cartTitle}>Giỏ hàng</h1>

      {cart.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Giỏ hàng của bạn đang trống.</p>
          <Link to="/collection/zodiac" className={styles.continueShoppingLink}>
            Tiếp tục mua sắm
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.cartHeader}>
            <label className={styles.selectAllContainer}>
              <input
                type="checkbox"
                checked={selectedItems.length === cart.length}
                onChange={handleSelectAll}
                className={styles.checkbox}
              />
              <span className={styles.selectAllLabel}>Chọn tất cả ({cart.length} sản phẩm)</span>
            </label>
          </div>

          <div className={styles.cartList}>
            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemSelect}>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={(e) => handleSelectItem(item.id, e.target.checked)}
                    className={styles.checkbox}
                  />
                </div>

                <div className={styles.itemImage}>
                  <img src={item.image || "/placeholder.svg"} alt={item.name} width={100} height={100} />
                </div>

                <div className={styles.cartInfo}>
                  <h2 className={styles.itemName}>{item.name}</h2>
                  <p className={styles.itemPrice}>
                    {item.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                  </p>
                </div>

                <div className={styles.quantityControls}>
                  <button
                    className={styles.quantityButton}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    aria-label="Giảm số lượng"
                  >
                    <Minus size={16} />
                  </button>
                  <span className={styles.quantityDisplay}>{item.quantity}</span>
                  <button
                    className={styles.quantityButton}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label="Tăng số lượng"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div className={styles.itemTotal}>
                  {(item.price * item.quantity).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </div>

                <button
                  className={styles.removeButton}
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Xóa sản phẩm"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          <div className={styles.cartFooter}>
            <div className={styles.cartSummary}>
              <div className={styles.summaryRow}>
                <span>Tổng thanh toán ({selectedItems.length} sản phẩm):</span>
                <span className={styles.totalPrice}>
                  {calculateSelectedTotal().toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </div>
            </div>
            <button className={styles.checkoutButton} disabled={selectedItems.length === 0} onClick={handleCheckout}>
              Đặt hàng
            </button>
          </div>
        </>
      )}
    </div>
  )
}

