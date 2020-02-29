import React, { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import NewsItem from '../components/NewsItem';
import { axiosNews, action } from '../config/global';
import { useState } from 'react';


const NewsList = () => {
    const [news, setNews] = useState([]);

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
            setNews(data.data);
        } catch (error) {

        }
    }

    return (
        <Container>
            <h1>News Timeline</h1>
            <hr />
            <NewsItem news={news}></NewsItem>
        </Container >
    );
}

export default NewsList;