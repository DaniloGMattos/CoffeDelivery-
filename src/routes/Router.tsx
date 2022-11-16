import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/defaultLayout";
import { Home } from "../pages/home";
import { Cart } from "../pages/cart";
import { Thankyou } from "../pages/thankyou";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Route>
      </Routes>
    </>
  );
}
