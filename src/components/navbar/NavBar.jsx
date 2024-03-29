import { 
    Flex, 
    Heading, 
    Grid
  
 } from "@chakra-ui/react";

 import MobileMenu from "../menus/mobileMenu/MobileMenu";


const NavBar = () => {
  return (
    <Flex 
      justify={["space-between"]} 
      direction={['row', 'column', 'column', 'row']}
      borderBottom='1px solid hsl(240, 17%, 26%)'
      padding='1rem'
    >
      <Heading as="h1">The Planets</Heading>
      <Grid
        // border="1px"
        // borderColor="black.100"
        direction="column"
        alignItems="center"
      >
        <MobileMenu />
      </Grid>
    </Flex>
  );
};

export default NavBar;