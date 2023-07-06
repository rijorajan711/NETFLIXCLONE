import React,{useEffect,useState} from 'react'
import './banner.css'
import {API_KEY,imageUrl} from '../../constants/constants.js'
import axios from "../../axios"
function Banner() {
  const [movie,setMovie]=useState([])
    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`).then((response)=>{
       
          setMovie(response.data.results[Math.floor(Math.random()*20)])
      })
    },[])
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path: ""})`}} className='banner'>
        <div className='content'>
            <h1 className='titile'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className='fade_bottom'></div>

      
    </div>
  )
}

export default Banner
