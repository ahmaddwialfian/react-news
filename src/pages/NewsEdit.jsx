import React, { useEffect } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import NewsForm from '../components/NewsForm';
import { axiosNews, action } from '../config/global';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Redirect, Link
} from "react-router-dom";

const NewsEdit = () => {
    const [isEdited, setIsEdited] = useState(false);
    const [temp, setTemp] = useState();
    
    axiosNews.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

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
            setTemp(data.data);
        } catch (error) {

        }
    }

    const handleInputTitle = event => {
        setTemp(
            {
                ...temp,
                title: event.target.value
            }
        )
    }
    const handleInputContent = event => {
        setTemp(
            {
                ...temp,
                content: event.target.value
            }
        )
    }

    const perfromSave = async () => {
        try {
            let bodyFormData = new FormData();
            bodyFormData.set('title', temp.title);
            bodyFormData.set('content', temp.content);

            const response = await axiosNews({
                method: action.updatenews.method,
                url: action.updatenews.path + id,
                headers: { 'Content-Type': 'multipart/form-data' },
                data: bodyFormData
            });
            const { data } = response;
            if(data.error){
                alert(data.message)
            }
            else{
                alert(data.message)
                setIsEdited(true);
            }
        } catch (error) {

        }
    }

    return (
        <Container>
            {isEdited?<Redirect to="../mynews"></Redirect>:''}
            <h1>News Edit</h1>
            <hr />
            {temp ? (
                <NewsForm news={temp} save={perfromSave} titleChange={handleInputTitle} contentChange={handleInputContent} />
            ) : ""}
        </Container >
    );
}

export default NewsEdit;