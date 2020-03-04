import React from 'react'
import { Form, Button, Table, Modal } from 'react-bootstrap';
import {
    Link, NavLink
} from "react-router-dom";

const NewsTable = ({ news, save, titleChange, contentChange, imageChange, isLoading }) => {
    return (
        <div>
            <Modal
                size="sm"
                show={isLoading}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Body>Loading...</Modal.Body>
            </Modal>
            <Form encType="multipart/form-data"
                onSubmit={event => {
                    event.preventDefault();
                    save();
                }}
            >
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label><strong>Title</strong></Form.Label>
                    <Form.Control type="text" value={news ? news.title : ''} onChange={titleChange} placeholder="News Title" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label><strong>Content</strong></Form.Label>
                    <Form.Control as="textarea" rows="4" value={news ? news.content : ''} onChange={contentChange} placeholder="News Content" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlUploadImage">
                    <Form.Label><strong>Image</strong></Form.Label>
                    <br />
                    {news.photo ?
                        <img width={150} height={150} className="mr-3" src={news.photo} onError={(e) => { e.target.onerror = null; e.target.src = "../nopic.png" }} />
                        :
                        ''
                    }
                    <br />
                    <input type="file" name="file" onChange={imageChange} />
                </Form.Group>
                <Button variant="success" type="submit" disabled={isLoading}>{isLoading?'Loading...':'Save News'}</Button>
            </Form>
        </div>
    )
}
export default NewsTable;