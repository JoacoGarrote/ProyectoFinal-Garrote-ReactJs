import { AiOutlineShoppingCart } from "react-icons/ai";
import { Flex, Box } from "@chakra-ui/react";

const CartWidget = () => {
  return (
    <Flex className="cart-widget">
      <Box>
        <p>3</p>
      </Box>
      <Box>
        <AiOutlineShoppingCart />
      </Box>
    </Flex>
  );
};

export default CartWidget;
