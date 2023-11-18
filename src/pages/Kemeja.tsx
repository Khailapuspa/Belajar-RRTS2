import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { desc, harga, title } from "../features/kemeja/kemejaSlice";
import { beliBajuAsync } from "../actions/PostBajus";
 

const Kemeja = () =>{

    const dispatch = useAppDispatch();
    //INI BUAT AMBIL DATA DI SLICE
    const titleKemeja = useAppSelector(title);
    const descKemeja = useAppSelector(desc);
    const hargaKemeja = useAppSelector(harga);
    // console.log(titleKemeja);
    // console.log(descKemeja);
    // console.log(hargaKemeja);
    // SAMPE SINI

    const HandleButton = () => {
        dispatch(beliBajuAsync({title:titleKemeja, desc:descKemeja, harga:hargaKemeja}));
    }

    return(
        <div>
            <div>INI HALAMAN KEMEJA</div>
                <div>
                    <p><b>Produk :</b> {titleKemeja} </p>
                    <p><b>Description :</b> {descKemeja} </p>
                    <p><b>Harga :</b> {hargaKemeja} </p>
                    <button onClick={HandleButton}>Beli</button>
                </div>
        </div>
    )
}

export default Kemeja;