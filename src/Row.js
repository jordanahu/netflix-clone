import React, {useState, useEffect} from 'react';
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}){
    const [movies, setMovies] = useState([]);

    const [trailerUrl, setTrailerUrl] = useState("");

    const handleClick = (movie)=>{
        if (trailerUrl){ 
            setTrailerUrl("")
        }else {
            movieTrailer(movie?.name || "")
            .then(url=>{
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"))
            })
            .catch(err=>console.log(err))
        }
    }
    useEffect(()=>{
        async function fetchData(){
            const {data:{results}} = await axios.get(fetchUrl)
            setMovies(results)
        }
        fetchData()
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay:1
        }
    }

    return (<div className="row">
        <h1>{title}</h1>
        <div className="row__posters">
        {movies.map((movie)=>(
            <img 
            onClick = {()=>handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
            key={movie.id} 
            src={`${baseUrl}/${isLargeRow?movie.poster_path:movie.backdrop_path}`}
            alt={movie.name}/>
        ))}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
    </div>)
}

export default Row;