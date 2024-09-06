import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";
import { Toaster } from "react-hot-toast";
import Products from "./Pages/Products.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartPage from "./Pages/CartPage.jsx";
import Private from "./Provider/Private.jsx";
import Home from "./Pages/Home.jsx";
import Error from "./components/Error.jsx";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: '/cart',
        element: <Private ><CartPage /></Private>
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <Toaster />
    </QueryClientProvider>
  </StrictMode>
);
