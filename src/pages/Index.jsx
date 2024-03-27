import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Login
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Login
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Index;
