import React from "react";
import { Box, Flex, Text, Button, Stack, HStack, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineShopping } from "react-icons/ai"; // Modifica esta línea

const Navbar = () => {
  const NAV_ITEMS = [
    {
      label: "Home",
      href: "/",
      icon: AiOutlineHome,
    },
    {
      label: "Acerca De",
      href: "/about",
      icon: AiOutlineInfoCircle,
    },
    {
      label: "Productos",
      href: "/products",
      icon: AiOutlineShopping,
    },
  ];

  return (
    <Box>
      <Flex bg={"red.900"} color={"white"} py={2} px={4} align={"center"}>
        <Flex flex={1} justify={"start"}>
          <Text
            textAlign={{ base: "center", md: "left" }}
            color={"white"}
            fontSize="xl"
            fontWeight="bold"
          >
            City Market
          </Text>
          <Flex display={"flex"} ml={10}>
            <DesktopNav NAV_ITEMS={NAV_ITEMS} />
          </Flex>
        </Flex>
        <HStack justify={"flex-end"} spacing={6}>
          <Button
            as={NavLink}
            to={"/signin"}
            fontSize={"sm"}
            color={"white"}
            fontWeight={400}
            variant={"link"}
          >
            Sign In
          </Button>
          <Button
            as={NavLink}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"blue.500"}
            to={"/signup"}
            _hover={{
              bg: "blue.200",
            }}
          >
            Sign Up
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

const DesktopNav = ({ NAV_ITEMS }) => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <NavLink
            to={navItem.href ?? "#"}
            style={({ isActive }) =>
              isActive
                ? {
                    padding: "8px",
                    fontSize: "sm",
                    fontWeight: 800,
                    color: "white",
                  }
                : {
                    padding: "8px",
                    fontSize: "sm",
                    fontWeight: 200,
                    color: "white",
                  }
            }
          >
            <Flex alignItems="center">
              <Icon as={navItem.icon} mr={2} />
              {navItem.label}
            </Flex>
          </NavLink>
        </Box>
      ))}
    </Stack>
  );
};

export default Navbar;
