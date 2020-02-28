import React from 'react'
import logo from '../assets/img/logo.svg'
import { CardDeck, Card, Button, Row, Col } from 'react-bootstrap';

const NewsItem = ({ news }) => {
    return (
        <Row>
            {news.map(
                (row, i) => (
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={row.photo} style={{ width: 250 }} />
                            <Card.Body>
                                <Card.Title>{row.title}</Card.Title>
                                <Card.Text>
                                    {row.content}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>

                )
            )
            }
        </Row>
    )
}
export default NewsItem;