import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./views/Home";
import Commands from "./views/Commands";
import { LIT_BOT_SERVER_URL, CORS_SERVER_URL } from "./config.json";

function App() {
  fetch(`${CORS_SERVER_URL}${LIT_BOT_SERVER_URL}`);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavbarComponent />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/commands" exact component={Commands} />
      </Switch>
    </Router>
  );
}

export default App;
