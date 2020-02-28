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

const route = [
    {
        path: "/",
        name: "News List",
        component: NewsList,
        exact: "exact",
    },
    // {
    //     path: "/news",
    //     name: "Detail News",
    //     component: NewsDetail,
    //     checkLogin: true
    // },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    }
]

const Routes = () => {
    const [login, setLogin] = useState(false);
    const loginAction = () => {
        setLogin(!login);
    }
    return (
        <Router>
            <div>
                <Header route={route}></Header>
            </div>
            <Switch>
                {route.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch >
        </Router >
    );
}

const RouteWithSubRoutes = (route) => {
    return (
        <Route
            exact
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

export default Routes;