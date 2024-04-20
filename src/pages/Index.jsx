// Complete the Index page component here
// Use chakra-ui
import { Box, Image, Text, VStack, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { FaPencilAlt } from "react-icons/fa";

const Index = () => {
  const { setColor } = useColorMode();
  return (
    <VStack spacing={4} align="center" justify="center" height="100vh">
      <Box boxSize="sm" bg="white" border="2px" borderColor="gray.200">
        <canvas id="drawingCanvas" width="500" height="500"></canvas>
      </Box>
      <input type="color" id="colorPicker" value="#000000" onChange={(e) => setColor(e.target.value)} />
      <Text fontSize="2xl" fontWeight="bold">
        Welcome to the Art Gallery <FaPencilAlt />
      </Text>
    </VStack>
  );
};

export default Index;
