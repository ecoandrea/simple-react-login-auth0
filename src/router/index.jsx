import { createBrowserRouter } from "react-router-dom";
import Profile from "../pages/Profile";
import PrivateLayout from "../layout/PrivateLayout";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <PrivateLayout />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);
