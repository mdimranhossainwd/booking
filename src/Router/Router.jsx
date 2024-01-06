import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error/Error";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register";
import UpdateForm from "../Components/Update/UpdateForm";
import AllAssainment from "../Layout/AllAssainment";
import CreateAssaingment from "../Layout/CreateAssaingment";
import HomeLayout from "../Layout/HomeLayout";
import MainLayout from "../Layout/MainLayout";
import MyAssainmentPage from "../Layout/MyAssainmentPage";
import ViewDetails from "../Layout/ViewDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/updateform/:id",
        element: <UpdateForm />,
        loader: ({ params }) =>
          fetch(
            `https://b8a11-server-side-mdimranhossainwd-master-jn8bazyv9.vercel.app/createassainment/${params.id}`
          ),
      },
      {
        path: "/myassainment",
        element: (
          <PrivateRoute>
            <MyAssainmentPage />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://b8a11-server-side-mdimranhossainwd-master-jn8bazyv9.vercel.app/myassainments"
          ),
      },
      {
        path: "/viewdetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b8a11-server-side-mdimranhossainwd-master-jn8bazyv9.vercel.app/createassainment/${params.id}`
          ),
      },

      {
        path: "/create",
        element: (
          <PrivateRoute>
            <CreateAssaingment />
          </PrivateRoute>
        ),
      },
      {
        path: "/allassainments",
        element: <AllAssainment />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
]);

export default router;
