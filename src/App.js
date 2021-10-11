
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart'
import Default from './components/Default';
import {Switch, Route} from 'react-router-dom';
import Model from './components/Model';
function App() {
  return (
    <>
    <NavBar/>
    <Switch>
      <Route exact path='/' component={ProductList}/>
      <Route path='/details' component={Details}/>
      <Route path='/cart' component={Cart}/>
      <Route path='/default' component={Default}/>
    </Switch>
    <Model/>
    </>
  );
}

export default App;
