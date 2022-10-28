import type { NextPage } from "next";
import React from "react";
import { Flex } from "@components/Flex";
import Display from "@components/Display";
import Subheading from "@components/Subheading";

const About: NextPage = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        margin="48px 0px"
      >
        <Display>WHO AM I?</Display>
        <Subheading>Hi there</Subheading>
      </Flex>
    </>
  );
};

export default About;
