import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "@components/Navbar";
import { Flex } from "@components/Flex";
import Display from "@components/Display";
import Subheading from "@components/Subheading";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Flex justifyContent="space-between">
        <Flex flexDirection="column" justifyContent="center" padding="0">
          <Display>M.P. BILO</Display>
          <Subheading>
            front-end developer
            <br />
            with a passion for designing
            <br />
            beautiful user experiences.
          </Subheading>
        </Flex>
        <Image src="/pao-gif.gif" width={770} height={780} alt="hero image" />
      </Flex>
    </>
  );
};

export default Home;
