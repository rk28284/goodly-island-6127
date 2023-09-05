import React, { useReducer, useState } from "react";
import {
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import { UserRow } from "./UserRow";

const initialState = {
  id: 1,
  car_title: "",
  caritem: "",
  caritem2: "",
  caritem3: "",
  revenuepricediscounted: "",
  revenuepriceoriginal: "",
  revenuedistance: "",
  ratingtext: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "car_title": {
      return { ...state, car_title: action.payload };
    }
    case "caritem": {
      return { ...state, caritem: action.payload };
    }
    case "caritem2": {
      return { ...state, caritem2: action.payload };
    }
    case "caritem3": {
      return { ...state, caritem3: action.payload };
    }
    case "revenuepricediscounted": {
      return { ...state, revenuepricediscounted: action.payload };
    }
    case "revenuepriceoriginal": {
      return { ...state, revenuepriceoriginal: action.payload };
    }
    case "revenuedistance": {
      return { ...state, revenuedistance: action.payload };
    }
    case "ratingtext": {
      return { ...state, ratingtext: action.payload };
    }
    case "reset": {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

function Admin() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, state]);
    dispatch({ type: "reset" });
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Add Your Favourite Car</Heading>

      <form onSubmit={handleSubmitForm}>
        <FormControl mb={4}>
          <FormLabel>Car Title</FormLabel>
          <Input
            type="text"
            placeholder="Enter Your Car Title"
            value={state.car_title}
            onChange={(e) => dispatch({ type: "car_title", payload: e.target.value })}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Car Item</FormLabel>
          <Input
            type="text"
            placeholder="Enter Your Car Item"
            value={state.caritem}
            onChange={(e) => dispatch({ type: "caritem", payload: e.target.value })}
          />
        </FormControl>

        {/* Repeat the same structure for other form fields */}
        <FormLabel>Car Item2</FormLabel>
<Input
  type="text"
  placeholder="Enter Your Car Item2"
  value={state.caritem2}
  onChange={(e) => dispatch({ type: "caritem2", payload: e.target.value })}
/>

<FormLabel>Car Item3</FormLabel>
<Input
  type="text"
  placeholder="Enter Your Car Item3"
  value={state.caritem3}
  onChange={(e) => dispatch({ type: "caritem3", payload: e.target.value })}
/>

<FormLabel>Revenue Price Discounted</FormLabel>
<Input
  type="text"
  placeholder="Enter Your Revenue Price Discounted"
  value={state.revenuepricediscounted}
  onChange={(e) =>
    dispatch({ type: "revenuepricediscounted", payload: e.target.value })
  }
/>

<FormLabel>Revenue Price Original</FormLabel>
<Input
  type="text"
  placeholder="Enter Your Revenue Price Original"
  value={state.revenuepriceoriginal}
  onChange={(e) =>
    dispatch({ type: "revenuepriceoriginal", payload: e.target.value })
  }
/>

<FormLabel>Revenue Distance</FormLabel>
<Input
  type="text"
  placeholder="Enter Your Revenue Distance"
  value={state.revenuedistance}
  onChange={(e) =>
    dispatch({ type: "revenuedistance", payload: e.target.value })
  }
/>

<FormLabel>Rating Text</FormLabel>
<Input
  type="text"
  placeholder="Enter Your Rating Text"
  value={state.ratingtext}
  onChange={(e) =>
    dispatch({ type: "ratingtext", payload: e.target.value })
  }
/>
        <Button type="submit" colorScheme="teal">
          SUBMIT
        </Button>
      </form>

      {submittedData.length ? (
        <Table variant="striped" colorScheme="teal" mt={4}>
          <Thead>
            <Tr>
              <Th>S.No</Th>
              <Th>Car Title</Th>
              <Th>Car Item</Th>
              <Th>Car Item2</Th>
              <Th>Car Item3</Th>
              <Th>Revenue Price Discounted</Th>
              <Th>Revenue Price Original</Th>
              <Th>Revenue Distance</Th>
              <Th>Rating Text</Th>
            </Tr>
          </Thead>
          <Tbody>
            {submittedData.map((item, index) => (
              <UserRow
                key={index}
                id={index + 1}
                car_title={item.car_title}
                caritem={item.caritem}
                caritem2={item.caritem2}
                caritem3={item.caritem3}
                revenuepricediscounted={item.revenuepricediscounted}
                revenuepriceoriginal={item.revenuepriceoriginal}
                revenuedistance={item.revenuedistance}
                ratingtext={item.ratingtext}
              />
            ))}
          </Tbody>
        </Table>
      ) : (
        <Text mt={4}>No users found</Text>
      )}
    </Box>
  );
}

export default Admin;
export { reducer, initialState };



