import React, { useEffect } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import NewsForm from '../components/NewsForm';
import { axiosNews, action } from '../config/global';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Redirect, Link
} from "react-router-dom";

const NewsEdit = ({ isLogedin, login, logout }) => {
    const [isEdited, setIsEdited] = useState(false);
    const defaultTemp = {
        title: null,
        content: null,
        photo: null,
        photoInput: null,
    }
    const [temp, setTemp] = useState(defaultTemp);
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
            setTemp(data.data);
        } catch (error) {
            setIsLoading(false);
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
    const handleInputImage = event => {
        setTemp(
            {
                ...temp,
                photo: URL.createObjectURL(event.target.files[0]),
                photoInput: event.target.files[0]
            }
        )
    }

    const perfromSave = async () => {
        axiosNews.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        setIsLoading(true);
        try {
            let bodyFormData = new FormData();
            bodyFormData.set('title', temp.title);
            bodyFormData.set('content', temp.content);
            if (temp.photoInput)
                bodyFormData.set('photo', temp.photoInput);

            const response = await axiosNews({
                method: action.updatenews.method,
                url: action.updatenews.path + id,
                headers: { 'Content-Type': 'multipart/form-data' },
                data: bodyFormData
            }).catch(function (error) {
                return error.response;
            });;
            const { data } = response;
            if (data.error) {
                alert(data.message)
            }
            else if (data.errors) {
                let errorMessage = '';
                if (data.errors.title)
                    data.errors.title.map((row, i) =>
                        errorMessage += row + "\n"
                    );
                if (data.errors.content)
                    data.errors.content.map((row, i) =>
                        errorMessage += row + "\n"
                    );
                if (data.errors.photo)
                    data.errors.photo.map((row, i) =>
                        errorMessage += row + "\n"
                    );
                alert(errorMessage);
            }
            else {
                alert(data.message)
                setIsEdited(true);
            }
        } catch (error) {
        }
        setIsLoading(false);
    }

    return (
        <Container>
            {!isLogedin ? <Redirect to="/" /> : ''}
            {isEdited ? <Redirect to="../mynews"></Redirect> : ''}
            <h1>News Edit</h1>
            <hr />
            {temp ? (
                <NewsForm news={temp} save={perfromSave} titleChange={handleInputTitle} contentChange={handleInputContent} imageChange={handleInputImage} isLoading={isLoading} />
            ) : ""}
        </Container >
    );
}

export default NewsEdit;