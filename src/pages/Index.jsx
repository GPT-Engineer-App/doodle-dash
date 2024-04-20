// Complete the Index page component here
// Use chakra-ui
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { FaPencilAlt } from "react-icons/fa";

const Index = () => {
  return (
    <VStack spacing={4} align="center" justify="center" height="100vh">
      <Box boxSize="sm">
        <Image src="https://images.unsplash.com/photo-1575995872537-3793d29d972c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkcmF3aW5nJTIwYXJ0fGVufDB8fHx8MTcxMzYzMzk3Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Drawing Art" />
      </Box>
      <Text fontSize="2xl" fontWeight="bold">
        Welcome to the Art Gallery <FaPencilAlt />
      </Text>
    </VStack>
  );
};

export default Index;
