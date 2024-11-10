import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./router/RouterProvider";
import store from "./redux/store";
import { Provider } from "react-redux";

const router = createBrowserRouter(routes);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
