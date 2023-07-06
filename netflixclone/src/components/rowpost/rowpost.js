import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {imageUrl,API_KEY} from '../../constants/constants.js'
import './rowpost.css'
import Youtube from "react-youtube"
function Rowpost(props) {
   const[movie,setMovie]=useState([])
   const[urlId,seturlId]=useState("")
   useEffect(()=>{
     axios.get(props.url).then((response)=>{
      console.log(response.data.results)
      setMovie(response.data.results)

     })
   },[])
   const opts = {
    height: '390',
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
   const trailerr=(id)=>{
   console.log(id)
   axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY} `).then((Response)=>{
    console.log(Response.data);
    if(Response.data.results!==0){
      seturlId(Response.data.results[0])
      } 
  })
   }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movie.map((value)=>{
          return <img onClick={()=>trailerr(value.id)} className={props.cls} alt='movieimage' src={`${imageUrl+value.backdrop_path}`} ></img>
        })}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />} 
   </div>
  )
}

export default Rowpost
