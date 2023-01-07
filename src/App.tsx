import './App.css';
import './index.css';
import { Header } from './Common/Header/Organoids/Header';
import { Footer } from './Common/Footer/Organoids/Footer';
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from './Pages/Home/Organoids/Home';
import { ItemsByType } from './Pages/ItemsByType/Organoids/ItemsByType';
import { Stock } from './Pages/Stock/Organoids/Stock';
import { HowOrder } from './Pages/HowOrder/Organoids/HowOrder';
import { Basket } from './Pages/Basket/Organoids/Basket';
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
