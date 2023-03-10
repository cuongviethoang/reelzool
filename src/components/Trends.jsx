import React, { Fragment, useEffect, useState, useContext } from "react";
import axios from "axios";
import { Container } from "./NavBar";
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";
import NoImg from "./NoImage.jpg";
import "../Styles/Videos.css";
import TrailerTrending from "../Trailers/TrailerTrending";
import Loading from "./Loading";
import Footer from "./Footer";
function Trends() {
    const { toggle, inputValue } = useContext(Container);
    const input = inputValue;
    const Api = "https://api.themoviedb.org/3";
    const TrendsShown = "/trending/all/week";
    const [trailer, setTrailer] = useState(true);
    const [loading, setLoading] = useState(true);
    const [isCheck, setCheck] = useState(true);
    const [trendArray, setTrendArray] = useState([]);
    const [trendTitle, setTrendTitle] = useState("");
    const Images = "https://image.tmdb.org/t/p/w500";
    const Trends = async () => {
        const data = await axios.get(`${Api}${TrendsShown}`, {
            params: {
                api_key: "0a41438d61188ef1070c73430a8a63f4",
                query: input,
            },
        });
        const result = data.data.results;
        setTrendArray(result);
    };

    useEffect(() => {
        setTimeout(() => {
            Trends();
        }, 100);
    }, [input]);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);
    const TrendTitle = (trend) => {
        setTrendTitle(trend.title);
        setTrailer(!trailer);
    };

    return loading ? (
        <Loading />
    ) : (
        <Fragment>
            <div
                className={
                    toggle
                        ? "mainBgColor pd-71 pd-20"
                        : "secondaryBgColor pd-71 pd-20"
                }
            >
                <div className="movies-container">
                    {trendArray.map((trend) => {
                        return (
                            <Fragment key={trend.id}>
                                <div
                                    id={trailer ? "container" : "NoContainer"}
                                    className={isCheck ? "card" : ""}
                                >
                                    <AiFillPlayCircle
                                        color="#fff"
                                        fontSize={40}
                                        id={trailer ? "playIcon" : "hide"}
                                        onClick={() => TrendTitle(trend)}
                                    />
                                    <img
                                        className="img"
                                        src={
                                            trend.poster_path
                                                ? `${Images}${trend.poster_path}`
                                                : NoImg
                                        }
                                        alt=""
                                        onClick={() => TrendTitle(trend)}
                                    />

                                    <h3
                                        id="smaller-Text"
                                        className={
                                            toggle
                                                ? "mainColor"
                                                : "secondaryColor"
                                        }
                                    >
                                        {trend.title || trend.name}
                                    </h3>
                                </div>
                            </Fragment>
                        );
                    })}
                    {trailer ? (
                        console.log
                    ) : (
                        <TrailerTrending
                            TrendTitle={trendTitle}
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
            <Footer />
        </Fragment>
    );
}

export default Trends;
