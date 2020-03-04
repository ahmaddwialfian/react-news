import React, { useEffect } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import NewsItem from '../components/NewsItem';
import { axiosNews, action } from '../config/global';
import { useState } from 'react';


const NewsList = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchNewsAsync()
    }, []);

    const fetchNewsAsync = async () => {
        try {
            const response = await axiosNews({
                method: action.list.method,
                url: action.list.path
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
            <h1>News Timeline</h1>
            <hr />
            <NewsItem news={news}></NewsItem>
        </Container >
    );
}

export default NewsList;