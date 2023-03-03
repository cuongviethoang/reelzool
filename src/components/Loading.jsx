import React, { Fragment } from "react";
import "../Styles/Loading.css";

function Loading() {
    return (
        <Fragment>
            <div id="loading">
                <div className="loader">
                    <div className="loader-item"></div>
                    <div className="loader-item"></div>
                    <div className="loader-item"></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Loading;
