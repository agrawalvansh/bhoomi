import React from 'react';
import Header from './pages/Header/header';
import Footer from './pages/Footer/footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './pages/scrollToTop';

function layout() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </>
    );

}

export default layout;