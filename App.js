import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Footer from './Components/Footer/Footer'
import menbanner from "./Components/Assests/bannermen.jpeg"
import womenbanner from "./Components/Assests/bannerwomen5.avif"
import kidbanner from "./Components/Assests/bannerkid.jpeg"
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/Mens" element={<ShopCategory banner={menbanner} category="Mens"/>}/>
        <Route path="/Womens" element={<ShopCategory  banner={womenbanner}     category="Womens"/>}/>
        <Route path="/Kids" element={<ShopCategory banner={kidbanner} category="Kids"/>}/>
        <Route path='/Product' element={<Product/>}>
           <Route path=':ProductId' element={<Product/>}/>
        </Route>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Login" element={<LoginSignup/>}/>
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
