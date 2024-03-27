import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
