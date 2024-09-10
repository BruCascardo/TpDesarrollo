import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

//components
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import CardList from './components/Card';
import PreFooter from './components/PreFooter';
import CardDetail from './components/CardDetail';

const flightDetails = {
    destino: 'Madrid',
    origen: 'Buenos Aires',
    precio: '1.341.920',
    imagen: 'https://images.almundo.com/205/image/upload/v1568324811/home-v3/flights/photo-1483450388369-9ed95738483c.jpeg',
    descripcion: 'Disfruta de un vuelo cómodo y seguro con las mejores aerolíneas.',
    duracion: '11 horas',
    equipaje: 'Equipaje de mano y una maleta de hasta 23kg'
};

//App component
const pageTransition = {
    initial: { opacity: 0 }, 
    animate: { opacity: 1 },
    exit: { opacity: 0 }, 
    transition: { duration: 0.4 } 
};

const App: React.FC = () => {
    const location = useLocation();

    return (
        <>
            <Header />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route
                        path="/"
                        element={
                            <motion.div {...pageTransition}>
                                <Body/>
                                <CardList/>
                                <PreFooter/>
                                <Footer/>
                            </motion.div>
                        }
                    />
                    {/* <Route
                        path="/cardDetail"
                        element={
                            <motion.div {...pageTransition}>
                                <CardDetail {...flightDetails}/>
                            </motion.div>
                        }
                    /> */}
                    <Route
                        path="/prefooter"
                        element={
                            <motion.div {...pageTransition}>
                                <PreFooter />
                            </motion.div>
                        }
                    />
                    <Route
                        path="/footer"
                        element={
                            <motion.div {...pageTransition}>
                                <Footer />
                            </motion.div>
                        }
                    />
                </Routes>
            </AnimatePresence>
        </>
    );
};

export default App;