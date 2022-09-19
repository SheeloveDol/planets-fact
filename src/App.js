import { Box, Text } from '@chakra-ui/react'
import NavBar from './components/navbar/NavBar';
import './App.css';

function App() {
  return (
    <Box 
      bgColor='blackAlpha.700'
      h='100vh'
    >
      <NavBar />
    </Box>
  );
}

export default App;
