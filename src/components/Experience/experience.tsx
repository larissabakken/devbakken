import { Image, Text, Container, ThemeIcon, Title, SimpleGrid, Spoiler, Box, Badge } from '@mantine/core';
import classes from './experience.module.css';

const data = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1toPiNo3DRTPkdAttc4ObVV6xn7yVQxfwi7_wbExHqw&s',
    title: 'Full Stack Developer at iTalents',
    subtitle: 'March 2023 - Present',
    description:
      'Azurill can be seen bouncing and playing on its big, rubbery tail Azurill can be seen bouncing and playing on its big, rubbery tail Azurill can be seen bouncing and playing on its big, rubbery tail Azurill can be seen bouncing and playing on its big, rubbery tail',
    stacks: ['React', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'NextJs', 'Docker', 'AWS'],
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1toPiNo3DRTPkdAttc4ObVV6xn7yVQxfwi7_wbExHqw&s',
    title: 'Full Stack Developer at iTalents',
    subtitle: 'March 2023 - Present',
    description:
      'Azurill can be seen bouncing and playing on its big, rubbery tail Azurill can be seen bouncing and playing on its big, rubbery tail Azurill can be seen bouncing and playing on its big, rubbery tail Azurill can be seen bouncing and playing on its big, rubbery tail',
    stacks: ['React', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'NextJs', 'Docker', 'AWS'],
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1toPiNo3DRTPkdAttc4ObVV6xn7yVQxfwi7_wbExHqw&s',
    title: 'Full Stack Developer at iTalents',
    subtitle: 'March 2023 - Present',
    description:
      'Azurill can be seen bouncing and playing on its big, rubbery tail Azurill can be seen bouncing and playing on its big, rubbery tail Azurill can be seen bouncing and playing on its big, rubbery tail Azurill can be seen bouncing and playing on its big, rubbery tail',
    stacks: ['React', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'NextJs', 'Docker', 'AWS'],
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1toPiNo3DRTPkdAttc4ObVV6xn7yVQxfwi7_wbExHqw&s',
    title: 'Full Stack Developer at iTalents',
    subtitle: 'March 2023 - Present',
    description:
      'Azurill can be seen bouncing and playing on its big, rubbery tail Azurill can be seen bouncing and playing on its big, rubbery tail Azurill can be seen bouncing and playing on its big, rubbery tail Azurill can be seen bouncing and playing on its big, rubbery tail',
    stacks: ['React', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'NextJs', 'Docker', 'AWS'],
  },
];

export function Experience() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
        <Image src={item.image} />
      </ThemeIcon>

      <div>
        <Text fw={700}>{item.title}</Text>
        <Text c="dimmed" className={classes.itemSubTitle}>
          {item.subtitle}
        </Text>

        <Spoiler maxHeight={50} showLabel="Show more" hideLabel="Hide">
          {item.description}
        </Spoiler>

        <Box mt={10}>
          {item.stacks?.map((stack) => (
            <Badge key={stack} color="pink" mx={2}>
              {stack}
            </Badge>
          ))}
        </Box>
      </div>
    </div>
  ));

  return (
    <Container size={1000} className={classes.wrapper}>
      <Text className={classes.supTitle}>Experiences</Text>

      <Title className={classes.title} order={2}>
        My Work Experience
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          Over 4 years of experience in software development, I have worked with a variety of technologies and frameworks.
        </Text>
      </Container>

      <SimpleGrid cols={1} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
