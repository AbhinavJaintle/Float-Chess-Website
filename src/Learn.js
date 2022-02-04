import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Learn = () => {
    return ( 
        <div>
        <Header/>
        <div className="learn">
        <img src={require('./logogif.gif')} alt="loading..." />
        </div>
        <div className="learn2">
            This is how the game looks. This was my python lecture proect. Because it's made in pygame library of python, there's no good way to simulate it online. You'll have to download the source code in github and then play it in your computer.
        </div>
        <Footer/>
        </div>
     );
}
 
export default Learn;