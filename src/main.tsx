import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Description from "./pages/CandidateDesc";
import Candidates from "./pages/Candidates";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import "./index.css";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import JobForm from "./pages/JobForm";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dash",
    element: <Dashboard />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "candidates",
        element: <Candidates />,
      },
      {
        path: "candidates/:id",
        element: <Description />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "job-create/:id",
        element: <JobForm />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
