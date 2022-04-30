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

import { SocialIcon } from 'react-social-icons';

function Foot() {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('gray.200', 'whiteAlpha.50');
    return (
        <>
        <Container maxWidth='100vW' bg={bgColor}>
        <Flex alignItems='center' justify='space-between'>
            <Flex>
                <a href="#"><Text padding={4}>©2022</Text></a>
                
                <a href="#"><Text padding={4}>Privacy Policy</Text></a>
                <a href="#"><Text padding={4}>DMCA</Text></a>
            </Flex>
            <Flex>
                <a href="#"><Text padding={4} >Facebook</Text></a>
                <a href="#"><Text padding={4} >Instagram</Text></a>
                <a href="#"><Text padding={4} >Twitter</Text></a>
            </Flex>
        </Flex>
        </Container>
        </>
    )
};

export default Foot;
