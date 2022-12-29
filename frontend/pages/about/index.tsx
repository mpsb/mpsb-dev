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
        <Display>THE PART-TIME CTO</Display>
        <Subheading>
          <br></br>
          <i>The Part-time CTO</i> is a podcast series about my personal journey
          of entrepreneurship. It aims to bring authenticity to modern ambition,
          in a world where overnight successes are celebrated.<br></br>
          <br></br>When I&apos;m not obsessing over that, I&apos;m hanging out
          with friends / family, working out in the gym, playing basketball /
          flag football, or reading books that pique my curiosity.
          <br></br> <br></br>
          You can check out my podcast episodes here:
        </Subheading>
      </Flex>
    </>
  );
};

export default About;
