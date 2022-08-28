import ReactDOM from "react-dom/client";
import App from "./App";
import ProductProvider from "./context/ProductContext";
import ToastProvider from "./context/ToastProvider";
import "./index.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ToastProvider>
      <ProductProvider>
        <BrowserRouter>
          <App/>
          <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/about" element={<About/>} />
            <Route path ="/contact" element={<Contact/>} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </ToastProvider>
)