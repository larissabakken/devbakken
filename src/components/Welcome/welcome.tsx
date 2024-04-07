import { Title, Text } from '@mantine/core';
import classes from './welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'pink', to: 'yellow' }}
        >
          DevBakken
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={900} mx="auto" mt="xl">
        Welcome to my portfolio! I'm an experienced full-stack developer with
        over 4 years of hands-on experience in web development. Passionate about
        problem-solving and innovation, I continuously seek out new challenges
        to enhance my skills and deliver exceptional software solutions.
      </Text>
    </>
  );
}
