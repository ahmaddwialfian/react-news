import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { axiosNews, action } from '../config/global';

const Login = () => {
    const defaultTemp = {
        username: null,
        password: null
    };
    const [temp, setTemp] = useState(defaultTemp);

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
        if (temp.username && temp.password) {
            try {
                const response = await axiosNews({
                    method: action.login.method,
                    url: action.login.path,
                    headers: { 'Content-Type': 'application/json' },
                    data: temp
                });
                const { data } = response;
                console.log(data);
            } catch (error) {

            }
        } else {

        }
    };


    return (
        <Container>
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
                                    <Form.Control type="text" placeholder="Masukkan Username"
                                        onChange={handleInputUsername}
                                        autoFocus={true} />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Masukkan Password"
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