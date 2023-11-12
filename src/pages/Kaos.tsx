import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { desc, harga, title } from "../features/kaos/kaosSlice";
import { beliBajuAsync } from "../features/kaos/kaosAction";

const Kaos = () =>{

    const dispatch = useAppDispatch();
    //INI BUAT AMBIL DATA DI SLICE
    const titleKaos = useAppSelector(title);
    const descKaos = useAppSelector(desc);
    const hargaKaos = useAppSelector(harga);
    // SAMPE SINI

    const HandleButton = () => {
        dispatch(beliBajuAsync({title:titleKaos, desc:descKaos, harga:hargaKaos}));
    }

    return(
        <div>
            <div>INI HALAMAN KAOS</div>
                <div>
                    <p><b>Produk :</b> {titleKaos} </p>
                    <p><b>Description :</b> {descKaos} </p>
                    <p><b>Harga :</b> {hargaKaos} </p>
                    <button onClick={HandleButton}>Beli</button>
                </div>
        </div>
        
    )
}

export default Kaos;