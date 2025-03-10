import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import DefaultLayout from "../layouts/DefaultLayout/defaultLayout";
import ProductGrid from "../pages/products/grid/product-grid";
import ProductDetail from "../pages/products/detail/ProductDetail";
import ProductGeneral from "../pages/products/general/product-general";
import CartPage from "../pages/cart/CartPage";
import CheckoutPage from "../pages/checkout/checkout";
import OrderSuccessPage from "../pages/order/Order";

const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>S
        <Route path="/" element={<Home />} />
        <Route path="/collection/:id" element={<ProductGrid />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product" element={<ProductGeneral />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />

      </Route>
    </Routes>
  );
};

export default AppRoute;
