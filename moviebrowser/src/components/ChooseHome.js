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

function ChooseHome () {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('gray.200', 'whiteAlpha.50');
    const colSpan = useBreakpointValue({base: 2, md: 1})
    return (
        <div  id='back' style={{ 
            backgroundImage: `url("https://parade.com/wp-content/uploads/2020/03/avengers-marvel.jpg")`
          }}>
        <Container maxWidth='100vW'>
            <Flex direction='row' justify='space-evenly' height='80vH' alignItems='center'>
                <Button marginLeft={7} padding={2}><Text fontSize='40px'>Surprise me</Text></Button>
                <Button marginRight={7} padding={2}><Text fontSize='40px' >Browse</Text></Button>
            </Flex>
        </Container>
        </div>
    )
}
export default ChooseHome;