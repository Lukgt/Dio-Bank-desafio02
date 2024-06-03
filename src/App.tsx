import { Box, ChakraProvider} from '@chakra-ui/react';
import { CardLogin } from './components/CardLogin';
import { Header } from './components/Header';

function App() {
  return (
    <>
    <ChakraProvider>
        <Box backgroundColor='#9413dc' >
          <Header />
          <CardLogin />
        </Box>
    </ChakraProvider>
      
    </>
  );
}

export default App;