import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

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
    Spacer,
    Img,
    useColorMode,
    useColorModeValue,
    useBreakpointValue
} from '@chakra-ui/react';

function Movie(params){
    const [state, setState] = useState('');
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('gray.200', 'whiteAlpha.50');
    const movieID = useParams();
    const colSpan = useBreakpointValue({base: 2, md: 1});

    


    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${movieID.movieID}?api_key=114c22764714091fcd3a585347932a48`,
            Headers: {
              'content-type': 'application/json',
            }
          };


        async function get_data() {
            const data = await axios(options);
            await setState(data.data);
        }

        get_data();
    }, [movieID])


    return (
        <>
        <Container maxWidth='container.xl' padding={0}>
            <Flex>
            <Flex width='50vW' margin={0}>
                <Img src={`http://image.tmdb.org/t/p/w1280/${state.backdrop_path}`}></Img>
            </Flex>
            <Flex>
                <SimpleGrid>
                
                
                <GridItem><HStack><Heading margin={3} size='md'>Language:</Heading> <Text>{state.original_language}</Text></HStack></GridItem>
                
                <GridItem><HStack><Heading margin={3} size='md'>Title:</Heading> <Text>{state.original_title}</Text></HStack></GridItem>
                <GridItem><HStack><Heading margin={3} size='md'>Budget:</Heading> <Text>{state.budget}</Text></HStack></GridItem>
                <GridItem><HStack><Heading margin={3} size='md'>popularity:</Heading> <Text>{state.popularity}</Text></HStack></GridItem>
                
                <GridItem><HStack><Heading margin={3} size='md'>Overview:</Heading> <Text>{state.overview}</Text></HStack></GridItem>
                
                </SimpleGrid>
            </Flex>
            </Flex>
        </Container>
        </>
    );
};

export default Movie;