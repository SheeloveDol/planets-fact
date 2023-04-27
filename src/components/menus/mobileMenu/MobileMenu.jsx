import {
  Text,
  Box,
  Image,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Divider,
} from "@chakra-ui/react";

import planetNames from "../../../planetsNames/planetNames";

import Hamburger from "../../../assets/icon-hamburger.svg";
import ChevronIcon from "../../../assets/icon-chevron.svg";

function MobileMenu() {
  

  return (
    <Grid direction="column" alignItems="center">
      <Menu>
        <MenuButton display={["grid", "none", "none", "none"]}>
          <Image src={Hamburger} />
        </MenuButton>
        <MenuList
          mt="1.5rem"
          pt="1rem"
          h="100vh"
          w="100vw"
          bgColor="hsl(240, 67%, 8%)"
          // border='2px'
          // borderColor='red.600'
          border="none"
        >
          {planetNames.map((planet) => (
            <Box key={planet.name}>
              <MenuItem

              // border='none'
              // borderColor='blue'
              // borderBottom='2px solid hsl(240, 17%, 26%)'
              // borderBottomWidth='80%'
              >
                <Flex
                  flex="1"
                  justify="Space-between"
                  marginRight="0.75rem"
                  // border='1px'
                >
                  <Flex gap="0.75rem">
                    <Grid
                      bgColor={planet.color}
                      mx="0.5rem"
                      my="1rem"
                      h="1rem"
                      px="0.5rem"
                      borderRadius="full"
                    ></Grid>
                    <Flex>
                      <Text pt="0.7rem">{planet.name}</Text>
                    </Flex>
                  </Flex>
                  <Image
                    mt="1rem"
                    boxSize="0.75rem"
                    src={ChevronIcon}
                    alt="Chevon Icon"
                  />
                </Flex>
              </MenuItem>
              <Divider w="90%" m="auto" color="hsl(240, 17%, 26%)" />
            </Box>
          ))}
        </MenuList>
      </Menu>
    </Grid>
  );
}

export default MobileMenu;
