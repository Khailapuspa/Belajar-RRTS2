import { Form, Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { data } from "../features/data/DataSlice";
import { datapenjualanAsync } from "../actions/BajusAll";
import { useEffect } from "react";

interface DataItem {
    title: string;
    desc: string;
    harga: number;
}

const DataPenjualan = () => {
    const dispatch = useAppDispatch();
    const dataTable: DataItem[] = useAppSelector(data)
    console.log(dataTable);


    useEffect(() => {
        dispatch(datapenjualanAsync())
    }, [data])

    return (
        <>

            <Form.Control type="text" placeholder="Readonly input here..."  />

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTable.map((data, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.title}</td>
                            <td>{data.desc}</td>
                            <td>{data.harga}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default DataPenjualan;