import React from 'react';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import "./App.css";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" 
      isLargeRow
      fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
