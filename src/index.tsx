import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import store from "./app/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>
);
