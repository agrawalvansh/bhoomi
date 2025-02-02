import React from 'react';
import Header from './pages/Header/header';
import Footer from './pages/Footer/footer';
import { Outlet } from 'react-router-dom';

function layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default layout;