import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Flex } from "@components/Flex";
import Body from "@components/Body";
import Display from "@components/Display";
import Card from "@components/Card";
import Subheading from "@components/Subheading";
import Heading from "@components/Heading";
import Grid from "@components/Grid";
import { Article } from "@constants/types";
import { formatBlogPostDate } from "@helpers";

const Blog: NextPage = (props: any) => {
  const router = useRouter();

  props.allArticles.data.sort((a: Article, b: Article) => b.id - a.id);

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
        <Grid
          columns={3}
          gap={16}
          areas={`"featured-post featured-post secondary-post" "normal-post-2 normal-post-3 normal-post-3" "normal-post-4 normal-post-4 normal-post-4"`}
        >
          {props.allArticles.data.map((blog: Article, index: number) => (
            <Card
              key={blog.id}
              onClick={() => router.push(`/blog/${blog.attributes.slug}`)}
              className={
                index === 0
                  ? "featured-post"
                  : index === 1
                  ? "secondary-post"
                  : `normal-post-${index}`
              }
            >
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100%"
                padding="0"
                gap={16}
              >
                <Heading>{blog.attributes.title}</Heading>
                <Subheading textAlign="center">
                  {blog.attributes.description}
                </Subheading>
                <Body>{formatBlogPostDate(blog.attributes.createdDate)}</Body>
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
        allArticles = data;
      });
    return { props: { allArticles } };
  } catch (errorArticles) {
    return { props: { errorArticles } };
  }
}

export default Blog;
