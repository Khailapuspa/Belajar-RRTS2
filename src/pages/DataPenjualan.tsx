import { Button, Card, Col, Form, InputGroup, Modal, Row, Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { data, search } from "../features/data/DataSlice";
import { datapenjualanAsync } from "../actions/BajusAll";
import { useEffect, useState } from "react";
import { searchAsync } from "../actions/BajusId";
import HeadBar from "../components/HeadBar";
import { deleteAsync } from "../actions/BajusDel";
import { updateAsync } from "../actions/BajusUp";
import { title } from "process";
import { desc, harga } from "../features/kemeja/kemejaSlice";

interface DataItem {
    id: number;
    title: string;
    desc: string;
    harga: number;
}

interface DataSearch {
    id: number;
    title: string;
    desc: string;
    harga: number;
}

const DataPenjualan = () => {
    const dispatch = useAppDispatch();
    const dataTable: DataItem[] = useAppSelector(data);
    const [searchh, setSearch] = useState('');
    const dataSearch: DataSearch = useAppSelector(search)

    const HandleSearch = () => {
        dispatch(searchAsync({ id: parseInt(searchh) }));
    }

    const HandleDelete = (id: number) => {
        dispatch(deleteAsync({ id: id }))
    }

    const HandleUpdate = (id: number) => {
        // dispatch(updateAsync({ id:, title, desc, harga }));
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        dispatch(datapenjualanAsync());
    }, [dataTable]);

    return (
        <>
            <HeadBar />
            <Card>
                <Card.Header as="h5">Data Penjualan</Card.Header>
                <Card.Body>
                    <Row className="mb-4">
                        <Col lg={10}>
                            <Form.Control value={searchh} onChange={(e) => setSearch(e.target.value)} type="number" placeholder="Search ..." />
                        </Col>
                        <Col lg={2}>
                            <Button style={{ width: '80%' }} onClick={HandleSearch}>Search</Button>
                        </Col>
                    </Row>

                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nama Produk</th>
                                <th>Deskripsi</th>
                                <th>Harga</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{dataSearch.id}</td>
                                <td>{dataSearch.title}</td>
                                <td>{dataSearch.desc}</td>
                                <td>{dataSearch.harga}</td>
                            </tr>
                        </tbody>
                    </Table>

                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Produk</th>
                                <th>Deskripsi</th>
                                <th>Harga</th>
                                <th>Tools</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataTable.map((data, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.title}</td>
                                    <td>{data.desc}</td>
                                    <td>{data.harga}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => HandleDelete(data.id)}>Hapus</Button>
                                        <Button variant="primary" onClick={handleShow}>Update</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Update Data Penjualan</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Nama Produk</InputGroup.Text>
                                <Form.Control
                                    placeholder="Username"
                                    aria-label="nama"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Deskripsi</InputGroup.Text>
                                <Form.Control
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Harga</InputGroup.Text>
                                <Form.Control
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Card.Body>
            </Card>

        </>
    );
};

export default DataPenjualan;
