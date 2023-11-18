import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { desc, harga, title } from "../features/kemeja/kemejaSlice";
import { beliBajuAsync } from "../actions/PostBajus";
import { Button, Card } from "react-bootstrap";
 

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
            <Card style={{ color: '#0D0D0D' }}>
            <Card.Body>
                <Card.Title>INI HALAMAN Kemeja</Card.Title>
                <Card.Text>
                    <p><b>Produk :</b> {titleKemeja} </p>
                    <p><b>Description :</b> {descKemeja} </p>
                    <p><b>Harga :</b> {hargaKemeja} </p>
                </Card.Text>
                <Button variant="primary" onClick={HandleButton}>Beli</Button>
            </Card.Body>
        </Card>
        </div>
    )
}

export default Kemeja;