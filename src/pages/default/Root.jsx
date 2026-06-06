import React, { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './../../components/common/Header';
import Footer from './../../components/common/Footer';
import Loading from './../../components/common/Loading';
import ErrorBoundary from './../../components/common/ErrorBoundary';

const Root = () => {
    const location = useLocation();
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <ErrorBoundary>
                    <Suspense fallback={<Loading />}>
                        <Outlet />
                    </Suspense>
                </ErrorBoundary>
            </main>
            <Footer />
        </div>
    );
};

export default Root;
