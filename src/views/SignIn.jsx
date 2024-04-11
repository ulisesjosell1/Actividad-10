import React from 'react';
import { Box, Input, Button, Card } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  return (
    <Box
      px={30}
      backgroundImage="url('https://source.unsplash.com/random')"
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Card bg="#ffffff" p={5}>
        <Input placeholder="Usuario" mb={3} />
        <Input type="password" placeholder="Contraseña" mb={3} />
        <Button bg="#450068" color="#ffffff" onClick={() => navigate("/")}>
          Iniciar sesión
        </Button>
      </Card>
    </Box>
  );
}

export default SignIn; // Asegúrate de tener esta línea para exportar SignIn como el componente predeterminado

