import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Flex } from "@components/Flex";
import Display from "@components/Display";
import Subheading from "@components/Subheading";
import Button from "@components/Button";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Flex justifyContent="space-between" margin="48px 0px">
        <Flex
          flexDirection="column"
          justifyContent="center"
          padding="0px 8px 0px 0px"
        >
          <Display>M.P. BILO</Display>
          <Subheading>
            front-end developer
            <br />
            with a passion for designing
            <br />
            beautiful user experiences.
          </Subheading>
          <Flex gap={8} padding="0" margin="32px 0px">
            <Button buttonType="primary" onClick={() => router.push("/about")}>
              who you?
            </Button>
            <Button buttonType="secondary" onClick={() => router.push("/work")}>
              you did what?
            </Button>
          </Flex>
        </Flex>
        <Image
          src="/pao-gif.gif"
          width={770}
          height={780}
          objectFit="contain"
          alt="hero image"
        />
      </Flex>
    </>
  );
};

export default Home;
