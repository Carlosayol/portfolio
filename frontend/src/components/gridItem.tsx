import NextLink from "next/link";
import { Box, Flex, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Global } from "@emotion/react";

export const GridItem = ({ children, href, title, thumbnail }) => {
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" loading="lazy" />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>;
};

export const ProjectGridItem = ({ children, id, title, thumbnail }) => {
  return (
    <Box w="100%" align="center" mb={6}>
      <NextLink href={`/projects/${id}`}>
        <LinkBox cursor="pointer">
          <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" />
          <LinkOverlay href={`/projects/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  );
};

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
