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
  Layout,
  DashbaordOverview,
  AddBlog,
  Comments,
  BlogList,
} from "./pages/Pages_index.js";
import { Login } from "./components/Comp_index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <All /> },
      { path: "technology", element: <Technology /> },
      { path: "lifestyle", element: <LifeStyle /> },
      { path: "start-up", element: <Startup /> },
      { path: "finance", element: <Finance /> },
      { path: "blog/:id", element: <Blog /> },
    ],
  },
  {
    path: "admin",
    element: <Layout />,
    children: [
      { index: true, element: <DashbaordOverview /> },
      { path: "dashbaord", element: <DashbaordOverview /> },
      { path: "add-blog", element: <AddBlog /> },
      { path: "Comments", element: <Comments /> },
      { path: "blog-list", element: <BlogList /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
