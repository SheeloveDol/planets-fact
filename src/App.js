import { Box } from '@chakra-ui/react'
import NavBar from './components/navbar/NavBar';
import Background from './assets/background-stars.svg'
// import './App.css';

function App() {
  return (
    <Box 
      
      h='100vh'
      bgImage={`url(${Background})`}
      position='center'
      bgRepeat='no-repeat'
      color='white'
      bgColor='hsl(240, 67%, 8%)'
      // padding='1rem'
    >
      <NavBar />
  
    </Box>
  );
}

export default App;
