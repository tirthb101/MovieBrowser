import React, { useEffect, useState} from "react";
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
    useBreakpointValue,
    Center,
    Image
} from '@chakra-ui/react';

import { Link, useNavigate, useRoutes } from 'react-router-dom';

function Page () {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('gray.200', 'whiteAlpha.50');
    const colSpan = useBreakpointValue({base: 2, md: 1})
    const [ state, setState] = useState([]);
    const [term, setTerm] = useState('');

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
            await setState(data.data.results);
        }

        get_data();
    }, [])


    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/search/movie?api_key=114c22764714091fcd3a585347932a48&language=en-US&query=${term}&page=1`,
            Headers: {
              'content-type': 'application/json',
            }
          };


        async function get_data2() {
            const data = await axios(options);
            await setState(data.data.results);
        }

        get_data2();
    }, [term])

    const handlechnage = (event) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;

        if (name === 'term'){
            setTerm(value);
        }
        console.log(term);
       
    }


    return (
        <>
        <Center margin={10}>
            <FormControl>
                <FormLabel><Heading>Search</Heading></FormLabel>
                <Input placeholder="Search term" onChange={handlechnage} name='term' value={term} />
            </FormControl>
        </Center>
        <SimpleGrid columns={4} columnGap={3} rowGap={6}  >
            {state.map(movie => <GridItem onClick={() => navigate(`/${movie.id}`, {replace: true})}>
                
                <AspectRatio marginLeft={8} ratio={0.5} w={250} >
                    <Image borderRadius={15} src={`http://image.tmdb.org/t/p/w780${movie.poster_path}`} ></Image>
                </AspectRatio>
               
            </GridItem>)}
        </SimpleGrid>
        
        </>
    )
}
export default Page;