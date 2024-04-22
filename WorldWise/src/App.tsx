import { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const ProductView = lazy(() => import("@views/ProductView/index"));
const PricingView = lazy(() => import("@views/PricingView/index"));
const NotFoundView = lazy(() => import("@views/NotFoundView/index"));
const AppView = lazy(() => import("@views/AppView/index"));
const LoginView = lazy(() => import("@views/LoginView/index"));
const HomeView = lazy(() => import("@views/HomeView/index"));

const CityList = lazy(() => import("@components/CityList"));
const CountryList = lazy(() => import("@components/CountryList"));
const City = lazy(() => import("@components/City"));
const Form = lazy(() => import("@components/Form"));
const ProtectedRoute = lazy(
  () => import("@views/ProtectedRoute/ProtectedRoute")
);

const CitiesProvider = lazy(() => import("@/contexts/CitiesContext"));
const AuthProvider = lazy(() => import("@/contexts/AuthContext"));

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
