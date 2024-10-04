import React from "react";
import style from "./main-layout.module.scss";
import { Header } from "./header";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <div className={style.main_wrapper}>
            <div>
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}