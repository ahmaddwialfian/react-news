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

const route = [
    {
        path: "/",
        name: "News List",
        component: NewsList,
        exact: "exact",
        menu: true
    },
    {
        path: "/news/:id",
        name: "Detail News",
        component: NewsDetail,
        menu: false
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        menu: true
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        menu: true
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
                <Header routes={route}></Header>
            </div>
            <Switch>
                {route.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
                <Route path="*"><NewsList></NewsList></Route>
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