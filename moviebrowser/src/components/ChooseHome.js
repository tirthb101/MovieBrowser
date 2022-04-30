import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Container,
    Flex,
    VStack,
    Heading,
    Text,
    SimpleGrid,
    GridItem,
    FormControl,
    FormLabel,
    Input, 
    Select,
    Checkbox,
    Button,
    HStack,
    Divider,
    AspectRatio,
    Img,
    useColorMode,
    useColorModeValue,
    useBreakpointValue
} from '@chakra-ui/react';

import { Link, useNavigate, useRoutes } from 'react-router-dom';





function ChooseHome () {
    const [ state, setState] = useState('');
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('gray.200', 'whiteAlpha.50');
    const colSpan = useBreakpointValue({base: 2, md: 1});
    const navigate = useNavigate();

    
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/popular?api_key=114c22764714091fcd3a585347932a48&language=en-US&page=1',
            Headers: {
              'content-type': 'application/json',
            }
          };


        async function get_data() {
            const data = await axios(options);
            await setState(data.data.results[0].backdrop_path);
        }

        get_data();
    }, []);

    function surprise(){
        const num = Math.floor(Math.random() * 10)
        if (num === 1){
            navigate('414906')
        }
        else if (num === 2){
            navigate('508947')
        }
        else if(num === 3){
            navigate('294793')
        }
        else if (num === 4){
            navigate('335787')
        }
        else if (num === 5){
            navigate('406759')
        }
    }
    return (
        <div  id='back' style={{ 
            backgroundImage: `url("http://image.tmdb.org/t/p/w1280/${state}")`
          }}>
        <Container maxWidth='100vW'>
            <Flex direction='row' justify='space-evenly' height='80vH' alignItems='center'>
                <Button marginLeft={7} padding={2}><Text fontSize='40px' onClick={surprise}>Surprise me</Text></Button>
                <Button marginRight={7} padding={2}><Text fontSize='40px' ><Link to='/browse'>Browse</Link></Text></Button>
            </Flex>
        </Container>
        </div>
    )
}
export default ChooseHome;