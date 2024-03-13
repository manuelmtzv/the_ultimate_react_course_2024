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
import Form from "./components/Form";
import { CitiesProvider, AuthProvider } from "@/contexts";
import ProtectedRoute from "./views/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomeView />} />
            <Route path="product" element={<ProductView />} />
            <Route path="pricing" element={<PricingView />} />
            <Route path="login" element={<LoginView />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppView />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route index element={<CityList />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>

            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
