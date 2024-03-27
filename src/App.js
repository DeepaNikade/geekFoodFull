import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingScreen from "./Screen/LandingScreen";
import Quotescreen from "./Screen/Quotescreen";
import RestaurantScreen from "./Screen/RestaurantScreen";
import AppTemplate from "./Components/AppTemplate";
import ContactScreen from "./Screen/ContactScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppTemplate />} >
        <Route path="/" element={<LandingScreen />} />
        <Route path="quotes" element={<Quotescreen />} />
        <Route path="restaurants" element={<RestaurantScreen />} />
        <Route path="contact" element={<ContactScreen />} />
        </Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
