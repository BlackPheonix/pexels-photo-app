import React from 'react'
import SearchBar from './components/SearchBar';
import PhotoList from './components/PhotoList';


function App() {
  return (
    
    <div className="photo-app">

      <div className="container">

        <SearchBar  />

       <PhotoList />

      </div>
    </div>
  );
}

export default App;
