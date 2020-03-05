import React, { useEffect } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import NewsTable from '../components/NewsTable';
import { axiosNewsUser, action } from '../config/global';
import { useState } from 'react';
import {
    Redirect, Link
} from "react-router-dom";

const MyNews = ({ isLogedin, login, logout }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetchNewsAsync()
    }, []);

    const fetchNewsAsync = async () => {
        try {
            const response = await axiosNewsUser()({
                method: action.listbylogin.method,
                url: action.listbylogin.path
            }).catch(function (error) {
                return error.response;
            });
            const { data } = response;
            if (data.error) {

            } 
            else if(data.message){
                alert('Harap login terlebih dahulu')
                logout();
            } else {
                setNews(data.data);
            }
        } catch (error) {
        }
        setIsLoading(false);
    }

    const performDelete = async (id) => {
        if (window.confirm('Apakah anda yakin akan menghapus berita ini?')) {
            try {
                const response = await axiosNewsUser({
                    method: action.deletenews.method,
                    url: action.deletenews.path + id
                }).catch(function (error) {
                    return error.response;
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
            <Modal
                size="sm"
                show={isLoading}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Body>Loading...</Modal.Body>
            </Modal>
            <h1>News By Me</h1>
            <hr />
            <Link to="newscreate"><Button variant="success">Add News</Button></Link>
            <hr />
            <NewsTable news={news} performDelete={performDelete}></NewsTable>
        </Container >
    );
}

export default MyNews;