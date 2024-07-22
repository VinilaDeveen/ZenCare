import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Patients from "./pages/patients/Patients";
import Inventory from "./pages/inventory/Inventory";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/patients",
    element: <Patients/>,
  },
  {
    path: "/inventory",
    element: <Inventory/>,
  },
  {
    path: "/patients/:patientId",
    element: <Single/>,
  },
  {
    path: "/inventory/:inventoryId/new",
    element: <New/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;