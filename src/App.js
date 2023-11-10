import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Title from "./pages/shop/title";
import Linebar from "./pages/shop/linebar";
import GridView from "./pages/shop/gridView";
import Cart from "./pages/Product/Cart";
import Productdetail from "./pages/Product/productdetail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/Shop"
            element={[
              <Header />,
              <Title />,
              <Linebar />,
              <GridView />,
              <Footer />,
            ]}
          ></Route>
          <Route
            path="/detail"
            element={[<Header />, <Productdetail />, <Footer />]}
          ></Route>
          <Route
            path="/Cart"
            element={[<Header />, <Cart />, <Footer />]}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
