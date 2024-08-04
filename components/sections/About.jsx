import {
  GridItem,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { colors } from "../../theme";
import SectionContainer from "../SectionContainer";

const Bio = ({ secondary }) => (
  <GridItem>
    <VStack m="auto" w="75%" spacing="12px" pt="5%">
      <Text>
        Software engineer with over two years of hands-on experience in leading
        impactful projects focused on AI-driven solutions for
        <strong style={{ color: secondary }}>urban mobility</strong> and
        <strong style={{ color: secondary }}>environmental conservation</strong>
        .
      </Text>
      <Text>
        Proven track record in spearheading the development and deployment of
        flagship applications aimed at optimizing traffic management and
        enhancing user experiences.
      </Text>
      <Text>
        I enjoy creating scalable & modular web applications that have a real
        world impact.
      </Text>
    </VStack>
  </GridItem>
);

const Headshot = () => (
  <GridItem>
    <Image
      m="auto"
      src="/akash_cafe_pic.jpeg"
      alt="Akashdeep Singh"
      zIndex={1}
      className="image"
      onClick={() => {
        window.open("http://linkedin.com/in/akashdeep-singh-32a8a21b5/");
      }}
    />
  </GridItem>
);

export default function About() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  return (
    <SectionContainer
      id="about"
      name="about"
      headerMt="-5%"
      headerText="About Me"
      useHeaderStyle
    >
      <SimpleGrid
        pl="10%"
        pt="5%"
        pr="10%"
        spacing={12}
        columns={[1, null, 2]}
        justifyContent="center"
      >
        {shouldAlternate ? <Bio secondary={secondary} /> : <Headshot />}
        {shouldAlternate ? <Headshot /> : <Bio secondary={secondary} />}
      </SimpleGrid>
    </SectionContainer>
  );
}
