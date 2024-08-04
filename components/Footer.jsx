/* eslint-disable no-console */
import { Box, Link, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GoRepoForked, GoStar } from "react-icons/go";
import { animateScroll as scroll } from "react-scroll";

import links from "../data/footerLinks";
import LinkIconBar from "./LinkIconBar";

export default function Footer() {
  
  return (
    <Box as="footer" mt={12} height="100%" textAlign="center" className="app">
      
      <LinkIconBar links={links} />
    </Box>
  );
}
