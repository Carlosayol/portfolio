import Layout from "@/components/layouts/article";
import Paragraph from "@/components/paragraph";
import { Title } from "@/components/project";
import { Badge, Container } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="ReviewsFS">
      <Container mt={{ base: 4, md: 0 }}>
        <Title>
          Reviews FS <Badge>2016</Badge>
        </Title>
        <Paragraph>Lorem Ipsum</Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
