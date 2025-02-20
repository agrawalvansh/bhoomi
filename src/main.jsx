import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout.jsx'
import LandingPage from './pages/landingPage.jsx'
import NotFoundPage from './pages/default.jsx'
import LoginPage from './pages/login.jsx'
import SignupPage from './pages/signup.jsx'
import HomePage from './user/storeAdmin/home.jsx'
import UsersPage from './user/storeAdmin/user.jsx'
import ProductsPage from './user/storeAdmin/products.jsx'
import OrdersPage from './user/storeAdmin/orders.jsx'
import CommunityPage from './user/storeAdmin/communityPage.jsx'
import AnalyticsPage from './user/storeAdmin/analytics.jsx'
import MessagesPage from './user/storeAdmin/messages.jsx'
import SettingsPage from './user/storeAdmin/settings.jsx'
import TeamManagementPage from './user/storeAdmin/teamMangement.jsx'
import SupplierPortalPage from './user/storeAdmin/supplies.jsx'
import ContactPage from './pages/contact.jsx'
import FAQsPage from './pages/faqs.jsx'
import Home from './user/visitor/Home.jsx'
import ServiceRouter from './user/visitor/Service.jsx'
import Profile from './user/visitor/Profile.jsx'
import GardenerServiceRouter from './user/gardener/Service.jsx'
import GardenerHome from './user/gardener/GardenerHome.jsx'
import GardenerProfile from './user/gardener/Profile.jsx'
import QualityAssurance from './user/plantExpert/QualityAssurance.jsx'
import PlantSelection from './user/plantExpert/PlantSelection.jsx'
import PlantUpload from './user/plantExpert/PlantUpload.jsx'
import DesignerHome from './user/designer/Home.jsx'
import CustomizationInterface from './user/designer/CustomizationInterface.jsx'
import BudgetPage from './user/designer/BudgetPage.jsx'
import ProfilePage from './user/designer/ProfilePage.jsx'
import DesignerNavbar from './user/designer/Navbar.jsx'
import DesignHub from './user/designer/DesignHub.jsx'
import NavBar from './user/productManager/NavBar.jsx'
import StockOverview from './user/productManager/StockOverview.jsx'
import OrderPrep from './user/productManager/OrderPrep.jsx'
import ReorderPage from './user/productManager/ReorderPage.jsx'
import SuppliersPage from './user/productManager/SuppliersPage.jsx'
import ProductManagerProfile from './user/productManager/ProductManagerProfile.jsx'
import PlantExpertProfile from './user/plantExpert/PlantExpertProfile.jsx'
import PlantExpertHome from './user/plantExpert/PlantExpertHome.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <NotFoundPage />
      },
      {
        path: "",
        element: <LandingPage />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "signup",
        element: <SignupPage />
      },

      //Admin
      {
        path: "/admin/home",
        element: <HomePage />,
      },
      {
        path: "/admin/users",
        element: <UsersPage />,
      },
      {
        path: "/admin/products",
        element: <ProductsPage />,
      },
      {
        path: "/admin/orders",
        element: <OrdersPage />,
      },
      {
        path: "/admin/community",
        element: <CommunityPage />,
      },
      {
        path: "/admin/analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "/admin/messages",
        element: <MessagesPage />,
      },
      {
        path: "/admin/settings",
        element: <SettingsPage />,
      },
      {
        path: "/admin/team",
        element: <TeamManagementPage />,
      },
      {
        path: "/admin/supplies",
        element: <SupplierPortalPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/faqs",
        element: <FAQsPage />,
      },

      //Visitor
      {
        path: "/visitor/home",
        element: <Home />,
      },
      {
        path: "/visitor/service/*",
        element: <ServiceRouter />,
      },
      {
        path: "/visitor/profile",
        element: <Profile />,
      },

      //Gardener
      {
        path: "/gardener/profile",
        element: <GardenerProfile />,
      },
      {
        path: "/gardener/service/*",
        element: <GardenerServiceRouter />,
      },
      {
        path: "/gardener/home",
        element: <GardenerHome />,
      },

      //Plant Expert
      {
        path: "/plant/plant-selection",
        element: <PlantSelection />,
      },
      {
        path: "/plant/plant-upload",
        element: <PlantUpload />,
      },
      {
        path: "/plant/quality-check",
        element: <QualityAssurance />,
      },
      {
        path: "/plant/profile",
        element: <PlantExpertProfile />,
      },
      {
        path: "/plant/home",
        element: <PlantExpertHome />,
      },

      //Designer
      {
        path: "/designer/design-hub",
        element: <DesignHub />,
      },
      {
        path: "/designer/customization",
        element: <CustomizationInterface />,
      },
      {
        path: "/designer/budget",
        element: <BudgetPage />,
      },
      {
        path: "/designer/profile",
        element: <ProfilePage />,
      },
      {
        path: "/designer/home",
        element: <DesignerHome />,
      },

      //Product Manager
      {
        path: "/product/navbar",
        element: <NavBar />
      },
      {
        path: "/product/stock-overview",
        element: <StockOverview />
      },
      {
        path: "/product/order-prep",
        element: <OrderPrep />
      },
      {
        path: "/product/reorder",
        element: <ReorderPage />
      },
      {
        path: "/product/suppliers",
        element: <SuppliersPage />
      },
      {
        path: "/product/profile",
        element: <ProductManagerProfile />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
