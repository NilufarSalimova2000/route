import React from "react";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"

export const Header = () => {
    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.block}>
                    <a href="#">
                        <img src={Logo} alt="logo" />
                    </a>
                    <div className={style.box}>
                        <Link className={style.link} to={"/"}>Home</Link>
                        <Link className={style.link} to={"/user"}>User</Link>
                        <Link className={style.link} to={"/profile"}>Profile</Link>
                    </div>
                </div>

            </div>
        </header>
    )
}