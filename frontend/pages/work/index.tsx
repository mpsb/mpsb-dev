import type { NextPage } from "next";
import React from "react";
import { Flex } from "@components/Flex";
import Display from "@components/Display";
import Card from "@components/Card";
import Subheading from "@components/Subheading";
import Heading from "@components/Heading";
import Grid from "@components/Grid";

const Work: NextPage = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        margin="48px 0px"
      >
        <Display>WORK</Display>
        <Subheading>Stuff I helped create.</Subheading>
      </Flex>
      <Flex>
        <Grid columns={3} gap={16}>
          <Card>
            <Flex
              flexDirection="column"
              alignItems="center"
              padding="0"
              gap={16}
            >
              <Heading>Why you&apos;re not a 10x developer</Heading>
              <Subheading textAlign="center">
                So what do I do to become one then?
              </Subheading>
            </Flex>
          </Card>
          <Card>
            <Flex
              flexDirection="column"
              alignItems="center"
              padding="0"
              gap={16}
            >
              <Heading>
                Cybersecurity in Education is Probably Easy Money
              </Heading>
              <Subheading textAlign="center">
                Being a hero has never been this lucrative.
              </Subheading>
            </Flex>
          </Card>
          <Card>
            <Flex
              flexDirection="column"
              alignItems="center"
              padding="0"
              gap={16}
            >
              <Heading>Finding It Hard Getting a Job? Freelance.</Heading>
              <Subheading textAlign="center">
                Experience AND I get paid for it? Sign me up.
              </Subheading>
            </Flex>
          </Card>
        </Grid>
      </Flex>
    </>
  );
};

export default Work;
