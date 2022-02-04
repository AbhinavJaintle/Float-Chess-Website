import React from "react";
import img from './Chess_Board.png';
import {Link } from "react-router-dom";
console.log(img)

const Midpage = () => {
    return ( 
    <div className="mid">
      <div className="text1">
        EXPLORE THE
      </div>
      <div className="text2">
        {/* W O R L D  O F */}
        WORLD OF
      </div>
      <div className="text3">
        f l o a t  c h e s s
      </div>
      <div className="img">
      <img src={img} alt="img" />
      </div>
      <div className="play">
                <Link to='/play'target="_blank">. G I T</Link>
      </div>
    </div>
     );
}
 
export default Midpage;