import React from "react";
import img from './float.jpg';
import Navbar from './Navbar';
console.log(img)

const Header = () => {
    return ( 
        <div className="headImg">
            <div className="nav">
            <Navbar/>
            </div>
            <img src={img} alt="img" />
        </div>
     );
}
 
export default Header;