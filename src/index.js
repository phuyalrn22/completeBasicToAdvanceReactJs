import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NavBar from "./components/NavBar";
import ProductProvider from "./context/ProductContext";
import ToastProvider from "./context/ToastContext";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import ProductDetails from "./Pages/productDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ToastProvider>
    <ProductProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<App />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  </ToastProvider>
);
