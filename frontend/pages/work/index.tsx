import type { NextPage } from "next";
import React from "react";
import { Flex } from "@components/Flex";
import Display from "@components/Display";
import Card from "@components/Card";
import Subheading from "@components/Subheading";
import Heading from "@components/Heading";
import Grid from "@components/Grid";
import { Work, WorkResponse } from "@constants/types";
import Image from "next/image";

const Works: NextPage = (props: any) => {
  props.allWorks.sort((a: Work, b: Work) => b.id - a.id);

  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        margin="48px 0px"
      >
        <Display>WORK</Display>
        <Subheading>Stuff I helped create / worked on.</Subheading>
      </Flex>
      <Flex>
        <Grid columns={1} gap={16}>
          {props.allWorks.map((work: Work) => (
            <Card
              key={`work-${work.id}`}
              onClick={() => window.open(`${work.attributes.link}`, "_blank")}
            >
              <Flex
                flexDirection="column"
                alignItems="center"
                padding="0"
                gap={16}
              >
                <Image
                  src={`http://localhost:1337${work.attributes.cover}`}
                  width={1045}
                  height={460}
                  objectFit="contain"
                  alt={`Image of project ${work.attributes.title}`}
                ></Image>
                <Heading>{work.attributes.title}</Heading>
                <Subheading textAlign="center">
                  {work.attributes.description}
                </Subheading>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export async function getServerSideProps() {
  try {
    let allWorks = Object;
    const res = await fetch("http://localhost:1337/api/works?populate=cover", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        allWorks = data.data.map((work: WorkResponse) => ({
          id: work.id,
          attributes: {
            title: work.attributes.title,
            description: work.attributes.description,
            link: work.attributes.link,
            category: work.attributes.category,
            cover: work.attributes.cover.data.attributes.url,
          },
        }));
      });
    return { props: { allWorks } };
  } catch (errorWorks) {
    return { props: { errorWorks } };
  }
}

export default Works;
