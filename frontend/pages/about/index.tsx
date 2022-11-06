import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Flex } from "@components/Flex";
import Display from "@components/Display";
import Subheading from "@components/Subheading";

const StyledImage = styled(Image)`
  filter: grayscale(1);
  transition: 0.2s ease;

  :hover {
    filter: grayscale(0);
  }
`;

const StyledImageContainer = styled.div`
  border: 2px solid black !important;
  transition: 0.2s ease;

  :hover {
    transform: perspective(200px) translateZ(5px);
    -webkit-box-shadow: 0px 5px 5px 1px #c8c8c8;
    box-shadow: 0px 5px 5px 1px #c8c8c8;
    cursor: pointer;
  }
`;

const About: NextPage = () => {
  return (
    <>
      <Flex justifyContent="space-between" margin="48px 0px">
        <Flex flexDirection="column" justifyContent="flex-start" padding="0">
          <Display>WHO AM I?</Display>
          <Subheading>Hi there</Subheading>
        </Flex>
        <StyledImageContainer>
          <StyledImage
            src="/dp.jpg"
            width={770}
            height={780}
            objectFit="cover"
            alt="Matthew's profile image"
          />
        </StyledImageContainer>
      </Flex>
    </>
  );
};

export default About;
