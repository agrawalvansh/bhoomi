import React from 'react';
import Footer from './pages/Footer/footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './pages/scrollToTop';

function layout() {
    return (
        <>
            <ScrollToTop />
            <Outlet />
            <Footer />
        </>
    );

}

export default layout;