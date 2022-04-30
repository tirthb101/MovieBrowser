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
    Center
} from '@chakra-ui/react';

function Page () {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('gray.200', 'whiteAlpha.50');
    const colSpan = useBreakpointValue({base: 2, md: 1})
    const [ state, setState] = useState('');

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


    return (
        <>
        <Center margin={10}>
            <FormControl>
                <FormLabel>Search</FormLabel>
                <Input placeholder="First name"/>
            </FormControl>
        </Center>
        <SimpleGrid columns={2} columnGap={3} rowGap={6}  >
        {state.map(movie => <GridItem margin={5}>{movie.backdrop_path}</GridItem>)}
        </SimpleGrid>
        
        </>
    )
}
export default Page;