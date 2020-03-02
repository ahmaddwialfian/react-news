import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import Header from '../components/Header';
import NewsList from '../pages/NewsList';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NewsDetail from '../pages/NewsDetail';
import NewsCreate from '../pages/NewsCreate';

const route = [
    {
        path: "/",
        name: "News List",
        component: NewsList,
        exact: "exact",
        menu: {
            afterlogin: true,
            beforelogin: true
        }
    },
    {
        path: "/news/:id",
        name: "Detail News",
        component: NewsDetail,
        menu: {
            afterlogin: false,
            beforelogin: false
        }
    },
    {
        path: "/mynews",
        name: "Ny News",
        component: NewsCreate,
        menu: {
            afterlogin: true,
            beforelogin: false
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        menu: {
            afterlogin: false,
            beforelogin: true
        }
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        menu: {
            afterlogin: false,
            beforelogin: true
        }
    }
]

const Routes = () => {
    const [isLogedin, setIsLogedin] = useState(localStorage.getItem('token'));
    const actionLogout = () => {
        localStorage.setItem('token','')
        setIsLogedin('');
    }
    const actionLogin = (token) => {
        localStorage.setItem('token',token)
        setIsLogedin(token);
    }
    return (
        <Router>
            <div>
                <Header routes={route} isLogedin={isLogedin} login={actionLogin} logout={actionLogout}></Header>
            </div>
            <Switch>
                {route.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} isLogedin={isLogedin} login={actionLogin} logout={actionLogout} />
                ))}
                <Route path="*"><NewsList></NewsList></Route>
            </Switch >
        </Router >
    );
}

const RouteWithSubRoutes = (route) => {

    console.log(route);
    return (
        <Route
            exact
            path={route.path}
            render={props => (
                <route.component {...props} isLogedin={route.isLogedin} login={route.login} logout={route.logout} routes={route.routes} />
            )}
        />
    );
}

export default Routes;