import { SmallAddIcon } from "@chakra-ui/icons";
import { Flex, Box } from "@chakra-ui/react";

const CartWidget = () => {
  return (
    <Flex className="cart-widget">
      <Box>
        <p>0$</p>
      </Box>
      <Box>
        <SmallAddIcon />
      </Box>
    </Flex>
  );
};

export default CartWidget;
