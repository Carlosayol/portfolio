import styled from "@emotion/styled";
import { Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { AtSignIcon } from "@chakra-ui/icons";
import { IoHome } from "react-icons/io5";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
`;

const Logo = () => {
  return (
    <Link href="/">
      <LogoBox>
        <Icon as={IoHome} />
        <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          About
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
