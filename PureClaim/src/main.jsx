import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Manualform from "./Components/Manualform.jsx";
import LandingPage from "./Components/LandingPage.jsx";
import ClaimCheckOptions from "./Components/ClaimCheckOptions.jsx";
import Output from "./Components/Output.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage/>,
      },
      {
        path: "/ClaimCheckOptions",
        element: <ClaimCheckOptions />,
      },
      {
        path: "/ClaimCheckOptions/Manualform",
        element: <Manualform />,
      },
      {
        path:"/ClaimCheckOptions/Manualform/Output",
        element:<Output/>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
