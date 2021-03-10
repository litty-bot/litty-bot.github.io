import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./views/Home";
import Commands from "./views/Commands";

function App() {
	return (
		<>
			<Router basename={process.env.PUBLIC_URL}>
				<NavbarComponent />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/commands" exact component={Commands} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
