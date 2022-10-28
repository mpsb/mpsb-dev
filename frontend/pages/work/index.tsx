import type { NextPage } from "next";
import React from "react";
import { Flex } from "@components/Flex";
import Display from "@components/Display";
import Subheading from "@components/Subheading";

const Work: NextPage = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        margin="48px 0px"
      >
        <Display>WORK</Display>
        <Subheading>Some stuff I created.</Subheading>
      </Flex>
    </>
  );
};

export default Work;
