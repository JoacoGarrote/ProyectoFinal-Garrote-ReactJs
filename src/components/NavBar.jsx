import {
  Flex,
  Box,
  Spacer,
  Heading,
  Button,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="navbar">
      <Flex>
        <Box>
          {/* NOMBRE A CAMBIAR */}
          <Heading className="brand">Kousyn Burgers</Heading>
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton className="btn-navbar" as={Button}>
              Nuestro menu
            </MenuButton>
            <MenuList>
              <MenuItem>Hamburguesas</MenuItem>
              <MenuItem>Entradas</MenuItem>
              <MenuItem>Bebidas</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box>
          <ButtonGroup className="btns-nav">
            <Button className="btn-navbar">Take Away</Button>
            <Button className="btn-navbar">Sobre nosotros</Button>
          </ButtonGroup>
        </Box>
        <Spacer />
        <CartWidget />
      </Flex>
    </div>
  );
};

export default NavBar;
