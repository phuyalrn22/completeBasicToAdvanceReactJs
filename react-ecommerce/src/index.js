import ReactDOM from "react-dom/client";
import App from "./App";
import ProductProvider from "./context/ProductContext";
import ToastProvider from "./context/ToastProvider";
import "./index.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./component/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Description from "./pages/ProductDetails/components/Description";
import Review from "./pages/ProductDetails/components/Review";
import Login from "./pages/login";
import Register from "./pages/register";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ToastProvider>
      <ProductProvider>
        <BrowserRouter>
         <Navbar/>
          <Routes>
            <Route path="/" element={<App/>} />
            <Route path ="/details/:id" element={<ProductDetails/>}>
              <Route path="" element={<Description/>}/>
              <Route path="description" element={<Description/>}/>
              <Route path="review" element={<Review/>}/>
            </Route>
            <Route path="/about" element={<About/>} />
            <Route path ="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </ToastProvider>
)