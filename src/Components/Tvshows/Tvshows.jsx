import React from 'react'
import { useState ,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"
const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const popular = "popular";
const upcoming = "upcoming";

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

const Tvshows = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    useEffect(() => {
        const fetchUpcoming = async () => {
            const {
                data: { results },
            } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}&page=2`);
            setUpcomingMovies(results);
            console.log(results)
        };
    const fetchPopular = async () => {
        const {
            data: { results },
        } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
        setPopularMovies(results);
    };
    fetchUpcoming()
    fetchPopular()},[]);
  return (
    <div>  <div
    className="banner"
    style={{
        backgroundImage: popularMovies[17]
            ? `url(${`${imgUrl}/${popularMovies[17].poster_path}`})`
            : "rgb(16, 16, 16)",
    }}
>
    {popularMovies[17] && <h1>{popularMovies[17].original_title}</h1>}
    {popularMovies[17] && <p>{popularMovies[17].overview}</p>}

    <div>
        <button><BiPlay /> Play  </button>
        <button><Link to="/mylist">My List <AiOutlinePlus /></Link> </button>
    </div>
</div>
<Row title={"TV Shows"} arr={upcomingMovies} />

</div>

  )
}

export default Tvshows