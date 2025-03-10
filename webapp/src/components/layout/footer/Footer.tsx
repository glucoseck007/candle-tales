import type React from "react"
import "./Footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faReddit, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/src/assets/icons/logo-icon.png" alt="FutureMe Logo" />
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h3>Chăm sóc khách hàng</h3>
            <ul>
              <li>
                <a href="#">Dịch vụ</a>
              </li>
              <li>
                <a href="#">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="#">Điều khoản sử dụng</a>
              </li>
              <li>
                <a href="#">Câu hỏi thường gặp</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Theo dõi chúng tôi</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} color="#ed9486"/>
              </a>
              <a href="#" aria-label="X">
                <FontAwesomeIcon icon={faXTwitter} color="#ed9486"/>
              </a>
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} color="#ed9486"/>
              </a>
              <a href="#" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faReddit} color="#ed9486"/>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Liên hệ</h3>
            <ul>
              <li>
                <a href="#">KCN Hòa Lạc, huyện Thạch Thất, Hà Nội</a>
              </li>
              <li>
                <a href="#">foo@gmail.com</a>
              </li>
              <li>
                <a href="#">(+84) 987654321</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Candle Tales. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

