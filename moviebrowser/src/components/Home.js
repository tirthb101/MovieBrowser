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

function Page () {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('gray.200', 'whiteAlpha.50');
    const colSpan = useBreakpointValue({base: 2, md: 1})
    return (
        <Container maxWidth='container.xl' padding={0}>
            <Flex height={{'base': 'auto', 'md':'100vh'}} paddingY={{'base': 0, 'md': 10}} direction={{'base':'column-reverse', 'md':'row'}}>
                <VStack
                spacing={10}
                padding={10}
                w='full'
                h='full'
                alignItems='flex-start'>
                    <VStack spacing={2} alignItems='flex-start'>
                        <Heading size='2xl'>Your details</Heading>
                        <Text>Click here if you already have a acount</Text>
                    </VStack>
                <SimpleGrid columns={2} columnGap={3} rowGap={6}>
                    <GridItem colSpan={colSpan}>
                        <FormControl>
                            <FormLabel>First name</FormLabel>
                                <Input placeholder="First name"/>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={colSpan}>
                        <FormControl>
                            <FormLabel>Last name</FormLabel>
                                <Input placeholder="Last name"/>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>Address</FormLabel>
                                <Input placeholder="Adress"/>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={colSpan}>
                        <FormControl>
                            <FormLabel>City</FormLabel>
                                <Input placeholder="City"/>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={colSpan}>
                        <FormControl>
                            <FormLabel>Country</FormLabel>
                                <Select>
                                    <option value='usa'>Unitaed states of america</option>
                                    <option value='uk'>Unitaed kingdom</option>
                                    <option value='india'>India</option>
                                </Select>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Checkbox defaultChecked>Ship to the billing address</Checkbox>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Button variant='primary' size='lg' width='full'>Place order</Button>
                    </GridItem>
                </SimpleGrid>
                
                </VStack>
            </Flex>
        </Container>
    )
}
export default Page;