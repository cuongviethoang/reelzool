//rfec

import { AiFillPlayCircle } from "react-icons/ai"; // Lấy icon play video
import { AiOutlineClose } from "react-icons/ai";
import React, { Fragment, useEffect, useState, useContext } from "react";
import { Container } from "./NavBar";
import "../Styles/Videos.css";
import NoImg from "./NoImage.jpg";
import axios from "axios";
import TrailerTvShows from "../Trailers/TrailerTvShows";
function TvShows() {
    const { toggle, inputValue } = useContext(Container);
    const input = inputValue;
    const [showData, setShowData] = useState([]);
    const [trailer, setTrailer] = useState(true);
    const [title, setTitle] = useState("");
    const Shown = input ? "search" : "discover"; // Thay đổi địa chỉ api để khi nhập vào value giá trị input thay đổi thì sẽ chương trình render lai jtheo tên yêu cầu

    const Api = `https://api.themoviedb.org/3/${Shown}/tv`;
    const Images = "https://image.tmdb.org/t/p/w500";

    const TvShows = async () => {
        const data = await axios.get(Api, {
            params: {
                api_key: "0a41438d61188ef1070c73430a8a63f4",
                query: input,
            },
        });
        const results = data.data.results;
        setShowData(results);
    };
    useEffect(() => {
        setTimeout(() => {
            TvShows();
        }, 100);
    }, [input]);
    console.log(showData);
    const TvShowTitle = (shows) => {
        setTitle(shows.name);
        setTrailer(!trailer);
    };
    return (
        <Fragment>
            <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
                <div className="movies-container">
                    {showData.map((shows) => {
                        return (
                            <Fragment key={shows.id}>
                                <div id={trailer ? "container" : "NoContainer"}>
                                    <AiFillPlayCircle
                                        color="fff"
                                        fontSize={40}
                                        id={trailer ? "playIcon" : "hide"}
                                        onClick={() => TvShowTitle(shows)}
                                    />
                                    <img
                                        src={
                                            shows.poster_path
                                                ? `${Images}${shows.poster_path}`
                                                : NoImg
                                        }
                                        alt=""
                                        onClick={() => TvShowTitle(shows)}
                                    />
                                    <h3
                                        id={
                                            shows.name.length > 28
                                                ? "smaller-Text"
                                                : ""
                                        }
                                        className={
                                            toggle
                                                ? "mainColor"
                                                : "secondaryColor"
                                        }
                                    >
                                        {shows.name}
                                    </h3>
                                </div>
                            </Fragment>
                        );
                    })}
                    {trailer ? (
                        console.log
                    ) : (
                        <TrailerTvShows TvShowTitle={title} toggle={toggle} />
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

export default TvShows;
