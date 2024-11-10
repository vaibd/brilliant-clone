import Login from "../page/Authentication/Login";
import Signup from "../page/Authentication/Signup";
import CoursesCatalog from "../page/Courses/CoursesCatalog";
import Home from "../page/Home/Home";
import Landing from "../page/Landing/Landing";
import NotFound from "../page/NotFound/NotFound";
import AuthRoutes from "./AuthRoutes";
import NonAuthRoutes from "./NonAuthRoutes";

const privateRoutes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/courses",
    element: <CoursesCatalog />,
  },
];

const publicRoutes = [
  {
    path: "/login",
    element: (
      <NonAuthRoutes>
        <Login />
      </NonAuthRoutes>
    ),
  },
  {
    path: "/signup",
    element: (
      <NonAuthRoutes>
        <Signup />
      </NonAuthRoutes>
    ),
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
