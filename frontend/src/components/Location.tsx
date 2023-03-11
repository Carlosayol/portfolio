import { AspectRatio, Box, Container, SimpleGrid, Text } from "@chakra-ui/react";

import Info from "./Info";

const Location = () => {
  return (
    <Box>
      <AspectRatio ratio={16 / 9}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15905.448813935309!2d-74.07039340901294!3d4.706987876312604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoSwgQm9nb3Rh!5e0!3m2!1sen!2sco!4v1678553031059!5m2!1sen!2sco"
          loading="lazy"
          allowFullScreen={false}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </AspectRatio>
      <SimpleGrid columns={2} spacing={10} my={4}>
        <Info title="phone" data="+57 302 4318825" />
        <Info title="email" data="carlosaolar@gmail.com" />
      </SimpleGrid>
    </Box>
  );
};

export default Location;
