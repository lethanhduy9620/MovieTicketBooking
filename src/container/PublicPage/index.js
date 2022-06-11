import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
            <Footer />
        </Fragment>
    )
}
