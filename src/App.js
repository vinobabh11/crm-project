import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import HomePage from "./pages/homePage";
import DashboardPage from "./pages/dashboardPage";

function App() {
  const isAuthenticated = localStorage.getItem("token") ?? false;

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <PrivateRoute
          exact
          path="/dashboard"
          component={DashboardPage}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    </Router>
  );
}

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

export default App;
