import './App.css';
import './Login.css';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Slider from './component/Slider';
import Categories from './component/Categories';
import Collection from './component/Collection';
import NewProduct from './component/NewProduct';
import TopPro from './component/TopPro';
import { CartProvider } from 'react-use-cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import LoginData from './component/LoginData';
import Footer from './component/Footer';
import Newws from './component/Newws';



function App() {


  return (
    
    <Router>
    <>
    <CartProvider>

      <Header />
      <Navbar />
      <Switch>
            <Route path="/login">
                <LoginData />
            </Route>
            <Route path="/products">
                <AllProducts />
            </Route>

            <Route path="/contact">
                <Footer />
            </Route>
        </Switch>
      <Slider />
      <Collection />
      <Categories />
      <TopPro />
      <NewProduct />
      <Newws />
      <Footer />
   
      </CartProvider>
        
    </>
    </Router>


  );

  
}

export default App;
