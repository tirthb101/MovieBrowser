import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./themes/theme";
import './themes/style.css'



import Head from "./components/Header";
import Foot from "./components/Footer";
import Page from './components/Home';
import ChooseHome from './components/ChooseHome';
import Movie from "./components/Movie";

function App() {
  return (
    
      <ChakraProvider theme={theme}>
        <Router>
        <Head />
          <Routes>
            <Route path="/" element={<ChooseHome/>} />
            <Route path="/browse" element={<Page />} />
            <Route path="/movie" element={<Movie />} />
          </Routes>
        <Foot />
        </Router>
      </ChakraProvider>
    
  );
}

export default App;
