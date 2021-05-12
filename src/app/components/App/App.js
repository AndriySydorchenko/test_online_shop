import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import AppRoutes from '../../routes/AppRoutes';
import store from "../../store/store";



function App() {

  return (
    <Provider store={store}>
      <HashRouter basename={process.env.PUBLIC_URL}>
          <AppRoutes />
      </HashRouter>
    </Provider>
  );
}

export default App;
