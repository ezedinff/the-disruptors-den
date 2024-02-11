import HeroSvg from "../../../../public/svg/hero-section-img.svg";
import Image from "next/image";
import underline from "../../../../public/svg/underline.svg";
import vector from "../../../../public/svg/vector1.svg";
import { Overlay, Container, Title, Button, Text } from '@mantine/core';
import classes from './HeroContentLeft.module.css';

export default function Hero() {
  return (
    <div className={classes.hero}>
      <Container className={classes.container} size="md">
        <Title className={classes.title}>The choice community for entrepreneurs 
and aspiring ones</Title>
        <Text className={classes.description} size="xl" mt="xl">
        Connect online and in-person, find opportunities, learn, collaborate and grow with a community of people just like you.
        </Text>

        <Button variant="filled" c={'green'} size="xl" radius="xl" className={classes.control}>
          Get started
        </Button>
      </Container>
    </div>
  );
}