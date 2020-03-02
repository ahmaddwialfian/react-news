import React, {useState} from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { axiosNews, action } from '../config/global';
import {
    Redirect
} from "react-router-dom";

const Register = ({isLogedin,login,logout}) => {
    const defaultTemp = {
        username: null,
        password: null,
        passwordconfirm: null
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
    const handleInputPasswordKonfirm = event => {
        setTemp(
            {
                ...temp,
                passwordconfirm: event.target.value
            }
        )
    }

    const performRegister = async () => {
        if (temp.username && temp.password && temp.passwordconfirm && temp.password==temp.passwordconfirm) {
            try {
                const response = await axiosNews({
                    method: action.register.method,
                    url: action.register.path,
                    headers: { 'Content-Type': 'application/json' },
                    data: {
                        username: temp.username,
                        password: temp.password
                    }
                });
                const { data } = response;
                if(data.error){
                    alert(data.message)
                }
                else{
                    alert('Register Berhasil')
                    login(data.meta.token);
                }
                console.log(data);
            } catch (error) {

            }
        } else {

        }
    };
    return (
        <Container>
            {isLogedin?<Redirect to="/"/>:''}
            <h1 className="text-center">Register</h1>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Body>
                            <Form  onSubmit={event => {
                                event.preventDefault();
                                performRegister();
                            }}
                            >
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Masukkan Username" 
                                    onChange={handleInputUsername}
                                    autoFocus={true}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Masukkan Password" 
                                    onChange={handleInputPassword}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicPasswordConfirm">
                                    <Form.Label>Konfirmasi Password</Form.Label>
                                    <Form.Control type="password" placeholder="Masukkan Konfirmasi Password"
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