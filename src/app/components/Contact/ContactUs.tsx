import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  Container,
} from "@mantine/core";
import {
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled,
  IconBrandInstagram,
  IconBrandFacebookFilled,
  IconBrandTelegram,
} from "@tabler/icons-react";
import { ContactIconsList } from "./ContactIcons";
import classes from "./ContactUs.module.css";

const social = [
  IconBrandYoutubeFilled,
  IconBrandInstagram,
  IconBrandTelegram
];

function getLink(index: number): string {
  if (index === 0) {
    return "https://www.youtube.com/@the_disruptors_den";
  } else if (index === 1) {
    return "https://www.instagram.com/the_disruptors_den/";
  } else if (index === 2 ){
    return " https://t.me/disruptorsden"
  }
  return "";
}

export default function ContactUs() {
  const icons = social.map((Icon, index) => (
    <a href={getLink(index)} key={index}>
      <ActionIcon
        size={28}
        className={classes.social}
        variant="filled"
      >
        <Icon size="1.4rem" stroke={1.5} />
      </ActionIcon>
    </a>
  ));

  return (
    <div className="bg-[#F0F0E6]">
      <Container bg={"#F0F0E6"} className={classes.wrapper}>
        <Title className="leading-none text-center text-black mb-6 ">
          Contact us
        </Title>
        <SimpleGrid
          className="items-center mx-auto"
          cols={{ base: 1, sm: 2 }}
          spacing={50}
        >
          <div>
            <Text className={classes.description} mt="sm" mb={30}>
              Leave your email and we will get back to you within 24 hours
            </Text>

            <ContactIconsList />

            <Group mt="xl">{icons}</Group>
          </div>

          <form
            action="mailto:yohannestaye83@gmail.com"
            method="post"
            encType="text/plain"
            className={classes.form}
          >
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Your message"
              placeholder="I want to order your goods"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
          </form>
        </SimpleGrid>
        <div className="relative w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5333563357403!2d38.78365687531545!3d9.015013189207151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cbbae45717%3A0xb3bb275f1249acb5!2sALX%20Ethiopia%20%7CHayahulet%20Mazoria%20Hub%2C%206th%20Floor%7C!5e0!3m2!1sen!2set!4v1707655270320!5m2!1sen!2set"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute top-0 left-0 w-full h-full border:0"
          ></iframe>
        </div>
      </Container>
    </div>
  );
}
