import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./component/Home/products";
import Navbar from "./component/Home/navbar";
import PageNotFound from "./component/Home/pageNotFound";
import OrderConfirmed from "./component/Home/orderConfirmed";
import Contact from "./component/Home/contact";
import ConatctToHR from "./component/Home/contactToHR";
import ContactToCEO from "./component/Home/contactToCEO";
import ProductDetail from "./component/Home/productDetail";
import Home from "./Home";
import Cart from "./component/Home/cart";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/Products" element={<Products />} />
        <Route path="/order-confirmed" element={<OrderConfirmed />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="hr" element={<ConatctToHR />} />
          <Route path="ceo" element={<ContactToCEO />} />
        </Route>
        <Route path="ProductDetail/:id" element={<ProductDetail />} />
        <Route
          path="/cart"
          element={
            <privateRoute>
              <cart />
            </privateRoute>
          }
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
