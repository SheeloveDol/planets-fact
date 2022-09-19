import { 
    Image, 
    Grid,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
 } from "@chakra-ui/react";

 import Hamburger from "../../assets/icon-hamburger.svg";

function MobileMenu() {

    const planetNames = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

  return (
    <Grid
        // border="1px"
        borderColor="black.100"
        direction="column"
        alignItems="center"
      >
        <Menu   >
          <MenuButton display={['grid', 'none', 'none', 'none']} >
            <Image src={Hamburger} />
          </MenuButton>
          <MenuList 
            pt='1rem'
            h='100vh' 
            w='100vw'  
            bgColor='hsl(240, 67%, 8%)'
            border='none'
        >
        {
            planetNames.map((planet) => <MenuItem p='1rem' >{planet}</MenuItem>)
        }
            {
            //     <MenuItem p='1rem' >Mercury</MenuItem>
            // <MenuItem p='1rem' >Venus</MenuItem>
            // <MenuItem p='1rem' >Earth</MenuItem>
            // <MenuItem p='1rem' >Mars</MenuItem>
            // <MenuItem p='1rem' >Jupiter</MenuItem>
            // <MenuItem p='1rem' >Saturn</MenuItem>
            // <MenuItem p='1rem' >Uranus</MenuItem>
            // <MenuItem p='1rem' >Neptune</MenuItem>
        }
          </MenuList>
        </Menu>
      </Grid>
  )
}

export default MobileMenu
