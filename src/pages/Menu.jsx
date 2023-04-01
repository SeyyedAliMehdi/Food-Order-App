import React from "react";
import MenuList from "../data/data";
import MenuItem from "../components/MenuItem";
import '../styles/Menu.css'

function Menu(){
    return (
        <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
                <div className="menuList">
                    {MenuList.map((item, key) => {
                        return(
                        <MenuItem key={key}
                                  image={item.image}
                                  name={item.name}
                                  price={item.price}/>
                    )})}
                </div>
        </div>
    )
}

export default Menu;