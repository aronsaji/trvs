import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "pages";
import SigninPage from "pages/signin";
import LeksehjelpPage from "pages/leksehjelp";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/leksehjelp" component={LeksehjelpPage} />
      </Switch>
    </Router>
  );
}

export default App;
