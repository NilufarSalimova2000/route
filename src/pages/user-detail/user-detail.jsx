import React from "react";
import style from "./user-detail.module.scss";
import { useParams } from "react-router-dom";

export const UserDetail = () => {
    const [data, setData] = React.useState({});
    const params = useParams();

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`).then((res) => res.json()).then((data) => {
            setData(data);
        });
    }, [])

    return (
        <div>
            <h2>{data.name}</h2>
            <h2>{data.username}</h2>
            <h2>{data.email}</h2>
        </div>
    )
}