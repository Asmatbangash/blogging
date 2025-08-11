import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import {
  All,
  Finance,
  LifeStyle,
  Startup,
  Technology,
  Blog,
} from "./pages/Pages_index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <All />,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
      {
        path: "/lifeStyle",
        element: <LifeStyle />,
      },
      {
        path: "/start-up",
        element: <Startup />,
      },
      {
        path: "/finance",
        element: <Finance />,
      },
      {
        path: "/blog/:id",
        element: <Blog />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
