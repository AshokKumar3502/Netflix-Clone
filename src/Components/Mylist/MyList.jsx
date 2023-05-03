import React from 'react'
import { useState ,useEffect} from "react";
import{Link}from "react-router-dom"
import axios from "axios";
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"
const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const popular = "popular";
const topRated = "top_rated";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;
const Row = ({ title, arr = [] }) => (
    <div className="row">
        <h2>{title}</h2>

        <div>
            {arr.map((item, index) => (
                <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
            ))}
        </div>
    </div>
  
);
const Banner = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    useEffect(() => {
    const fetchPopular = async () => {
        const {
            data: { results },
        } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}&page=3`);
        setPopularMovies(results);
    };
    const fetchTopRated = async () => {
        const {
            data: { results },
        } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}&page=3`);
        setTopRatedMovies(results);
    };
    fetchTopRated()
    
    fetchPopular()},[]);
  return (
    <div> 
       
         <div
    className="banner"
    style={{
        backgroundImage: popularMovies[8]
            ? `url(${`${imgUrl}/${popularMovies[8].poster_path}`})`
            : "rgb(16, 16, 16)",
    }}
>

    {popularMovies[8] && <h1>{popularMovies[8].original_title}</h1>}
    {popularMovies[8] && <p>{popularMovies[8].overview}</p>}

    <div>
  
        <button><BiPlay /> Play  </button>
        <button><Link to="/mylist">My List <AiOutlinePlus /></Link> </button>
    </div>
</div>
<Row title={"My Lists"} arr={topRatedMovies} />
</div>

  )
}

export default Banner