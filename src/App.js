import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CustomerLogin from "./components/CustomerLogin";
import CustomerSignUp from "./components/CustomerSignUp";
import Navigation from "./components/Navigation";
import Products from "./products/Products";
import SuccessOrder from "./products/SuccessOrder";
import Cart from "./products/Cart";
import OrderedItems from "./products/OrderedItems";


//backend url
// export const url ="https://fashionly-backend.onrender.com";
export const url ="http://localhost:8000";


function App() {
  return   (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/customer-login" element={<CustomerLogin />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customer-sign-up" element={<CustomerSignUp />} />
          <Route path="/navbar" element={<Navigation />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<OrderedItems />} /> 
           <Route path="/success" element={<SuccessOrder />} /> 
          <Route path="*" element={<Navigate to="/Dashboard" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
  

  
}


export default App;
