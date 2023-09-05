import React, { useContext, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContextProvider";

function Login() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const { loginUser, authState } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          loginUser(res.token);
          navigate("/dashboard");
        }
        console.log(res.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" shadow="md">
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="teal"
          isLoading={isLoading}
          loadingText="Logging In"
        >
          Submit
        </Button>
      </form>
      <Text mt={2}>
        <Link as={RouterLink} to="/">
          Go Back
        </Link>
      </Text>
    </Box>
  );
}

export default Login;
