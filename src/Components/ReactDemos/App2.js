import React from 'react';
import './App2.css';
import Header from './Header';
import Menu from './Menu';
import NavBar from './NavBar';
import Content from './Content';
import Footer from './Footer';

const App2 = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <Menu></Menu>
            <Content></Content>
            <Footer></Footer>
        </div>
    )
}

export default App2