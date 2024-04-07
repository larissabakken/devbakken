import {
  Image,
  Text,
  Container,
  ThemeIcon,
  SimpleGrid,
  Spoiler,
  Box,
  Badge,
} from '@mantine/core';
import classes from './experience.module.css';

const data = [
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1toPiNo3DRTPkdAttc4ObVV6xn7yVQxfwi7_wbExHqw&s',
    title: 'Full Stack Developer at iTalents',
    subtitle: 'March 2023 - Present',
    description:
      "As an iTalents employee, I fulfill a multifaceted role as a full stack developer. Beyond actively contributing to the development of internal projects, I serve as a reference point for junior team members. I'm involved in all phases of the software development lifecycle, from making architecture decisions to implementing and optimizing code. I conduct regular code reviews, aiming to ensure the quality and efficiency of our work. My responsibilities range from refactoring existing systems to building applications from scratch, utilizing a variety of technologies such as NextJS, NestJS, TypeScript, SQL, and Docker. I operate within an Agile Scrum methodology, utilizing Microsoft tools like Jira and Teams to manage projects and collaborate with the team. I'm constantly seeking ways to improve our processes and contribute to the success of our initiatives. This experience has provided me with significant professional growth in both technical skills and leadership/project management abilities.",
    stacks: [
      'TypeScript',
      'React',
      'NextJs',
      'Material-UI',
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'Docker',
      'AWS Tools',
      'Redis',
      'Git',
      'CI/CD',
      'Jira',
      'Confluence',
      'Agile Methodologies',
    ],
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppBu9O_YAdiuYB7w9BLL5xufv8igSbJV690ydTuLsqg&s',
    title: 'Frontend Developer at Codeby',
    subtitle: 'April 2022 - January 2023',
    description:
      'With a proven track record in managing diverse stores and applications, I bring valuable experience in direct client interaction and providing consultative support to teams. My skill set encompasses the utilization of advanced technologies such as Vtex (IO, CMS, and Faststore), Shopify, nextjs, and React.js. My foremost priority lies in delivering highly responsive and accessible solutions, complemented by a strong command of GraphQL for enhanced functionality.',
    stacks: [
      'React',
      'TypeScript',
      'NextJs',
      'Shopify',
      'Liquid',
      'GraphQL',
      'Vtex',
      'Git',
      'Slack',
      'Monday',
      'Agile Methodologies',
    ],
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDOwPKC295yy5UVlWQ4Ep--oXg0PyHZvgEMqXTwoT0Q&s',
    title: 'Full Stack Developer at Arcadis',
    subtitle: 'August 2021 - April 2022',
    description:
      "Throughout my tenure as a developer, I've been deeply immersed in projects within the environmental sector, where I've had the opportunity to employ a range of cutting-edge technologies. With a strong foundation in React, Express, TypeScript, and Vanilla, complemented by frameworks like Material UI, I've been instrumental in both building applications from scratch and providing ongoing maintenance. Additionally, I've seamlessly integrated Azure tools into our development workflow, facilitating efficient implementation and deployment processes. My role has extended beyond mere development tasks; I've been entrusted with leading the architectural design of projects, collaborating closely with cross-functional teams to define scope, establish technical requirements, and map out comprehensive development and deployment strategies. This holistic approach ensures that our solutions are not only innovative but also robust and scalable, effectively addressing critical environmental challenges.",
    stacks: [
      'React',
      'TypeScript',
      'JavaScript',
      'Styled Components',
      'Vanilla',
      'Material-UI',
      'PHP',
      'Laravel',
      'Node.js',
      'ExpressJS',
      'TypeORM',
      'Sequelize',
      'Sql Server',
      'MySQL',
      'Git',
      'Azure',
      'CI/CD',
      'Jira',
      'Agile Methodologies',
    ],
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/2219/2219609.png',
    title: 'Full Stack Developer as a freelancer',
    subtitle: 'December 2020 - July 2021',
    description:
      "As a seasoned freelancer, I've navigated through a diverse array of projects spanning various scales and complexities. My expertise encompasses a wide range of technology stacks, including React, React Native, PHP, MongoDB, SQL, and Vanilla, allowing me to tackle projects from conception to completion. Whether it's crafting bespoke solutions from scratch or providing meticulous maintenance, I thrive on the challenges of each assignment. My proficiency extends beyond mere development tasks; I've also delved into the realm of microservices architecture, seamlessly integrating disparate components to create cohesive and scalable systems. With a keen eye for efficiency, I excel in deployment strategies, ensuring seamless transitions from development to production environments.",
    stacks: [
      'TypeScript',
      'Javascript',
      'React Native',
      'React',
      'Material-UI',
      'Bootstrap',
      'PHP',
      'Laravel',
      'Node.js',
      'ExpressJS',
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'Git',
      'CI/CD',
      'Slack',
      'Monday',
      'Agile Methodologies',
    ],
  },
  {
    image:
      'https://play-lh.googleusercontent.com/ZnbITJtDlpOQYZ3gX31JSsGwh0Z-FOH_HxnvXN1CINYsROyQH7haU5TrG9Yr31mVe911',
    title: 'Full Stack Developer at Unyleya',
    subtitle: 'January 2020 - December 2020',
    description:
      "During my tenure as a full-stack developer in a prominent enterprise environment, I was immersed in the complexities of modernizing legacy systems within the higher education sector. Tasked with both building new functionalities and maintaining existing college systems, I navigated through a landscape defined by intricate business rules and diverse departmental requirements. A standout aspect of my role was my proficiency in managing legacy systems comprehensively, spanning from front-end interfaces to back-end logic and database management. This hands-on experience provided me with a profound understanding of these systems' nuances, enabling me to swiftly troubleshoot and resolve issues, ensuring uninterrupted operations.",
    stacks: [
      'Angular JS',
      'Bootstrap',
      'TypeScript',
      'Javascript',
      'React Native',
      'PHP',
      'Laravel',
      'Zend Framework',
      'Sql Server',
      'Git',
      'Jira',
      'Confluence',
      'Agile Methodologies',
    ],
  },
];

export function Experience() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon
        variant="light"
        className={classes.itemIcon}
        size={60}
        radius="md"
      >
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
            <Badge
              key={stack}
              variant="gradient"
              gradient={{ from: 'yellow', to: 'pink' }}
              p={12}
              m={4}
            >
              {stack}
            </Badge>
          ))}
        </Box>
      </div>
    </div>
  ));

  return (
    <Container size={1000} className={classes.wrapper} id="experiences">
      <Text
        className={classes.title}
        inherit
        variant="gradient"
        gradient={{ from: 'pink', to: 'yellow' }}
      >
        My Work Experience
      </Text>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          Over 4 years of experience in software development, I have worked with
          a variety of technologies and frameworks.
        </Text>
      </Container>

      <SimpleGrid cols={1} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
