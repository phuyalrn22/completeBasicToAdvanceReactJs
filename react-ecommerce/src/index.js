import ReactDOM from "react-dom/client";
import App from "./App";
import ProductProvider from "./context/ProductContext";
import ToastProvider from "./context/ToastProvider";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ToastProvider>
      <ProductProvider>
        <App/>
      </ProductProvider>
    </ToastProvider>
)