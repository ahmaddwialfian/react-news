import React from 'react'
import { Media, Button, Table } from 'react-bootstrap';
import {
    Link, NavLink
} from "react-router-dom";

const NewsTable = ({ news }) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th width="25%">Judul</th>
                        <th width="60%">isi</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        news.map(
                            (row, i) => (
                                <tr key={i}>
                                    <td>{row.title}</td>
                                    <td>{row.content}</td>
                                    <td nowrap>
                                        <Button type="button" variant="warning">Ubah</Button> &nbsp;
                                        <Button type="button" variant="danger">Hapus</Button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </Table>

        </div >
    )
}
export default NewsTable;