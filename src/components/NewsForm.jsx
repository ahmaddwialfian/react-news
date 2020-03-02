import React from 'react'
import { Form, Button, Table } from 'react-bootstrap';
import {
    Link, NavLink
} from "react-router-dom";

const NewsTable = ({ news, save, titleChange, contentChange }) => {
    return (
        <div>
            <Form
                onSubmit={event => {
                    event.preventDefault();
                    save();
                }}
            >
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label><strong>Title</strong></Form.Label>
                    <Form.Control type="text" value={news?news.title:''} onChange={titleChange} placeholder="News Title" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label><strong>Content</strong></Form.Label>
                    <Form.Control as="textarea" rows="4" value={news?news.content:''} onChange={contentChange} placeholder="News Content" />
                </Form.Group>
                <Button variant="success" type="submit">Save News</Button>
            </Form>
        </div>
    )
}
export default NewsTable;