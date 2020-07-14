import React from 'react';
import BookList from './components/Table.js'
import Search from './components/Search.js'
import Navbar from './components/Navbar.js'
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <BookList />
    </div>
  );
}

export default App;
