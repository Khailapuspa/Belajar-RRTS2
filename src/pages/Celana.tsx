import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import { desc, harga, title } from "../features/celana/celanaSlice";
import { beliBajuAsync } from "../actions/PostBajus";

const Celana = () =>{

    // const handleCreate = (title: string,)
    const dispatch = useAppDispatch();
    // INI AMBIL DATA DARI SLICE
    const titleCelana = useAppSelector(title);
    const descCelana = useAppSelector(desc);
    const hargaCelana = useAppSelector(harga);
    // console.log(titleCelana);
    // console.log(descCelana);
    // console.log(hargaCelana);
    //SAMPE SINI

    const HandleButton = () => {
        dispatch(beliBajuAsync({title:titleCelana, desc:descCelana, harga:hargaCelana}));
    }

    return(
        <div>
            <div>INI HALAMAN Celana</div>
                <div>
                    <p><b>Produk :</b> {titleCelana} </p>
                    <p><b>Description :</b> {descCelana} </p>
                    <p><b>Harga :</b> {hargaCelana} </p>
                    <button onClick={HandleButton}>Beli</button>
                </div>
        </div>
    )
}

export default Celana;