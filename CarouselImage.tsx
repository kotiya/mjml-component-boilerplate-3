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

const CarouselImage = () => {
  return (
    <Section>
      <Row>
        <Column>
          <Img src="your-image-url" alt="Image" />
        </Column>
      </Row>
    </Section>
  );
};

export default CarouselImage;
