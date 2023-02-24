import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle theme"
      color={useColorModeValue("whiteAlpha.900", "gray.800")}
      bgColor={useColorModeValue("gray.800", "whiteAlpha.900")}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
    ></IconButton>
  );
};

export default ThemeToggle;
