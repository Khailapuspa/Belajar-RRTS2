import React from "react";
import { useSelector } from "react-redux";

const Kaos = () =>{

    const kaosData = useSelector((state) => state.kaos);

    return(
        <div>INI HALAMAN KAOS</div>
    )
}

export default Kaos;