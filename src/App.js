import './App.css';
import Movielist from './Components/Movielist/Movielist';
import NavBar from './Components/Navbar/Navbar';
import {data} from './data';
import React,{useState} from 'react'
import BasicModal from './Components/Modal/Modal';
import {Routes,Route} from "react-router-dom"
import MovieDetails from './Components/MovieDetails/MovieDetails';
function App() {
 
  const[movies,setMovies]=useState(data)
  const[search,setSearch]=useState("")
  const[rate,setRate]=useState(0)
  return (
    <div className="App">
    
      <NavBar setSearch={setSearch} setRate={setRate} rate={rate} />
      <section>
        <div className='BasicModal'>
        <BasicModal movies={movies} setMovies={setMovies}/>
        </div>
 
     
      </section>
      <Routes>
        
        <Route path="/" element={<Movielist movies={movies} search={search} rate={rate}/>}/>
        <Route path='moviedetails/:id' element={<MovieDetails />}/>
      
     </Routes>
      </div>
  );
}


export default App;
