import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
  Center,
  Spacer,
} from "@chakra-ui/react";

const Item = ({ id, name, description, image, price }) => {
  return (
    <Card
      className="card-productos"
      align="center"
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        border="2px solid black"
        borderRadius="15px"
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={image}
        alt=""
      />

      <Stack>
        <CardBody>
          <Heading size="md">{name}</Heading>

          <Text py="2">{description}</Text>

          <Text py="0.5">{price}</Text>
        </CardBody>

        <CardFooter>
          <Link to={`/item/${id}`}>
            <Button border="2px solid black" variant="solid" colorScheme="gray">
              Detalles
            </Button>
          </Link>
          <Spacer />
          <ItemCount />
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default Item;
