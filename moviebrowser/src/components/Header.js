import React from "react";
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

import { SunIcon } from '@chakra-ui/icons';

import { Link } from 'react-router-dom';

function Head() {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('gray.200', 'whiteAlpha.50');
    return (
        <Container maxWidth='100vW' bg={bgColor} padding={3}>
            <Flex direction='row' align='center' justify='space-between'>
                
                <Flex  direction='row'>
                    <Heading paddingRight={10} >Movie DB</Heading>
                    <Link  to='/'>
                        <Text paddingTop={3} >Home</Text>
                    </Link>
                </Flex>
                    
                    
            
                <Button onClick={toggleColorMode}><SunIcon /></Button>
            </Flex>
        </Container>
    )
};

export default Head;
