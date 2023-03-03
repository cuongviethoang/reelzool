import axios from "axios";
import React, { Fragment, useEffect, useState, useContext } from "react";
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";
import { Container } from "./NavBar";
import "../Styles/Videos.css";
import NoImg from "./NoImage.jpg";
import TrailerMovies from "../Trailers/TrailerMovies";

function Movies() {
    const { toggle, inputValue } = useContext(Container);
    const input = inputValue;
    const [moviesData, setMoviesData] = useState([]);
    const [trailer, setTrailer] = useState(true);
    const [isCheck, setCheck] = useState(true);
    const [movieTitle, setMovieTitle] = useState("");
    const Shown = input ? "search" : "discover"; // Thay đổi địa chỉ api để khi nhập vào value giá trị input thay đổi thì sẽ chương trình render lai jtheo tên yêu cầu
    const Api = `https://api.themoviedb.org/3/${Shown}/movie`;
    const Images = "https://image.tmdb.org/t/p/w500";

    const MovieCall = async () => {
        const data = await axios.get(Api, {
            params: {
                api_key: "0a41438d61188ef1070c73430a8a63f4",
                query: input,
            },
        });
        const results = data.data.results;
        setMoviesData(results);
    };
    // console.log(moviesData);
    useEffect(() => {
        setTimeout(() => {
            MovieCall();
        }, 100);
    }, [input]);
    const MoviesTitle = (movie) => {
        setMovieTitle(movie.title);
        setTrailer(!trailer);
    };
    return (
        <Fragment>
            <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
                <div className="movies-container">
                    {moviesData.map((movie) => {
                        return (
                            <Fragment key={movie.id}>
                                <div
                                    className={isCheck ? "card" : ""}
                                    id={trailer ? "container" : "NoContainer"}
                                >
                                    <AiFillPlayCircle
                                        color="#fff"
                                        fontSize={40}
                                        id={trailer ? "playIcon" : "hide"}
                                        onClick={() => MoviesTitle(movie)}
                                    />
                                    <img
                                        src={
                                            movie.poster_path
                                                ? `${Images}${movie.poster_path}`
                                                : NoImg
                                        }
                                        alt=""
                                        onClick={() => MoviesTitle(movie)}
                                    />
                                    <h3
                                        id={
                                            movie.title.length > 28
                                                ? "smaller-Text"
                                                : ""
                                        }
                                        className={
                                            toggle
                                                ? "mainColor"
                                                : "secondaryColor"
                                        }
                                    >
                                        {movie.title}
                                    </h3>
                                </div>
                            </Fragment>
                        );
                    })}
                    {trailer ? (
                        console.log
                    ) : (
                        <TrailerMovies
                            moviesTitle={movieTitle}
                            toggle={toggle}
                        />
                    )}
                    <AiOutlineClose
                        id={trailer ? "Nothing" : "Exit1"}
                        className={toggle ? "DarkTheme" : "LightThemeClose"}
                        fontSize={55}
                        color={toggle ? "fff" : "#ff206e"}
                        cursor={"pointer"}
                        onClick={() => setTrailer(true)}
                    />
                </div>
            </div>
        </Fragment>
    );
}

export default Movies;
