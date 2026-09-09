import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/home/page";
import SpaqCoreProductPage from "../pages/product/SpaqCorePage";
import TechnologyPage from "../pages/technology/TechnologyPage";
import CasesIndexPage from "../pages/cases/CasesIndexPage";
import CaseDetailPage from "../pages/cases/CaseDetailPage";
import ContactPage from "../pages/contact/ContactPage";
import PrivacyPage from "../pages/privacy/PrivacyPage";
import SampleDashboard from "../pages/sample/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products/spaq-core",
    element: <SpaqCoreProductPage />,
  },
  {
    path: "/technology",
    element: <TechnologyPage />,
  },
  {
    path: "/cases",
    element: <CasesIndexPage />,
  },
  {
    path: "/cases/:slug",
    element: <CaseDetailPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPage />,
  },
  {
    path: "/sample",
    element: <SampleDashboard />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
