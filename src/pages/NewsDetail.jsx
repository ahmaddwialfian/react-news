import React, { useEffect } from 'react';
import { Container, Form, Button, Card, Modal } from 'react-bootstrap';
import NewsItem from '../components/NewsItem';
import { axiosNews, action } from '../config/global';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const NewsDetail = () => {
    const [news, setNews] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        fetchDetailNewsAsync()
    }, []);

    const fetchDetailNewsAsync = async () => {
        try {
            const response = await axiosNews({
                method: action.detail.method,
                url: action.detail.path + id
            });
            const { data } = response;
            setIsLoading(false);
            setNews(data.data);
        } catch (error) {
            setIsLoading(false);
        }
    }

    return (
        <Container>
            <Modal
                size="sm"
                show={isLoading}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Body>Loading...</Modal.Body>
            </Modal>
            {news ? (
                <Card>
                    <Card.Body>
                        <h1>{news.title}</h1>
                        <span className="text-muted">Author <strong>{news.user.username}</strong>, {news.created_at}</span>
                        <hr />
                        <center>
                            <img src={news.photo} width="400" onError={(e) => { e.target.onerror = null; e.target.src = "../nopic.png" }} ></img>
                        </center>
                        <br />
                        <p>
                            {news.content}
                        </p>
                    </Card.Body>
                </Card>
            ) : ""}
        </Container >
    );
}

export default NewsDetail;