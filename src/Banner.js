import React, {useEffect, useState} from 'react'
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            const videos = request.data.results;
            setMovie(videos[Math.floor(Math.random() * videos.length-1)]);
            return request;
        }
        fetchData();
    },[]);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1)+ "..." : str; 
    }

    return (
        <header className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage:`url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPostion:"center center"
            }}
        
        >
            <div className="banner__content">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.orignal_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
        <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className="banner--fadeBottom"/>
        </header>
    )
}

export default Banner
