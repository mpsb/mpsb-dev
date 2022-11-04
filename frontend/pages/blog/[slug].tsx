import { GetStaticPropsResult, NextPage } from "next";
import React from "react";
import Display from "@components/Display";
import { Flex } from "@components/Flex";
import { getAllPostIds, getPostData } from "helpers";
import { Article, BlogParams } from "@constants/types";

export default function BlogPost(props: { postData: Article }) {
  console.log(props.postData);
  return (
    <>
      <Flex>
        <Display>{props.postData.attributes.title}</Display>
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
      params: { slug: article.attributes.slug, id: article.id },
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
