import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <div className="App-Img" >
                <Link to="/kaos">
                    <img className="App-Kaos" src="/kaos.jpg" />
                </Link>
                    <Link to="/kemeja">
                    <img className="App-Kemeja" src="/kemeja.jpg" />
                    </Link>
                <Link to="/celana">
                    <img style={{marginLeft: "50px"}} className="App-Celana" src="/celana.jpg" />
                </Link>
            </div>
        </div>
    )
}

export default Home;