import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import CardList from './components/Card';
import PreFooter from './components/PreFooter';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <Body/>
            <CardList/>
            <PreFooter/>
            <Footer />
        </div>
    );
};

export default App;