import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import Header from "./components/Header";
import Footer from "./components/Footer"
import HomeScreen from "./components/screens/HomeScreen"
import ProductScreen from "./components/screens/ProductScreen"
import CartScreen from './components/screens/CartScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import ShippingScreen from './components/screens/ShippingScreen';
import PaymentScreen from './components/screens/PaymentScreen';
import PlaceOrderScreen from './components/screens/PlaceOrderScreen';
import OrderScreen from './components/screens/OrderScreen';
import UserListScreen from './components/screens/UserListScreen';
import UserEditScreen from './components/screens/UserEditScreen';
import ProductListScreen from './components/screens/ProductListScreen';
import ProductEditScreen from './components/screens/ProductEditScreen';
import OrdersListScreen from './components/screens/OrderListScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
             <Route path='/login' component={LoginScreen}  exact/>
             <Route path='/profile' component={ProfileScreen}  exact/>
             <Route path='/register' component={RegisterScreen}  exact/>
             <Route path='/product/:id' component={ProductScreen} />
             <Route path='/admin/productlist' component={ProductListScreen} exact />
             <Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact/>
             <Route path='/admin/product/:id/edit' component={ProductEditScreen}/>
             <Route path='/shipping' component={ShippingScreen}  exact/>
             <Route path='/payment' component={PaymentScreen}  exact/>
             <Route path='/placeorder' component={PlaceOrderScreen}  exact/>
             <Route path='/order/:id' component={OrderScreen} />
             <Route path='/admin/orderlist' component={OrdersListScreen}/>
             <Route path='/cart/:id?' component={CartScreen} />
             <Route path='/admin/userList' component={UserListScreen} />
             <Route path='/admin/user/:id/edit' component={UserEditScreen} />
             <Route path='/search/:keyword' component={HomeScreen}  exact/>
             <Route path='/page/:pageNumber' component={HomeScreen}  />
             <Route path='/search/:keyword/page/:pageNumber' component={HomeScreen} exact />
             <Route path='/' component={HomeScreen}  exact/>
             
          
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
