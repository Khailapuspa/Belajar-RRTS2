import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import { desc, harga, title } from "../features/celana/celanaSlice";
import { beliBajuAsync } from "../actions/PostBajus";
import { Button, Card } from "react-bootstrap";

const Celana = () => {

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
        dispatch(beliBajuAsync({ title: titleCelana, desc: descCelana, harga: hargaCelana }));
    }

    return (
        <div>
            <Card style={{ color: '#0D0D0D' }}>
                <Card.Body>
                    <Card.Title>INI HALAMAN Celana</Card.Title>
                    <Card.Text>
                        <p><b>Produk :</b> {titleCelana} </p>
                        <p><b>Description :</b> {descCelana} </p>
                        <p><b>Harga :</b> {hargaCelana} </p>
                    </Card.Text>
                    <Button variant="primary" onClick={HandleButton}>Beli</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Celana;