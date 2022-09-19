import { 
    Box, 
    Flex, 
    Heading, 
    Image, 
    Grid,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
 } from "@chakra-ui/react";

 import MobileMenu from "../mobileMenu/MobileMenu";


const NavBar = () => {
  return (
    <Flex 
      justify={["space-between"]} 
      color='white'
    >
      <Heading as="h1">The Planets</Heading>
      <Grid
        // border="1px"
        borderColor="black.100"
        direction="column"
        alignItems="center"
      >
        <MobileMenu />
      </Grid>
    </Flex>
  );
};

export default NavBar;
