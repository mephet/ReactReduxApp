import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from "./store/index";
import App from "./components/App.jsx";
import { BrowserRouter as Router} from "react-router-dom";

render(
    <Provider store = { store }>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);