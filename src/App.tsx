import {
  ChakraProvider,
  Box,
} from '@chakra-ui/react'
import { Card } from './components/Card';
import { Layout } from './components/Layout';
import { login } from './services/login';


function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Box
          minHeight='calc(100vh - 108px)'
          backgroundColor='rgb(21, 22, 27)'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Card onLogin={login} />
        </Box>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
