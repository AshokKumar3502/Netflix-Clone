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
const nowPlaying = "now_playing";

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
const Movies = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    useEffect(() => {
    const fetchPopular = async () => {
        const {
            data: { results },
        } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
        setPopularMovies(results);
    };
    const fetchNowPlaying = async () => {
        const {
            data: { results },
        } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}&page=3`);
        setNowPlayingMovies(results);
    };
    fetchNowPlaying()
    fetchPopular()},[]);
  return (
    <div>  <div
    className="banner"
    style={{
        backgroundImage: popularMovies[7]
            ? `url(${`${imgUrl}/${popularMovies[7].poster_path}`})`
            : "rgb(16, 16, 16)",
    }}
>
    {popularMovies[7] && <h1>{popularMovies[7].original_title}</h1>}
    {popularMovies[7] && <p>{popularMovies[7].overview}</p>}

    <div>
        <button><BiPlay /> Play  </button>
        <button><Link to="/mylist">My List <AiOutlinePlus /></Link> </button>
    </div>
</div>
<Row title={"Best Movies"} arr={nowPlayingMovies} />
</div>

  )
}

export default Movies