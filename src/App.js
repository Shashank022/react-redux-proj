import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header>
          <Switch>
          <Route path="/" exact component={ProductListing}></Route>
          <Route path="/product/:productId" exact component={ProductDetails}></Route>
          <Route>404 Not Found..!!</Route>
          </Switch>
        </Header>
      </Router>
    </div>
  );
}

export default App;
