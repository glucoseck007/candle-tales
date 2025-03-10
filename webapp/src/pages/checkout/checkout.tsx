import type React from "react"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import emailjs from "@emailjs/browser"
import styles from "./checkout.module.scss"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  address: string
  city: string
  district: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phoneNumber?: string
  address?: string
  city?: string
  district?: string
}

export default function CheckoutPage() {
  const { cart, clearCart } = useCart()
  const navigate = useNavigate()

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    district: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailError, setEmailError] = useState<string | null>(null)

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    // Replace with your actual EmailJS public key
    emailjs.init("7I1I_jjrPNRd_qPf1")
  }, [])

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      })
    }

    // Clear email error if it exists
    if (emailError) {
      setEmailError(null)
    }
  }

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Vui lòng nhập họ"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Vui lòng nhập tên"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ"
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Vui lòng nhập số điện thoại"
    } else if (!/^[0-9]{10,11}$/.test(formData.phoneNumber.replace(/\s+/g, ""))) {
      newErrors.phoneNumber = "Số điện thoại không hợp lệ"
    }

    if (!formData.address.trim()) {
      newErrors.address = "Vui lòng nhập địa chỉ"
    }

    if (!formData.city.trim()) {
      newErrors.city = "Vui lòng nhập thành phố"
    }

    if (!formData.district.trim()) {
      newErrors.district = "Vui lòng nhập huyện"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Format cart items for email
  const formatCartItemsForEmail = () => {
    return cart
      .map(
        (item) =>
          `${item.name} - Số lượng: ${item.quantity} - Giá: ${(item.price * item.quantity).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
      )
      .join("\n")
  }

  // Calculate order total
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    if (!validateForm()) {
      return
    }
  
    setIsSubmitting(true)
    setEmailError(null)
  
    try {
      // Chuẩn bị dữ liệu để gửi API
      const orderData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phoneNumber,
        address: formData.address,
        city: formData.city,
        district: formData.district,
        items: JSON.stringify(cart), // Chuyển giỏ hàng thành JSON
      }
  
      // Gửi yêu cầu tạo đơn hàng lên API backend
      const orderResponse = await fetch("http://localhost:8080/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      })
  
      const orderResult = await orderResponse.json()
  
      if (!orderResponse.ok || !orderResult.success) {
        throw new Error(orderResult.message || "Lỗi khi đặt hàng")
      }
  
      console.log("Order created successfully:", orderResult.data)
  
      // Chuẩn bị dữ liệu gửi email
      const templateParams = {
        from_name: "Candle Tales",
        to_email: formData.email,
        phone_number: formData.phoneNumber,
        address: `${formData.address}, ${formData.city}, ${formData.district}`,
        order_items: formatCartItemsForEmail(),
        order_total: calculateTotal().toLocaleString("vi-VN", { style: "currency", currency: "VND" }),
      }
  
      // Gửi email xác nhận
      const emailResponse = await emailjs.send(
        "service_gg4txni",
        "template_12zjqwv",
        templateParams
      )
  
      if (emailResponse.status === 200) {
        clearCart()
        navigate("/order-success")
      } else {
        throw new Error("Gửi email thất bại")
      }
    } catch (error) {
      console.error("Lỗi khi đặt hàng:", error)
      setEmailError("Có lỗi xảy ra khi xử lý đơn hàng. Vui lòng thử lại sau.")
    } finally {
      setIsSubmitting(false)
    }
  }
  

  return (
    <div className="container mx-auto px-4 py-8" style={{ margin: "42px" }}>
      <h1 className={styles.checkoutTitle}>Thanh toán</h1>

      <div className={styles.checkoutContainer}>
        <div className={styles.formContainer}>
          <h2 className={styles.sectionTitle}>Thông tin giao hàng</h2>

          {emailError && <div className={styles.errorAlert}>{emailError}</div>}

          <form onSubmit={handleSubmit} className={styles.checkoutForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">Họ</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? styles.inputError : ""}
                />
                {errors.firstName && <p className={styles.errorText}>{errors.firstName}</p>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="lastName">Tên</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? styles.inputError : ""}
                />
                {errors.lastName && <p className={styles.errorText}>{errors.lastName}</p>}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? styles.inputError : ""}
              />
              {errors.email && <p className={styles.errorText}>{errors.email}</p>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phoneNumber">Số điện thoại</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={errors.phoneNumber ? styles.inputError : ""}
                placeholder="0912345678"
              />
              {errors.phoneNumber && <p className={styles.errorText}>{errors.phoneNumber}</p>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="address">Địa chỉ</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={errors.address ? styles.inputError : ""}
              />
              {errors.address && <p className={styles.errorText}>{errors.address}</p>}
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="city">Thành phố</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={errors.city ? styles.inputError : ""}
                />
                {errors.city && <p className={styles.errorText}>{errors.city}</p>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="district">Huyện</label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className={errors.district ? styles.inputError : ""}
                />
                {errors.district && <p className={styles.errorText}>{errors.district}</p>}
              </div>
            </div>

            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? "Đang xử lý..." : "Hoàn tất đơn hàng"}
            </button>
          </form>
        </div>

        <div className={styles.orderSummary}>
          <h2 className={styles.sectionTitle}>Tóm tắt đơn hàng</h2>

          <div className={styles.orderItems}>
            {cart.map((item) => (
              <div key={item.id} className={styles.orderItem}>
                <div className={styles.itemInfo}>
                  <div className={styles.itemImage}>
                    <img src={item.image || "/placeholder.svg"} alt={item.name} />
                  </div>
                  <div className={styles.itemDetails}>
                    <h3>{item.name}</h3>
                    <p>Số lượng: {item.quantity}</p>
                  </div>
                </div>
                <div className={styles.itemPrice}>
                  {(item.price * item.quantity).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.orderTotal}>
            <div className={styles.totalRow}>
              <span>Tổng cộng:</span>
              <span className={styles.totalAmount}>
                {calculateTotal().toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

