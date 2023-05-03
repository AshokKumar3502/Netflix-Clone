import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"

const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Home = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [genre, setGenre] = useState([]);

    
const Card1 = ({ image }) =><img className="card" src={image} alt="cover" /> ;
const Card2 = ({ image }) =><div className="pic">
     <img className="card2" src={image} alt="cover" /></div>;

const Row1 = ({ title, arraydata = [] }) => (
    <div className="row">
        <h2>{title}</h2>

        <div>
            {arraydata.map((item, index) => (
                <Card1 key={index} image={`${imgUrl}/${item.poster_path}`} />
            ))}
        </div>
    </div>
  
);

const Row2 = ({ title, arraydata = [] }) => (
    <div className="row2">
        <h2>{title}</h2>

        <div>
            {arraydata.map((item, index) => (
                <Card2 key={index} image={`${imgUrl}/${item.poster_path}`} />
            ))}
        </div>
    </div>
  
);


    useEffect(() => {
        const fetchUpcoming = async () => {
            const {
                data: { results },
            } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
            setUpcomingMovies(results);
            console.log(results)
        };
        const fetchNowPlaying = async () => {
            const {
                data: { results },
            } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}&page=3`);
            setNowPlayingMovies(results);
        };
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
        const getAllGenre = async () => {
            const {
                data: { genres },
            } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
            setGenre(genres);
          
        };

        getAllGenre();
        fetchUpcoming();
        fetchNowPlaying();
        fetchPopular();
        fetchTopRated();
    }, []);

    return (
        <section className="home">
            <div
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

            <Row1 title={"Upcoming"} arraydata={upcomingMovies} />
            <Row2 title={"Now Playing"} arraydata={nowPlayingMovies} />
            <Row2 title={"Popular"} arraydata={popularMovies} />
            <Row2 title={"Top Rated"} arraydata={topRatedMovies} />

            <div className="genreBox">
                {genre.map((item) => (
                    <Link key={item.id} to={`/genre/${item.id}`}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Home;
