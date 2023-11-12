import React from "react";
import { useAppSelector } from "../app/hooks";
import { desc, harga, title } from "../features/celana/celanaSlice";

const Celana = () =>{

    // INI AMBIL DATA DARI SLICE
    const titleCelana = useAppSelector(title);
    const descCelana = useAppSelector(desc);
    const hargaCelana = useAppSelector(harga);
    console.log(titleCelana);
    console.log(descCelana);
    console.log(hargaCelana);
    //SAMPE SINI

    return(
        <div>
            <div>INI HALAMAN Celana</div>
                <div>
                    <p><b>Produk :</b> {titleCelana} </p>
                    <p><b>Description :</b> {descCelana} </p>
                    <p><b>Harga :</b> {hargaCelana} </p>
                </div>
        </div>
    )
}

export default Celana;