import { Fragment, useContext } from "react";
import "../Styles/Footer.css";
import { Container } from "./NavBar";
import "../Styles/Grid.css";
import {
    AiFillFacebook,
    AiOutlineTwitter,
    AiFillYoutube,
    AiFillInstagram,
    AiFillGoogleCircle,
} from "react-icons/ai";

function Footer() {
    const { toggle } = useContext(Container);
    return (
        <Fragment>
            <div
                className={
                    toggle
                        ? "straightLine sLineMain animate"
                        : "straightLine sLineSecond animate"
                }
            ></div>
            <div
                id="footer"
                className={
                    toggle ? "mainFtColor pd-100" : "secondaryFtColor pd-100"
                }
            >
                <div className="grid wide">
                    <div className="row footer-container">
                        <div className="col l-4 footer-header">
                            <h1
                                className={
                                    toggle
                                        ? "heading colorMain animate"
                                        : "heading colorSecond animate"
                                }
                            >
                                ReelZool
                            </h1>
                            <p
                                className={
                                    toggle
                                        ? "desc colorMain animate"
                                        : "desc colorSecond animate"
                                }
                            >
                                Trang web xem phim của chúng tôi cung cấp cho
                                người dùng hàng ngàn bộ phim đa dạng từ nhiều
                                thể loại khác nhau, bao gồm hành động, tình cảm,
                                kinh dị, khoa học viễn tưởng và nhiều thể loại
                                khác. Người dùng có thể tìm kiếm và chọn xem các
                                bộ phim theo sở thích của mình thông qua một
                                giao diện đơn giản và thân thiện với người dùng.
                            </p>
                            <div className="socail-container">
                                <AiFillFacebook
                                    fontSize={40}
                                    className="icon"
                                />

                                <AiOutlineTwitter
                                    fontSize={40}
                                    className="icon"
                                />

                                <AiFillYoutube fontSize={40} className="icon" />

                                <AiFillInstagram
                                    fontSize={40}
                                    className="icon"
                                />

                                <AiFillGoogleCircle
                                    fontSize={40}
                                    className="icon"
                                />
                            </div>
                        </div>
                        <div className="col l-8 footer-list">
                            <div className="row list-container">
                                <div className="col l-4  footer-item">
                                    <h3
                                        className={
                                            toggle
                                                ? "title colorMain animate"
                                                : "title colorSecond animate"
                                        }
                                    >
                                        THỂ LOẠI
                                    </h3>
                                    <ul className="list">
                                        <li
                                            className={
                                                toggle
                                                    ? "item colorMain animate"
                                                    : "item colorSecond animate"
                                            }
                                        >
                                            Kinh Dị
                                        </li>
                                        <li
                                            className={
                                                toggle
                                                    ? "item colorMain animate"
                                                    : "item colorSecond animate"
                                            }
                                        >
                                            Viễn Tưởng
                                        </li>
                                        <li
                                            className={
                                                toggle
                                                    ? "item colorMain animate"
                                                    : "item colorSecond animate"
                                            }
                                        >
                                            Khoa Học
                                        </li>
                                        <li
                                            className={
                                                toggle
                                                    ? "item colorMain animate"
                                                    : "item colorSecond animate"
                                            }
                                        >
                                            Chiến tranh
                                        </li>
                                        <li
                                            className={
                                                toggle
                                                    ? "item colorMain animate"
                                                    : "item colorSecond animate"
                                            }
                                        >
                                            Tình Cảm
                                        </li>
                                    </ul>
                                </div>
                                <div className="col l-4  footer-item">
                                    <h3
                                        className={
                                            toggle
                                                ? "title colorMain animate"
                                                : "title colorSecond animate"
                                        }
                                    >
                                        THỂ LOẠI
                                    </h3>
                                    <ul className="list">
                                        <li
                                            className={
                                                toggle
                                                    ? "item colorMain animate"
                                                    : "item colorSecond animate"
                                            }
                                        >
                                            Kinh Dị
                                        </li>
                                        <li
                                            className={
                                                toggle
                                                    ? "item colorMain animate"
                                                    : "item colorSecond animate"
                                            }
                                        >
                                            Viễn Tưởng
                                        </li>
                                        <li
                                            className={
                                                toggle
                                                    ? "item colorMain animate"
                                                    : "item colorSecond animate"
                                            }
                                        >
                                            Khoa Học
                                        </li>
                                        <li
                                            className={
                                                toggle
                                                    ? "item colorMain animate"
                                                    : "item colorSecond animate"
                                            }
                                        >
                                            Chiến tranh
                                        </li>
                                        <li
                                            className={
                                                toggle
                                                    ? "item colorMain animate"
                                                    : "item colorSecond animate"
                                            }
                                        >
                                            Tình Cảm
                                        </li>
                                    </ul>
                                </div>
                                <div className="col l-4  footer-item">
                                    <h3
                                        className={
                                            toggle
                                                ? "title colorMain animate"
                                                : "title colorSecond animate"
                                        }
                                    >
                                        THỂ LOẠI
                                    </h3>
                                    <ul className="list">
                                        <li
                                            className={
                                                toggle
                                                    ? "item colorMain animate"
                                                    : "item colorSecond animate"
                                            }
                                        >
                                            Kinh Dị
                                        </li>
                                        <li
                                            className={
                                                toggle
                                                    ? "item colorMain animate"
                                                    : "item colorSecond animate"
                                            }
                                        >
                                            Viễn Tưởng
                                        </li>
                                        <li
                                            className={
                                                toggle
                                                    ? "item colorMain animate"
                                                    : "item colorSecond animate"
                                            }
                                        >
                                            Khoa Học
                                        </li>
                                        <li
                                            className={
                                                toggle
                                                    ? "item colorMain animate"
                                                    : "item colorSecond animate"
                                            }
                                        >
                                            Chiến tranh
                                        </li>
                                        <li
                                            className={
                                                toggle
                                                    ? "item colorMain animate"
                                                    : "item colorSecond animate"
                                            }
                                        >
                                            Tình Cảm
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Footer;
