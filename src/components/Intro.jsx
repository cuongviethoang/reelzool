import React, { Fragment } from "react";
import logo from "../images/logo.png";
import "../Styles/Intro.css";
import { useRef } from "react";
import NavBar from "./NavBar";

function Intro() {
    const containerRef = useRef();

    const handleClick = () => {
        containerRef.current.classList.toggle("intro_activeMenu");
    };

    return (
        <Fragment>
            <div ref={containerRef} id="intro_container">
                <div className="intro_nav">
                    <div className="intro_logo">
                        <img className="intro_img" src={logo} alt="" />
                    </div>
                    <div className="intro_menu">
                        <ul className="intro_menu_list">
                            <li className="intro_li intro_list">
                                <ul className="intro_menu_list intro_list_item">
                                    <li className="intro_li intro_item">
                                        Nhà tài trợ
                                    </li>
                                    <li className="intro_li intro_item">
                                        Nhà tài trợ 1
                                    </li>
                                    <li className="intro_li intro_item">
                                        Nhà tài trợ 2
                                    </li>
                                </ul>
                                <ul className="intro_menu_list intro_list_item">
                                    <li className="intro_li intro_item">
                                        Menu con cấp 1
                                    </li>
                                    <li className="intro_li intro_item">
                                        Menu con 1
                                    </li>
                                    <li className="intro_li intro_item">
                                        Menu con 1
                                    </li>
                                </ul>
                                <ul className="intro_menu_list intro_list_item">
                                    <li className="intro_li intro_item">
                                        Menu con cấp 1
                                    </li>
                                    <li className="intro_li intro_item">
                                        Menu con 1
                                    </li>
                                    <li className="intro_li intro_item">
                                        Menu con 1
                                    </li>
                                </ul>
                                <ul className="intro_menu_list intro_list_item">
                                    <li className="intro_li intro_item">
                                        Menu con cấp 1
                                    </li>
                                    <li className="intro_li intro_item">
                                        Menu con 1
                                    </li>
                                    <li className="intro_li intro_item">
                                        Menu con 1
                                    </li>
                                </ul>
                            </li>
                            <li className="intro_li intro_other">
                                <ul className="intro_menu_list">
                                    <li>HOME</li>

                                    <li>INFO</li>
                                    <li>CONTACT</li>
                                    <li>SIGN UP</li>
                                    <li>SIGN IN</li>
                                </ul>
                            </li>
                            <li className="intro_network">
                                <ul className="intro_menu_list">
                                    <li>
                                        <i className="fa-brands fa-youtube"></i>
                                    </li>
                                    <li>
                                        <i className="fa-brands fa-instagram"></i>
                                    </li>
                                    <li>
                                        <i className="fa-brands fa-facebook"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-envelope"></i>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <div onClick={handleClick} id="intro_direction">
                            <i className="fa-solid fa-arrow-down intro_icon"></i>
                            <i className="fa-solid fa-arrow-up intro_icon"></i>
                        </div>
                    </div>
                </div>

                <div className="intro_banner">
                    <div className="intro_content">
                        Chào mừng bạn đến với
                        <b style={{ color: "#08b0d6", fontSize: "40px" }}>
                            ReelZool
                        </b>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Intro;
