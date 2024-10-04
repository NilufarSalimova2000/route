import React from "react";
import style from "./header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.box}>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/user"}>User</Link>
                    <Link to={"/profile"}>Profile</Link>
                </div>
            </div>
        </header>
    )
}