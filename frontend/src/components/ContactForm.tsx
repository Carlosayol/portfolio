import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  email: string;
  name: string;
  message: string;
}

const ContactForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack mb={4}>
          <FormControl isRequired>
            <Input
              {...register("email")}
              focusBorderColor={useColorModeValue("teal.600", "teal.200")}
              type="email"
              placeholder="Email Address"
            />
          </FormControl>
          <FormControl>
            <Input
              {...register("name")}
              focusBorderColor={useColorModeValue("teal.600", "teal.200")}
              placeholder="Full Name"
              type="text"
            />
          </FormControl>
        </HStack>
        <FormControl isRequired mb={6}>
          <Textarea
            {...register("message")}
            focusBorderColor={useColorModeValue("teal.600", "teal.200")}
            placeholder="Your Message"
          />
        </FormControl>
        <Flex my={4} justifyContent="center">
          <Button type="submit" colorScheme="teal" rightIcon={<IoSend />}>
            Send Message
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default ContactForm;
