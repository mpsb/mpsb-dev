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
        <Subheading>
          <br></br>
          Obsessed about beautiful and performant front-end design +
          development.<br></br>
          <br></br>When I&apos;m not obsessing over that, I&apos;m hanging out
          with friends / family, working out in the gym, playing basketball /
          flag football, or reading books that pique my curiosity.
        </Subheading>
      </Flex>
    </>
  );
};

export default About;
