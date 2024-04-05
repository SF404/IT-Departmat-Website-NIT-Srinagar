import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
    dancing: `'Dancing Script', cursive`,
    indie: `'Indie Flower', cursive`,
    exo: `'Exo', sans-serif`


  },
  colors: {
    primary: 'rgb(25, 46, 89)',
    secondary: {
      50: "#ebedf7",
      100: "#d8dcf0",
      200: "#c5cae8",
      300: "#b2b9e1",
      400: "#9fa8da",
      500: "#8b96d2",
      600: "#7885cb",
      700: "#6573c3",
      800: "#5262bc",
      900: "#3f51b5",
    },
    background: "rgb(241, 242, 246)",
  },
  components: {
    Button: {
      variants: {
        navbar: {
          fontWeight: "normal", 
          fontSize: '15px',
          color: "whitesmoke",
          bg: "transparent",
          _hover: {
            bg: "rgba(255, 255, 255, 0.03)",
          },
        },
      },
    },
    Menu: {
      baseStyle: {
        item: {
          _hover: {
            bg: "primary",
            color: "white",
          },
        },
        list: {
          boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.2)",
          marginTop: '8px',
          border: "none",
          // padding: 0,
          fontSize: '15px',
        },
      },
    },

  },
  // styles: {
  //   global: {
  //     '*::-webkit-scrollbar': {
  //       width: '10px',
  //     },
  //     // Hide scrollbar for IE, Edge and Firefox
  //     '*': {
  //       // scrollbarWidth: 'none',
  //       // '-ms-overflow-style': 'none',
  //     },
  //   },
  // },
});

export default theme;
