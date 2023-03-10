import { Box, FormControl, FormLabel, HStack, Input, Textarea, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMessage(value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };

  return (
    <Box>
      <form>
        <HStack mb={4}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              focusBorderColor={useColorModeValue("teal.600", "teal.200")}
              value={email}
              onChange={handleEmail}
              type="email"
              placeholder="Email Address"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input
              focusBorderColor={useColorModeValue("teal.600", "teal.200")}
              value={name}
              onChange={handleName}
              placeholder="Full Name"
            />
          </FormControl>
        </HStack>
        <FormControl isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            focusBorderColor={useColorModeValue("teal.600", "teal.200")}
            value={message}
            onChange={handleMessage}
            placeholder="Your Message"
          />
        </FormControl>
      </form>
    </Box>
  );
};

export default ContactForm;
