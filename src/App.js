
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Containers/Header';
import ProductList from './Containers/ProductList';
import ProductDetail from './Containers/ProductDetail';

function App() {
  return (
    <div >
     <Router>
     <Header/>
       <Switch>
         <Route exact path="/" component={ProductList} />
         <Route exact path="/product/:id" component={ProductDetail} />
         <Route>404 Not Found!!!</Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
