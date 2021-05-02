import './App.css';

import { Suspense } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import routes from './routes/routes';

function Loading() {
  return (
    <div className="preloader">
      <div className="loader">
        <h4>Pritom Chowdhury Dip</h4>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          {
            routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                >
                </Route>
              )
            })
          }
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
