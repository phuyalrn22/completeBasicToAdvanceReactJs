import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NavBar from "./components/NavBar";
import ProductProvider from "./context/ProductContext";
import ToastProvider from "./context/ToastContext";
import Contact from "./Pages/contact";
import Login from "./Pages/login";
import ProductDetails from "./Pages/productDetails";
import Description from "./Pages/productDetails/components/Description";
import Review from "./Pages/productDetails/components/Review";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ToastProvider>
    <ProductProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/details/:id" element={<ProductDetails />}>
            <Route path="" element={<Description />}></Route>
            <Route path="description" element={<Description />}></Route>
            <Route path="review" element={<Review />}></Route>
          </Route>
          <Route path="/cart" element={<App />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  </ToastProvider>
);
