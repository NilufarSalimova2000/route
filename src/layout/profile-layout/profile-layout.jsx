import React from "react";
import style from "./profile-layout.module.scss"
import { Link, Outlet } from "react-router-dom";

export const ProfileLayout = () => {
    return (
        <div className={style.profile_wrapper}>
            <div className={style.box_profile}>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/profile/change-address'}>ChangeAddress</Link>
                <Link to={'/profile/change-profile'}>ChangeProfile</Link>
                <Link to={'/profile/create-address'}>CreateAddress</Link>
            </div>
            <div><Outlet /></div>
        </div>
    )
}