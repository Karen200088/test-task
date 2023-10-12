import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

import App from './app/App.tsx';
import GlobalStyle from "./app/styles.styled";
import {store} from "./app/appStore";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle/>
      <App/>
    </Provider>
  </React.StrictMode>,
);