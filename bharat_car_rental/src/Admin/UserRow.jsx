import React from "react";
import { Tr, Td, Text } from "@chakra-ui/react";

const UserRow = ({
  car_title,
  caritem,
  caritem2,
  caritem3,
  revenuepricediscounted,
  revenuepriceoriginal,
  revenuedistance,
  ratingtext,
  id,
}) => {
  return (
    <Tr>
      <Td>{id + 1}</Td>
      <Td>{car_title}</Td>
      <Td>{caritem}</Td>
      <Td>{caritem2}</Td>
      <Td>{caritem3}</Td>
      <Td>{revenuepricediscounted}</Td>
      <Td>{revenuepriceoriginal}</Td>
      <Td>{revenuedistance}</Td>
      <Td>
        <Text color="green.500">{ratingtext}</Text>
      </Td>
    </Tr>
  );
};

export { UserRow };
