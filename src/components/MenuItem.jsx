import React from 'react'
// import '../styles/Menu.css'

function MenuItem ({image, name, price}){

    return(
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})`}}> </div>
                <h1>{name}</h1>
                <p>₹{price}</p>
        </div>
    )
}

export default MenuItem;