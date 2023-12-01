import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Title from "./pages/shop/title.js";
import Linebar from "./pages/shop/linebar.js";
import GridView from "./pages/shop/gridView.js";
import Cart from "./pages/Product/Cart.js";
import ProductDetail from "./pages/Product/productdetail.js";
import Demo from "./pages/Product/demo.js";
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
            path="/productdetail/:id"
            element={[<Header />, <ProductDetail />, <Footer />]}
          />
          <Route
            path="/Cart"
            element={[<Header />, <Cart />, <Footer />]}
          ></Route>
          <Route
            path="/Demo"
            element={[<Header />, <Demo />, <Footer />]}
          ></Route>
          <Route
            path="/Demo/:id"
            element={[<Header />, <Demo />, <Footer />]}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
