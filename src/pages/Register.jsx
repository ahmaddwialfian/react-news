import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col, Modal } from 'react-bootstrap';
import { axiosNews, action } from '../config/global';
import {
    Redirect
} from "react-router-dom";

const Register = ({ isLogedin, login, logout }) => {
    const defaultTemp = {
        username: null,
        password: null,
        passwordconfirm: null
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
    const handleInputPasswordKonfirm = event => {
        setTemp(
            {
                ...temp,
                passwordconfirm: event.target.value
            }
        )
    }

    const performRegister = async () => {
        setIsLoading(true);
        if (temp.username.trim() && temp.password && temp.passwordconfirm) {
            if (temp.password == temp.passwordconfirm) {
                try {
                    const response = await axiosNews({
                        method: action.register.method,
                        url: action.register.path,
                        headers: { 'Content-Type': 'application/json' },
                        data: {
                            username: temp.username,
                            password: temp.password
                        }
                    }).catch(function (error) {
                        return error.response;
                    });
                    const { data } = response;
                    if (data.error) {
                        alert(data.message)
                    }
                    else if (data.errors) {
                        let errorMessage = '';
                        if (data.errors.username)
                            data.errors.username.map((row, i) =>
                                errorMessage += row
                            );
                        if (data.errors.password)
                            data.errors.password.map((row, i) =>
                                errorMessage += row
                            );
                        alert(errorMessage);
                    }
                    else {
                        alert('Register Berhasil')
                        login(data.meta.token);
                    }
                } catch (error) {
                }
            } else {
                alert('Password dan Konfirmasi Password tidak sesuai');
            }
        } else {
            alert('Username, Password dan Konfirmasi Password harap diisi');
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
            <h1 className="text-center">Register</h1>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Body>
                            <Form onSubmit={event => {
                                event.preventDefault();
                                performRegister();
                            }}
                            >
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Type Username"
                                        onChange={handleInputUsername}
                                        autoFocus={true}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Type Password"
                                        onChange={handleInputPassword}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicPasswordConfirm">
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="password" placeholder="Type Password Confirmation"
                                        onChange={handleInputPasswordKonfirm}
                                    />
                                </Form.Group>
                                <div className="text-center">
                                    <Button variant="primary" type="submit">
                                        Daftar
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

export default Register;