import { useAppDispatch, useAppSelector } from "../app/hooks";
import { desc, harga, title } from "../features/kaos/kaosSlice";
import { beliBajuAsync } from "../actions/PostBajus";
import { Button, Card } from "react-bootstrap";


const Kaos = () => {

    const dispatch = useAppDispatch();
    //INI BUAT AMBIL DATA DI SLICE
    const titleKaos = useAppSelector(title);
    const descKaos = useAppSelector(desc);
    const hargaKaos = useAppSelector(harga);
    // SAMPE SINI

    const HandleButton = () => {
        dispatch(beliBajuAsync({ title: titleKaos, desc: descKaos, harga: hargaKaos }));
    }

    return (
        <Card style={{ color: '#0D0D0D' }}>
            <Card.Body>
                <Card.Title>INI HALAMAN Koas</Card.Title>
                <Card.Text>
                    <p><b>Produk :</b> {titleKaos} </p>
                    <p><b>Description :</b> {descKaos} </p>
                    <p><b>Harga :</b> {hargaKaos} </p>
                </Card.Text>
                <Button variant="primary" onClick={HandleButton}>Beli</Button>
            </Card.Body>
        </Card>
    )
}

export default Kaos;