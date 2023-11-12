import React from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../app/hooks";
import { desc, harga, title } from "../features/kaos/kaosSlice";

const Kaos = () =>{

    //INI BUAT AMBIL DATA DI SLICE
    const titleKaos = useAppSelector(title);
    const descKaos = useAppSelector(desc);
    const hargaKaos = useAppSelector(harga);
    console.log(titleKaos);
    console.log(descKaos);
    console.log(hargaKaos);
    // SAMPE SINI

    return(
        <div>
            <div>INI HALAMAN KAOS</div>
                <div>
                    <p><b>Produk :</b> {titleKaos} </p>
                    <p><b>Description :</b> {descKaos} </p>
                    <p><b>Harga :</b> {hargaKaos} </p>
                </div>
        </div>
        
    )
}

export default Kaos;