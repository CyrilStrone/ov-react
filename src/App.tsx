import './App.css';
import './index.css';
import { Header } from './Common/Header/Organoids/Header';
import { Footer } from './Common/Footer/Organoids/Footer';
import { Route, Routes } from "react-router-dom";
import { Home } from './Pages/Home/Organoids/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_Actual">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
       
      </div>
      <Footer />
    </div>
  );
}

export default App;
