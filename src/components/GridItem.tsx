import NextLink from "next/link";
import { Box, Flex, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Global } from "@emotion/react";

interface ProjectGridItemProps {
  children: React.ReactNode;
  id: string;
  title: string;
  thumbnail: string;
}

interface GridItemProps {
  children: React.ReactNode;
  href: string;
  title: string;
  thumbnail: string;
}

export const GridItem = ({ children, href, title, thumbnail }: GridItemProps) => {
  <Flex w="100%" justify="center" textAlign="center">
    <LinkBox cursor="pointer">
      <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" loading="lazy" />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Flex>;
};

export const ProjectGridItem = ({ children, id, title, thumbnail }: ProjectGridItemProps) => {
  return (
    <Flex w="100%" justify="center" mb={6} textAlign="center">
      <NextLink href={{ pathname: `/projects/${id}` }}>
        <LinkBox cursor="pointer">
          <Image src={thumbnail} alt={title} width="1280" height="640" className="grid-item-thumbnail" />
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Flex>
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
