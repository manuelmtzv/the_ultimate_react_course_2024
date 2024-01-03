import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  HomeView,
  ProductView,
  PricingView,
  NotFoundView,
  AppView,
  LoginView,
} from "./views";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import { useCities } from "./hooks/useCities";
import Form from "./components/Form";

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
          <Route index element={<Navigate replace to="cities" />} />
          <Route
            index
            element={<CityList cities={cities} isLoading={loading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={loading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={loading} />}
          />
          <Route path="form" element={<Form />} />
        </Route>

        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
