import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomeView,
  ProductView,
  PricingView,
  NotFoundView,
  AppView,
  LoginView,
} from "./views";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="product" element={<ProductView />} />
        <Route path="pricing" element={<PricingView />} />
        <Route path="login" element={<LoginView />} />
        <Route path="app" element={<AppView />} />

        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
