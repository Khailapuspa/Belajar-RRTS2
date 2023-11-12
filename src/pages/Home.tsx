import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div>
            INI Home
            <div className="App-Img" >
                <Link to="/kaos">
                    <img className="App-Kaos" src="/kaos.jpg" />
                </Link>
                    <Link to="/kemeja">
                    <img style={{marginLeft: "6px", marginRight: "6px"}} className="App-Kemeja" src="/kemeja.jpg" />
                    </Link>
                <Link to="/celana">
                    <img style={{marginLeft: "50px"}} className="App-Celana" src="/celana.jpg" />
                </Link>
            </div>
        </div>
    )
}

export default Home;