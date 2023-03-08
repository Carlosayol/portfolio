import { chakra } from "@chakra-ui/react";
import Image from "next/image";

const ImageNext = chakra(Image, {
  baseStyle: { maxH: 96, maxW: 96 },
  shouldForwardProp: (prop) => ["width", "height", "src", "alt", "loading", "layout"].includes(prop),
});

export default ImageNext;
