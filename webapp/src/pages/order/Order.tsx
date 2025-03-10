"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import { CheckCircle } from "lucide-react"
import styles from "./order.module.scss"

export default function OrderSuccessPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8" style={{ margin: "42px" }}>
      <div className={styles.successContainer}>
        <div className={styles.successIcon}>
          <CheckCircle size={64} />
        </div>

        <h1 className={styles.successTitle}>Đặt hàng thành công!</h1>

        <p className={styles.successMessage}>
          Cảm ơn bạn đã đặt hàng. Chúng tôi đã nhận được đơn hàng của bạn và sẽ xử lý trong thời gian sớm nhất.
        </p>
{/* 
        <div className={styles.orderInfo}>
          <p>Một email xác nhận đã được gửi đến địa chỉ email của bạn.</p>
          <p>Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi.</p>
        </div> */}

        <div className={styles.actions}>
          <Link to="/collection/zodiac" className={styles.continueShoppingButton}>
            Tiếp tục mua sắm
          </Link>
        </div>
      </div>
    </div>
  )
}

