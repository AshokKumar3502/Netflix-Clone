import React from 'react'
import { useState ,useEffect} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
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
        } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}&page=2`);
        setPopularMovies(results);
    };
    const fetchTopRated = async () => {
        const {
            data: { results },
        } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}&page=2`);
        setTopRatedMovies(results);
    };
    fetchTopRated()
    fetchPopular()},[]);
  return (
    <div>  <div
    className="banner"
    style={{
        backgroundImage: popularMovies[1]
            ? `url(${`${imgUrl}/${popularMovies[1].poster_path}`})`
            : "rgb(16, 16, 16)",
    }}
>
    {popularMovies[5] && <h1>{popularMovies[1].original_title}</h1>}
    {popularMovies[5] && <p>{popularMovies[1].overview}</p>}

    <div>
        <button><BiPlay /> Play  </button>
        <button><Link to="/mylist">My List <AiOutlinePlus /></Link> </button>
    </div>
</div>
<Row title={"Recently Added Movies"} arr={topRatedMovies} />
</div>

  )
}

export default Banner