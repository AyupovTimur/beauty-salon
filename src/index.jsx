import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./components/app/App";
import store from "./reduxStore/store";
import { Provider } from "react-redux";
import "./styles/index.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
