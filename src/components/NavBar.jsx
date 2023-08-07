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
import { ArrowDownIcon } from "@chakra-ui/icons";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Flex>
        <Box>
          {/* NOMBRE A CAMBIAR */}
          <Heading className="brand">
            <Link to={`/`}>Kousyn</Link>
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton className="btn-navbar" as={Button}>
              Nuestro menu
              <ArrowDownIcon />
            </MenuButton>
            <MenuList>
              {/* <MenuItem>Hamburguesas</MenuItem>
              <MenuItem>Entradas</MenuItem>
              <MenuItem>Bebidas</MenuItem> */}
              <MenuItem>
                <Link to={`/category/${"Hamburguesas"}`}>Hamburguesas</Link>
              </MenuItem>
              <MenuItem>
                <Link to={`/category/${"Entradas"}`}>Entradas</Link>
              </MenuItem>
              <MenuItem>
                <Link to={`/category/${"Bebidas"}`}>Bebidas</Link>
              </MenuItem>
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
