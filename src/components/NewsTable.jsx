import React from 'react'
import { Media, Button, Table } from 'react-bootstrap';
import {
    Link, NavLink
} from "react-router-dom";

const NewsTable = ({ news, performDelete }) => {

    return (
        <div>
            <Table striped bordered hover responsive>
                <thead >
                    <tr>
                        <th width="25%">Title</th>
                        <th width="60%">Content</th>
                        <th width="60%">Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        news.map(
                            (row, i) => (
                                <tr key={i}>
                                    <td>{row.title}</td>
                                    <td>{row.content}</td>
                                    <td>
                                        <img width={150} height={150} className="mr-3" src={row.photo} onError={(e) => { e.target.onerror = null; e.target.src = "../nopic.png" }} />
                                    </td>
                                    <td nowrap="true">
                                        <Link to={() => ("newsedit/" + row.id)}><Button type="button" variant="warning">Edit</Button></Link> &nbsp;
                                        <Button type="button" variant="danger" onClick={() => performDelete(row.id)}>Delete</Button>
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