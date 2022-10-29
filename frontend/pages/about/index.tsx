import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { Flex } from "@components/Flex";
import Display from "@components/Display";
import Subheading from "@components/Subheading";

const About: NextPage = () => {
  return (
    <>
      <Flex justifyContent="space-between" margin="48px 0px">
        <Flex flexDirection="column" justifyContent="flex-start" padding="0">
          <Display>WHO AM I?</Display>
          <Subheading>Hi there</Subheading>
        </Flex>
        <Image
          src="/dp.jpg"
          width={770}
          height={780}
          objectFit="contain"
          alt="Matthew's profile image"
        />
      </Flex>
    </>
  );
};

export default About;
