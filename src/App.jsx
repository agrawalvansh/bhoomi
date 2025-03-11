import Designer from "./user/designer/Desiger";
import Gardener from "./user/gardener/Gardener";
import PlantExpert from "./user/plantExpert/PlantExpert";
import ProductManager from "./user/productManager/ProductManager";
import StoreAdmin from "./user/storeAdmin/StoreAdmin";
import Visitor from "./user/visitor/Visitor";
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import LandingPage from "./pages/LandingPage/landingPage";
import Layout from "./layout";
import Default from "./pages/default";
import Pages from "./pages/Pages";
import User from "./user/user/User";
const App = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/designer/*" element={<Designer />} />
      <Route path="/gardener/*" element={<Gardener />} />
      <Route path="/plant/*" element={<PlantExpert />} />
      <Route path="/product/*" element={<ProductManager />} />
      <Route path="/admin/*" element={<StoreAdmin />} />
      <Route path="/visitor/*" element={<Visitor />} />
      <Route path="/user/*" element={<User />} />
      <Route path="/*" element={<Pages />} />
      {/* Handle 404 and unknown routes */}
      <Route path="*" element={<Default />} />
    </Route>
  )
);

export default App;
