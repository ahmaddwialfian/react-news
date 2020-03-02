import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import NewsTable from '../components/NewsTable';
import { axiosNews, action } from '../config/global';
import { useState } from 'react';
import {
    Redirect, Link
} from "react-router-dom";

const MyNews = ({ isLogedin, login, logout }) => {
    const [news, setNews] = useState([]);
    if (action.listbylogin.auth)
        axiosNews.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

    useEffect(() => {
        fetchNewsAsync()
    }, []);

    const fetchNewsAsync = async () => {
        try {
            const response = await axiosNews({
                method: action.listbylogin.method,
                url: action.listbylogin.path
            });
            const { data } = response;
            setNews(data.data);
        } catch (error) {

        }
    }

    const performDelete = async (id) => {
        if (window.confirm('Apakah anda yakin akan menghapus berita ini?')) {
            try {
                const response = await axiosNews({
                    method: action.deletenews.method,
                    url: action.deletenews.path + id
                });
                const { data } = response;
                if (data.error) {
                    alert(data.message)
                }
                else {
                    alert(data.message)
                    setNews(news.filter(data => data.id !== id));
                }
            } catch (error) {

            }
        }
    }

    return (
        <Container>
            {!isLogedin ? <Redirect to="/" /> : ''}
            <h1>News By Me</h1>
            <hr />
            <Link to="newscreate"><Button variant="success">Add News</Button></Link>
            <hr />
            <NewsTable news={news} performDelete={performDelete}></NewsTable>
        </Container >
    );
}

export default MyNews;