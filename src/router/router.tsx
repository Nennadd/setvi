import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreatePage from "../pages/CreatePage";
import NotFoundPage from "../pages/NotFoundPage";
import DetailsPage from "../pages/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/create",
    element: <CreatePage />,
  },
  {
    path: "/details/:id",
    element: <DetailsPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
