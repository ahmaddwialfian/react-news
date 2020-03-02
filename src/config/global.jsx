import axios from 'axios';

// export const BaseURLNews = 'http://learn.hackatown.online/api';
export const BaseURLNews = 'http://localhost:8000/api';

export const action = {
    'register': {
        'method': 'POST',
        'path': '/register',
        'auth': false
    },
    'login': {
        'method': 'POST',
        'path': '/login',
        'auth': false
    },
    'createnews': {
        'method': 'POST',
        'path': '/news',
        'auth': true
    },
    'list': {
        'method': 'GET',
        'path': '/news',
        'auth': false
    },
    'detail': {
        'method': 'GET',
        'path': '/news/',
        'auth': false
    },
    'listbylogin': {
        'method': 'GET',
        'path': '/news-by-user',
        'auth': true
    }
}

export const axiosNews = axios.create({
    baseURL: BaseURLNews
});