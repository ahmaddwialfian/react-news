import React from 'react'
import { Media, Button, Table } from 'react-bootstrap';
import {
    Link, NavLink
} from "react-router-dom";

const NewsTable = ({ news, performDelete }) => {
   
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th width="25%">Title</th>
                        <th width="60%">Content</th>
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
                                    <td nowrap="true">
                                        <Link to={() => ("newsedit/" + row.id)}><Button type="button" variant="warning">Edit</Button></Link> &nbsp;
                                        <Button type="button" variant="danger" onClick={()=>performDelete(row.id)}>Delete</Button>
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