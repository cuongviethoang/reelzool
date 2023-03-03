import { useContext } from "react";
import "../Styles/Footer.css";
import { Container } from "./NavBar";

function Footer() {
    const { toggle } = useContext(Container);
    return (
        <div
            id="footer"
            className={toggle ? "mainBgColor" : "secondaryBgColor"}
        ></div>
    );
}

export default Footer;
