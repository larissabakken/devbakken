import {
  Image,
  Container,
  Title,
  Text,
  List,
  ThemeIcon,
  Avatar,
  rem,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './heroBullets.module.css';

export function HeroBullets() {
  const image =
    'https://cdni.iconscout.com/illustration/premium/thumb/developer-4268348-3560991.png?f=webp';
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Hi, I'm <span className={classes.highlight}>Larissa Bakken</span>
            <br /> a Full Stack Developer.
          </Title>

          <Text c="dimmed" className={classes.innerSubtitle}>
            <Avatar src="./noflag.svg" alt="it's me" mr={8} radius="sm" />
            Living in Norway, Greater Oslo Region
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Profile:</b> Experienced full-stack developer with over 4 years
              of hands-on experience in web development. I am always eager to
              take on new challenges and continue to grow my skills as a
              software engineer.
            </List.Item>
            <List.Item>
              <b>Main Stacks:</b> Javascript || Typescript || NodeJs ||
              ExpressJS || NestJs || ReactJS || Nextjs
            </List.Item>
            <List.Item>
              <b>Education:</b> Uniceub - Software analysis and development ||
              IBM Fullstack Developer - Professional certificate guided by
              experts at IBM.
            </List.Item>
            <List.Item>
              <b>Languages</b> – I'm a Brazilian native, I'm fluent in
              Portuguese and English, and currently learning the Norwegian
              language.
            </List.Item>
            <List.Item>
              <b>Hackathoons</b> – When I'm not coding or exploring, you can
              find me participating in hackathons and unleashing my creativity!
            </List.Item>
            <List.Item>
              <b>Open To Work</b> – I'm currently looking for new opportunities.
            </List.Item>
          </List>
        </div>
        <Image src={image} className={classes.image} />
      </div>
    </Container>
  );
}
