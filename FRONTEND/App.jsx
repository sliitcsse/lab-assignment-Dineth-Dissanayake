import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Customer/Home";
import ViewInventory from "./components/Trader/ViewInventry";
import DisplayCustomer from "./components/Trader/DisplayCustomer";
import AddItems from "./components/Trader/AddItems";
import AddPromotion from "./components/Trader/AddPromotion";
import ViewPromotion from "./components/Trader/ViewPromotion";
import ViewItems from "./components/Customer/ViewItems";
import DisplayCart from "./components/Customer/DisplayCart";
import Wishlist from "./components/Customer/ViewWlist";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/vInventory" element={<ViewInventory/>} />
        <Route path="/DCustomer" element={<DisplayCustomer />} />
        <Route path="/additem" element={<AddItems />} />
        <Route path="/apromo" element={<AddPromotion />} />
        <Route path="/viewpromo" element={<ViewPromotion />} />
        <Route path="/viewitems" element={<ViewItems />} />
        <Route path="/DCart" element={<DisplayCart />} />
        <Route path="/Wlist" element={<Wishlist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
