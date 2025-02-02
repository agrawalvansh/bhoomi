import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout.jsx'
import LandingPage from './pages/landingpage.jsx'
import NotFoundPage from './pages/default.jsx'
import LoginPage from './pages/login.jsx'
import SignupPage from './pages/signup.jsx'
import HomePage from './pages/home.jsx'
import UsersPage from './pages/user.jsx'
import ProductsPage from './pages/products.jsx'
import OrdersPage from './pages/orders.jsx'
import CommunityPage from './pages/communityPage.jsx'
import AnalyticsPage from './pages/analytics.jsx'
import MessagesPage from './pages/messages.jsx'
import SettingsPage from './pages/settings.jsx'
import TeamManagementPage from './pages/teamMangement.jsx'
import SupplierPortalPage from './pages/supplies.jsx'
import NavBar from './pages/navBar.jsx'
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
      {
        path: "home",
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
        path: "/navbar",
        element: <NavBar />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
