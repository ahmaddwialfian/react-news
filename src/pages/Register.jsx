import React from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

const Register = () => {
    return (
        <Container>
            <h1 className="text-center">Register</h1>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Body>
                            <Form onSubmit={event => {
                                event.preventDefault()
                                return
                            }}
                            >
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Masukkan Username" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Masukkan Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPasswordConfirm">
                                    <Form.Label>Konfirmasi Password</Form.Label>
                                    <Form.Control type="password" placeholder="Masukkan Konfirmasi Password" />
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