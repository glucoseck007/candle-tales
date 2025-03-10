import "./header.scss";

import { faBuildingColumns, faCartShopping, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LoadingLink from "../../common/links/LoadingLink";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <header className="header">
      <div className="header__logo" onClick={() => navigate("/")}>
        <img src="/src/assets/icons/logo-icon.png" alt="logo" style={{width: "55px", cursor: "pointer"}}/>
      </div>
      <div className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <div className="header__nav-item-home">
              <FontAwesomeIcon
                className="header__nav-icon"
                icon={faHome}
                style={{ marginRight: "8px" }}
                color="#ed9486"
              />
              <LoadingLink to="/" className="header__nav-link">
                Trang chủ
              </LoadingLink>
            </div>
          </li>
          <li className="header__nav-item">
            <LoadingLink to="/product" className="header__nav-link">
              Sản phẩm
            </LoadingLink>
          </li>
          <li
            className="header__nav-item header__nav-dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <LoadingLink to="#collection" className="header__nav-link" >
              Bộ sưu tập
            </LoadingLink>
            {isDropdownOpen && (
              <ul className="header__dropdown-menu">
                <li className="zodiac-item header__dropdown-item">
                  <img src="/src/assets/icons/leo-icon.svg" style={{width: "24px", height: "24px"}} />
                  <LoadingLink to="/collection/zodiac" className="header__dropdown-item" > 
                    Cung hoàng đạo
                  </LoadingLink>
                </li>
                <li>
                  <div className="destination-item header__dropdown-item">
                    <FontAwesomeIcon icon={faBuildingColumns} />
                    <LoadingLink to="/collection/places" className="header__dropdown-item">
                      Địa danh
                    </LoadingLink>
                  </div>
                </li>
              </ul>
            )}
          </li>
          <div className="vl"></div>
          <li>
            <div className="cart-section header__nav-item">
              <FontAwesomeIcon icon={faCartShopping} color="#ed9486" onClick={() => navigate("/cart")}/>
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
