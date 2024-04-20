import { Button, Input, Text, VStack, useColorMode, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack spacing={4} align="center" justify="center" height="100vh">
      <IconButton aria-label="Toggle dark mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} size="lg" isRound={true} alignSelf="flex-end" m={4} transition="all 0.3s ease" />
      <Input placeholder="Length of password" value={length} onChange={(e) => setLength(e.target.value)} type="number" />
      <Button colorScheme="blue" onClick={generatePassword}>
        Generate Password
      </Button>
      <Text fontSize="2xl" fontWeight="bold">
        Your Generated Password: {password}
      </Text>
    </VStack>
  );
};

export default Index;
