// App.js
import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from './screens/SignUp';
import {CartProvider} from './components/contextReducer'; // Correct import without curly braces
import MyOrder from './screens/MyOrder';


function App() {
  return (
    <CartProvider> {/* Use the default import syntax without curly braces */}
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/CreateUser" element={<SignUp />} />
            <Route exact path="/myOrder" element={<MyOrder/>} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
