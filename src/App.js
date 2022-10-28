import "./App.css";
// import MainPage from "./components/Mainpage.jsx";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import MainProductPage from "./pages/ProductPage";  
import Contact from "./pages/Contact/index.jsx";
import Faq from "./pages/FAQ/index.jsx";
import Home from './pages/Shop/index'
import CartPay from "./pages/Payment/index";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

    return ( 
            
            <BrowserRouter >
                <Header></Header>
                <Routes >
                    <Route path="/" element={ <Home  />} />
                    <Route path="/showProduct" element={<MainProductPage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path='/faq' element={<Faq />} />
                    <Route path="/payment" element={<CartPay />} />
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
            
            
    );
}

export default App;