import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from '../../routes/AppRoutes';
import store from "../../store/store";
// import { AppRouters, ROUTES } from '../../app.router';


function App() {

  return (
    <Provider store={store}>
      <Router>


          {/*// <AppRouters routes={ROUTES} />*/}
          <AppRoutes />

      </Router>
    </Provider>
  );
}

export default App;
