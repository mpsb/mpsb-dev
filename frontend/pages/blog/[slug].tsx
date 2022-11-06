import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Body from "@components/Body";
import Display from "@components/Display";
import { Flex } from "@components/Flex";
import { getPostData } from "helpers";
import { Article } from "@constants/types";

export default function BlogPost(props: { postData: Article }) {
  console.log(props.postData);
  return (
    <>
      <Flex flexDirection="column" margin="48px 0px">
        <Display>{props.postData.attributes.title}</Display>
        <Body>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {props.postData.attributes.blocks[0].body}
          </ReactMarkdown>
        </Body>
      </Flex>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await fetch("http://localhost:1337/api/articles", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  const paths = posts.data.map((article: Article) => {
    return {
      params: { slug: article.attributes.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { slug: "" } }) {
  const postData = await getPostData({
    filters: {
      slug: context.params.slug,
    },
    populate: ["blocks"],
  });

  return {
    props: {
      postData: postData.data[0],
    },
  };
}
