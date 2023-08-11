import React from "react";
import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const AccordionText = () => {
  return (
    <Container>
      <Section>
        <Row>
          <Column>
            <Text>{/* Your accordion text content goes here */}</Text>
          </Column>
        </Row>
      </Section>
    </Container>
  );
};

export default AccordionText;
