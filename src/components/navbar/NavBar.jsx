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
import Hamburger from "../../assets/icon-hamburger.svg";

const NavBar = () => {
  return (
    <Flex justify={["space-between"]} >
      <Heading as="h1">The Planets</Heading>
      <Grid
        border="1px"
        borderColor="black.100"
        direction="column"
        alignItems="center"
      >
        <Menu  >
          <MenuButton display={['grid', 'none', 'none', 'none']} >
            <Image src={Hamburger} />
          </MenuButton>
          <MenuList h='100vh' w='100vw'>
            <MenuItem p='1rem' border='1px'>Mercury</MenuItem>
            <MenuItem p='1rem' >Venus</MenuItem>
            <MenuItem p='1rem' >Earth</MenuItem>
            <MenuItem p='1rem' >Mars</MenuItem>
            <MenuItem p='1rem' >Jupiter</MenuItem>
            <MenuItem p='1rem' >Saturn</MenuItem>
            <MenuItem p='1rem' >Uranus</MenuItem>
            <MenuItem p='1rem' >Neptune</MenuItem>
          </MenuList>
        </Menu>
      </Grid>
    </Flex>
  );
};

export default NavBar;
