import './App.css';
import './index.css';
import { Header } from './Common/Header/Organelles/Header';
import { Footer } from './Common/Footer/Organelles/Footer';
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from './Pages/Home/Organelles/Home';
import { ItemsByType } from './Pages/ItemsByType/Organelles/ItemsByType';
import { Stock } from './Pages/Stock/Organelles/Stock';
import { HowOrder } from './Pages/HowOrder/Organelles/HowOrder';
import { Basket } from './Pages/Basket/Organelles/Basket';
import ScrollToTop from 'react-scroll-to-top';
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="App">
      <Header />
      <div className="App_Actual">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/TShirts"  element={<ItemsByType type={"T-shirts"}/>}></Route>
          <Route path="/Hoodie" element={<ItemsByType type={"Hoodie"}/>}></Route>
          <Route path="/Scarves" element={<ItemsByType type={"Scarves"}/>}></Route>
          <Route path="/Jersey" element={<ItemsByType type={"Jersey"}/>}></Route>
          <Route path="/Stock" element={<Stock />}></Route>
          <Route path="/HowOrder" element={<HowOrder />}></Route>
          <Route path="/Basket" element={<Basket />}></Route>
        </Routes>
       
      </div>
      <Footer />
      <ScrollToTop smooth />
    </div>
  );
}

export default App;
