import React from "react";
import style from "./user.module.scss";
import { Link } from "react-router-dom";

export const User = () => {
    const [data, setData] = React.useState([])
    const getData = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json();
            setData(data)
        } catch (error) {
            console.log(error.message);
        }
    };
    React.useEffect(() =>{
        getData();
    }, []);
    
    return (
        <div className={style.info}>
            {data.map((item) => <Link key={item.id} to={`/user/detail/${item.id}`}>
            <h2>{item.name}</h2>
            </Link>)}
        </div>
    )
}