import React from 'react';
import logo from '../src/logo.png';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'
import Launches from './components/Launches'
import Launch from './components/Launch'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src={logo} alt="logo" style={{ width: 300, margin: 'auto', display: 'block' }} />
          <Route exact path="/" component={Launches}/>
          <Route exact path="/launch/:flight_number" component={Launch}/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
