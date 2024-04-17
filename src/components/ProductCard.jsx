import { Card, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function ProductCard({ nombre, genero, duracion, onClick }) {
  return (
    <Card bg={"#9DF223"} p={3} my={"7px"} border="1px solid #CCC" borderRadius="md" cursor="pointer" onClick={onClick}>
      <Heading fontSize="lg" fontWeight="bold" color="#333" mb={2}>
        {nombre}
      </Heading>
      <Text fontSize="md" color="#666" mb={1}>
        Género: {genero}
      </Text>
      <Text fontSize="sm" color="#999">
        Duración: {duracion}
      </Text>
    </Card>
  );
}

export default ProductCard;
