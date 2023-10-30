import { Box, Divider, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
      <Flex
        as="footer"
        align="center"
        justify="space-around"
        direction="row"
        bg="gray.800"
        color="white"
        p={4}
      >
        {/* Column 1 */}
        <Box>
          <Text fontWeight="bold">Column 1</Text>
          <Divider border={'2px solid green'}/>
          <Text>Link 1</Text>
          <Text>Link 2</Text>
          <Text>Link 3</Text>
        </Box>
  
        {/* Column 2 */}
        <Box>
          <Text fontWeight="bold">Column 2</Text>
          <Divider border={'2px solid green'}/>
          <Text>Link 4</Text>
          <Text>Link 5</Text>
          <Text>Link 6</Text>
        </Box>
  
        {/* Column 3 */}
        <Box>
          <Text fontWeight="bold">Column 3</Text>
          <Divider border={'2px solid green'}/>
          <Text>Link 7</Text>
          <Text>Link 8</Text>
          <Text>Link 9</Text>
        </Box>
  
        {/* Column 4 */}
        <Box>
          <Text fontWeight="bold">Column 4</Text>
          <Divider border={'2px solid green'}/>
          <Text>Link 10</Text>
          <Text>Link 11</Text>
          <Text>Link 12</Text>
        </Box>
      </Flex>
    );
  };

  export default Footer;