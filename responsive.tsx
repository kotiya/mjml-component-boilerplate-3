import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Section,
  Column,
  Text,
} from "@react-email/components";

export function ResponsiveEmail(props) {
  return (
    <Html>
      <Head>
        <Preview>Hello MJML</Preview>
      </Head>
      <Body>
        <Section>
          <Column>
            <Text>Hello World!</Text>
          </Column>
        </Section>
      </Body>
    </Html>
  );
}

export default ResponsiveEmail;
