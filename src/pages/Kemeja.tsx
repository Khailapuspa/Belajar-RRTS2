import React from "react";
import { useAppSelector } from "../app/hooks";
import { desc, harga, title } from "../features/kemeja/kemejaSlice";

const Kemeja = () =>{

    //INI BUAT AMBIL DATA DI SLICE
    const titleKemeja = useAppSelector(title);
    const descKemeja = useAppSelector(desc);
    const hargaKemeja = useAppSelector(harga);
    console.log(titleKemeja);
    console.log(descKemeja);
    console.log(hargaKemeja);
    // SAMPE SINI

    return(
        <div>
            <div>INI HALAMAN KAOS</div>
                <div>
                    <p><b>Produk :</b> {titleKemeja} </p>
                    <p><b>Description :</b> {descKemeja} </p>
                    <p><b>Harga :</b> {hargaKemeja} </p>
                </div>
        </div>
    )
}

export default Kemeja;