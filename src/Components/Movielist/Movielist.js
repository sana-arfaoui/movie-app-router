import React from 'react'
import Movieitem from '../Movieitem/Movieitem'
import './Movielist.css';
import {Outlet} from "react-router-dom"
function Movielist(props) {
  
  return (
    <div className='Movielist'>
      {props.movies
       .filter((movie) =>
        props.rate && !props.search
            ?movie.rate === props.rate
            : props.search && !props.rate
            ?movie.title.toLowerCase().includes(props.search)
            : props.rate && props.search
            ?movie.title
                  .toLowerCase()
                  .includes(props.search) &&
                  movie.rate === props.rate
            : movie.title.toLowerCase().includes(props.search)
            
    )
    .map((movie) => {
        return <Movieitem key={movie.id} {...movie} />;
    })}

       
       <Outlet/>
    </div>
  );
}

export default Movielist