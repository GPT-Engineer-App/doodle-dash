// Complete the Index page component here
// Use chakra-ui
import { Box, Text, VStack, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { FaPencilAlt } from "react-icons/fa";

const Index = () => {
  const { colorMode, setColorMode } = useColorMode();
  const canvasRef = useRef(null);
  let isDrawing = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = "#000000";
    context.lineWidth = 2;

    const startDrawing = ({ nativeEvent }) => {
      const { offsetX, offsetY } = nativeEvent;
      context.beginPath();
      context.moveTo(offsetX, offsetY);
      isDrawing = true;
    };

    const draw = ({ nativeEvent }) => {
      if (!isDrawing) return;
      const { offsetX, offsetY } = nativeEvent;
      context.lineTo(offsetX, offsetY);
      context.stroke();
    };

    const stopDrawing = () => {
      isDrawing = false;
      context.closePath();
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseout", stopDrawing);
    };
  }, []);

  return (
    <VStack spacing={4} align="center" justify="center" height="100vh">
      <Box boxSize="sm" bg="white" border="2px" borderColor="gray.200">
        <canvas ref={canvasRef} id="drawingCanvas" width="500" height="500"></canvas>
      </Box>
      <input
        type="color"
        id="colorPicker"
        value="#000000"
        onChange={(e) => {
          const canvas = canvasRef.current;
          const context = canvas.getContext("2d");
          context.strokeStyle = e.target.value;
        }}
      />
      <Text fontSize="2xl" fontWeight="bold">
        Welcome to the Art Gallery <FaPencilAlt />
      </Text>
    </VStack>
  );
};

export default Index;
