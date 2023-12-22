import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomeView,
  ProductView,
  PricingView,
  NotFoundView,
  AppView,
  LoginView,
} from "./views";
import CityList from "./components/CityList";
import { useCities } from "./hooks/useCities";
import CountryList from "./components/CountryList";

function App() {
  const { cities, loading } = useCities();

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeView />} />
        <Route path="product" element={<ProductView />} />
        <Route path="pricing" element={<PricingView />} />
        <Route path="login" element={<LoginView />} />
        <Route path="app" element={<AppView />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={loading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={loading} />}
          />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={loading} />}
          />
          <Route path="form" element={<div>Form</div>} />
        </Route>

        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
