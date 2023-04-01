import React from 'react';
import banner from '../assets/food.jpeg'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home (){
    return(
        <div className={"home"} style={{background: `url(${banner})`}}>
            <div className={"headerContainer"}>
                <h1 style={{ fontWeight: "bold" }}> Food Corner </h1>
                <p>INDIAN FOOD AT A CLICK</p>
                <Link to="/menu">
                    <button> ORDER NOW </button>
                </Link>
            </div>
        </div>
    )
}

export default Home;