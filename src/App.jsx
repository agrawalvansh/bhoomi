import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import LandingPage from "./pages/LandingPage/landingPage";
import Layout from "./layout";
import Default from "./pages/default";
import Pages from "./pages/Pages";
import User from "./user/User";
const App = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/user/*" element={<User />} />
      <Route path="/user/*" element={<User />} />
      <Route path="/*" element={<Pages />} />
      <Route path="*" element={<Default />} />
    </Route>
  )
);

export default App;