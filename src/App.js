import "./App.css";
import MainPage from "./components/Mainpage.jsx";
import HeaderPage from "./components/Header.jsx";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import ShowProduct from "./components/ShowProduct";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import CartPay from "./components/CartPayment";

// import { Route } from "react-router-dom";
function App() {

    return ( 
        <div>
            
            
            <BrowserRouter >
            <HeaderPage />
                <Routes >
                    <Route path="/" element={ <MainPage />} />
                    <Route path="/showProduct" element={<ShowProduct />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path='/faq' element={<Faq />} />
                    <Route path="/payment" element={<CartPay />} />
                </Routes>
            <Footer /> 
            </BrowserRouter>
            
            
        </div>
    );
}

export default App;