import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./router/RouterProvider";
import { useSelector } from "react-redux";
import { useLoading } from "./redux/loadingSlice";
import LoadingSpinner from "./components/Shared/LoadingSpinner";

const router = createBrowserRouter(routes);

function App() {
  const isLoading = useSelector(useLoading);
  return (
    <>
      {isLoading ? <LoadingSpinner /> : ""}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
