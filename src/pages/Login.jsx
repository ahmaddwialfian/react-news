import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col, Modal } from 'react-bootstrap';
import { axiosNews, action } from '../config/global';
import {
    Redirect
} from "react-router-dom";

const Login = ({ user, isLogedin, login, logout }) => {
    const defaultTemp = {
        username: null,
        password: null
    };
    const [temp, setTemp] = useState(defaultTemp);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputUsername = event => {
        setTemp(
            {
                ...temp,
                username: event.target.value
            }
        )
    }
    const handleInputPassword = event => {
        setTemp(
            {
                ...temp,
                password: event.target.value
            }
        )
    }

    const performLogin = async () => {
        setIsLoading(true);
        if (temp.username.trim() && temp.password) {
            try {
                const response = await axiosNews({
                    method: action.login.method,
                    url: action.login.path,
                    headers: { 'Content-Type': 'application/json' },
                    data: temp
                });
                const { data } = response;
                if (data.error) {
                    alert(data.message)
                }
                else {
                    alert('Login Berhasil');
                    login(data.meta.token,data.data.username);
                }
            } catch (error) {
            }
        } else {
            alert('Username dan Password harap diisi');
        }
        setIsLoading(false);
    };


    return (
        <Container>
            {isLogedin ? <Redirect to="/mynews" /> : ''}
            <Modal
                size="sm"
                show={isLoading}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Body>Loading...</Modal.Body>
            </Modal>
            <h1 className="text-center">Login</h1>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Body>
                            <Form onSubmit={event => {
                                event.preventDefault();
                                performLogin();
                            }}
                            >
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Type Username"
                                        onChange={handleInputUsername}
                                        autoFocus={true} />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Type Password"
                                        onChange={handleInputPassword} />
                                </Form.Group>
                                <div className="text-center">
                                    <Button variant="primary" type="submit">
                                        Login
                            </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;