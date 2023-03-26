import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Poppins } from "@next/font/google";

const nextFont = Poppins({
  weight: ["300", "700"],
  display: "swap",
  subsets: ["latin"],
});

const styles = {
  glogal: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("#E3B6CA", "#000F1A")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 6,
      },
    },
  },
  Link: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
  List: {
    baseStyle: (props: StyleFunctionProps) => ({
      item: {
        "&::marker": {
          color: mode("teal", "teal.200")(props),
        },
      },
    }),
  },
};

const fonts = {
  heading: nextFont.style.fontFamily,
};

const colors = {
  glassTeal: "#88ccca",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});

export default theme;
