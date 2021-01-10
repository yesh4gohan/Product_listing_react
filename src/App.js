import './App.css';
import React from 'react';
import ProductsList from './components/ProductsList'
import SearchComponent from './components/SearchBar'
import ScrollTop from './components/ScrollTop'
import Header from './components/Header'
function App() {
  const [searchResults,setSearchResults] = React.useState([]);
  const [searchSuccess,setSearchSuccess] = React.useState(true);
  return (
    <div className="App">
      <Header/>
      <SearchComponent searchSuccess={searchSuccess} setSearchSuccess = {setSearchSuccess} searchResults = {searchResults} setSearchResults={setSearchResults}/>
      <ProductsList searchSuccess={searchSuccess} setSearchSuccess = {setSearchSuccess} searchResults = {searchResults} setSearchResults={setSearchResults}/>
      <ScrollTop/>
    </div>
  );
}

export default App;
