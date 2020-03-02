import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import NewsTable from '../components/NewsTable';
import { axiosNews, action } from '../config/global';
import { useState } from 'react';
import {
    Redirect
} from "react-router-dom";

const NewsCreate = ({isLogedin,login,logout}) => {
    const [news, setNews] = useState([]);
    axiosNews.defaults.headers.common['Authorization'] =  'Bearer ' + localStorage.getItem('token');

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

    return (
        <Container>
            {!isLogedin?<Redirect to="/"/>:''}
            <h1>News By Me</h1>
            <hr />
            <NewsTable news={news}></NewsTable>
        </Container >
    );
}

export default NewsCreate;