import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function PublicPage(props) {
    const { exact, path, component } = props;

    return (
        <Fragment>
            <Navbar />
            <Route
                exact={exact}
                path={path}
                component={component}
            />
        </Fragment>
    )
}
