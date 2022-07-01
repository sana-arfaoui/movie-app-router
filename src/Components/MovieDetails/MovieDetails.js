import React from 'react'
import {Link} from 'react-router-dom'
import { data } from '../../data'
import { useParams } from 'react-router-dom'
import './MovieDetails.css'
export default function MovieDetails() {
  console.log(data)
  
   let {id}=useParams()
   console.log(id)
   let mouvies = data.find((mouvie)=>mouvie.id==id);
   console.log(mouvies)
   let {topic,video,title}=mouvies
 
  return (
    
         <div>
        <h1>{title}</h1>
        <div className='details'>
     <iframe width="560" height="315" 
        src={video}
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
        picture-in-picture" allowfullscreen></iframe>
        <p>{topic}</p>
        </div>
        <Link to='/' className='lien'>  Go Back</Link>
    </div>
  )
}
