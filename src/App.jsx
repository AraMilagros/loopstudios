import React from 'react';

import Nav from './components/Nav';
import Header from './components/Header'
import Article from './components/Article';
import Creations from './components/Creations';
import Footer from './components/Footer';

import './index.css';
export default function App() {


    return (
        <>
            <Nav />
            <Header />
            <Article />
            <Creations />
            <Footer />
        </>
    );

}