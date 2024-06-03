import { Box, ChakraProvider, Flex, Heading } from "@chakra-ui/react"

export const Header = () => {
    return (
        <>
            <ChakraProvider>
                <Box bg='teal' borderBottomRadius='25px'>
                    <Flex align='center' justify='center'>
                        <Heading size='lg' padding='25px' color='#FFFFFF' > Dio Bank</Heading>
                    </Flex>
                </Box>
            </ChakraProvider >
        </>
    )
}