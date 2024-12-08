import LoginPage from "./pages/LoginPage.jsx";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Orders from "./pages/Orders.jsx";
import Products from "./pages/Products.jsx";
import Reviews from "./pages/Reviews.jsx";
import Statistics from "./pages/Statistics.jsx";
import Currencies from "./pages/Currencies.jsx";
import Setting from "./pages/Setting.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/products' element={<Products />} />
            <Route path='/reviews' element={<Reviews />} />
            <Route path='/statistics' element={<Statistics />} />
            <Route path='/currencies' element={<Currencies />} />
            <Route path='/setting' element={<Setting />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
