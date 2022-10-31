import type { NextPage } from "next";
import React from "react";
import { Flex } from "@components/Flex";
import Display from "@components/Display";
import Card from "@components/Card";
import Subheading from "@components/Subheading";
import Heading from "@components/Heading";
import Grid from "@components/Grid";
import { Article } from "@constants/types";

const Blog: NextPage = (props: any) => {
  console.log(props);
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        margin="48px 0px"
      >
        <Display>BLOG</Display>
        <Subheading>Musings of a software engineer.</Subheading>
      </Flex>
      <Flex>
        <Grid columns={3} gap={16}>
          {props.allArticles.data.map((blog: Article) => (
            <Card key={blog.id}>
              <Flex
                flexDirection="column"
                alignItems="center"
                padding="0"
                gap={16}
              >
                <Heading>{blog.attributes.title}</Heading>
                <Subheading textAlign="center">
                  {blog.attributes.description}
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
    let allArticles = Object;
    const res = await fetch("http://localhost:1337/api/articles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        allArticles = data;
      });
    return { props: { allArticles } };
  } catch (errorArticles) {
    return { props: { errorArticles } };
  }
}

export default Blog;
