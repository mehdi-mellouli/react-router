import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Component/MovieList';
import Data from './Data.js';
import NavBar from './Component/NavBar';
import AddMovie from './Component/AddMovie';
import { Route, Routes } from 'react-router-dom';
import Trailer from './Component/Trailer';


function App() {
  const [movies, setMovies] = useState(Data);
  const [filter, setFilter] = useState("");
  const handleFilter = (val) => {
    setFilter(val)
  }
  // console.log(filter)
  const handleAddMovie = (val) => {
    setMovies([...movies, val])
  }
  return (
    <div className="App">
      <NavBar handleFilter={handleFilter} />

      <Routes>
        <Route path='/' element={<>
          <AddMovie handleAddMovie={handleAddMovie} />
          <MovieList list={movies.filter(elm => elm.title.toLowerCase().includes(filter.toLowerCase())) && movies.filter(elm => elm.rating.includes(filter))} />
        </>} />
        <Route path='/Trailer/:id' element={<Trailer list={movies} />} />
        <Route path='*' element={<h1>  404 NOT FOUND </h1>} />
      </Routes>
    </div>
  );
}

export default App;
