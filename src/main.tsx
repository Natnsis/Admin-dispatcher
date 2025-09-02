import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import AddDispatcher from "./pages/AddDispatcher.tsx";
import UpdateDispatcher from "./pages/UpdateDispatcher.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/addDispatcher", element: <AddDispatcher /> },
  { path: "/updateDispatcher", element: <UpdateDispatcher /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
