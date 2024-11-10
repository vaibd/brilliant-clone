import Login from "../page/Authentication/Login";
import Signup from "../page/Authentication/Signup";
import CourseCatalog from "../page/Course/CourseCatalog";
import Home from "../page/Home/Home";
import Landing from "../page/Landing/Landing";
import NotFound from "../page/NotFound/NotFound";
import AuthRoutes from "./AuthRoutes";

const privateRoutes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/course-catalog",
    element: <CourseCatalog />,
  },
];

const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Landing />,
  },
];

const routes = [
  ...publicRoutes,
  ...privateRoutes.map((route) => ({
    path: route.path,
    element: <AuthRoutes>{route.element}</AuthRoutes>,
  })),
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
