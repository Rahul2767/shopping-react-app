import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import HomeScreen from './HomeScreen'
import Signup from "./LoginSignup/Signup"
import Login from "./LoginSignup/Login"
import Orders from './components/profile/Orders';
import ProfileUpdate from './components/profile/ProfileUpdate';
import Support from './components/profile/Support';
import Feedback from './components/profile/Feedback';
import PrivateRoute from './PrivateRoute';
import Cart from './components/cart/Cart';
import ThankYouScreen from './components/profile/ThankYouScreen';
import ErrorScreen from './components/ErrorScreen';
import {disableReactDevTools} from '@fvilers/disable-react-devtools'

disableReactDevTools()

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App></App>}>
      <Route path='/' index={true} element={<HomeScreen />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<ErrorScreen/>} />
      <Route path='' element={<PrivateRoute />}>
        <Route path='/orders' element={<Orders />} />
        <Route path='/profileUpdate' element={<ProfileUpdate />} />
        <Route path='/support' element={<Support />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/thanks' element={<ThankYouScreen/>} />
        <Route path='*' element={<ErrorScreen/>} />
      </Route>
    </Route>
  )
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
