import {
  Tabs,
  rem,
  ThemeIcon,
  Text,
  Container,
  SimpleGrid,
} from '@mantine/core';
import {
  IconBrowser,
  IconServerCog,
  IconDotsVertical,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandVite,
  IconBrandAngular,
  IconArtboard,
  IconBrandBootstrap,
  IconAtom,
  IconBrandReactNative,
  IconBrandHtml5,
  IconBrandTypescript,
  IconShoppingBag,
  IconBrandNodejs,
  IconCat,
  IconBrandPhp,
  IconBrandLaravel,
  IconBrandJavascript,
  IconBrandPrisma,
  IconBrandMysql,
  IconBrandMongodb,
  IconBrandDocker,
  IconBrandAws,
  IconGitFork,
  IconMessage,
  IconBulb,
  IconTransform,
  IconBooks,
  IconMoodNerd,
  IconLanguage,
} from '@tabler/icons-react';
import classes from './tech.module.css';

export const frontendData = [
  {
    icon: IconBrandReact,
    title: 'ReactJS',
  },
  {
    icon: IconBrandNextjs,
    title: 'NextJS',
  },
  {
    icon: IconBrandReactNative,
    title: 'React Native',
  },
  {
    icon: IconBrandVite,
    title: 'ViteJS',
  },
  {
    icon: IconBrandAngular,
    title: 'AngularJS',
  },
  {
    icon: IconAtom,
    title: 'Electron',
  },
  {
    icon: IconBrandTailwind,
    title: 'TailwindCSS',
  },
  {
    icon: IconArtboard,
    title: 'MaterialUI',
  },
  {
    icon: IconBrandBootstrap,
    title: 'Bootstrap',
  },
  {
    icon: IconBrandTypescript,
    title: 'Typescript, Javascript, Vanilla',
  },
  {
    icon: IconBrandHtml5,
    title: 'HTML5, CSS, Sass',
  },
  {
    icon: IconShoppingBag,
    title: 'Shopify, Vtex',
  },
  {
    icon: IconBrandDocker,
    title: 'Docker',
  },
  {
    icon: IconBrandAws,
    title: 'AWS Tools',
  },
  {
    icon: IconGitFork,
    title: 'Git, CI/CD',
  },
];

export const backendData = [
  {
    icon: IconBrandNodejs,
    title: 'NodeJS',
  },
  {
    icon: IconCat,
    title: 'NestsJS',
  },
  {
    icon: IconBrandJavascript,
    title: 'ExpressJS',
  },
  {
    icon: IconBrandJavascript,
    title: 'Fastify',
  },
  {
    icon: IconBrandPrisma,
    title: 'Prisma, TypeORM, Sequelize',
  },
  {
    icon: IconBrandPhp,
    title: 'PHP',
  },
  {
    icon: IconBrandLaravel,
    title: 'Laravel',
  },
  {
    icon: IconBrandMysql,
    title: 'MySQL, PostgreSQL, SQLite, SQL Server',
  },
  {
    icon: IconBrandMongodb,
    title: 'MongoDB, Redis',
  },
  {
    icon: IconBrandDocker,
    title: 'Docker',
  },
  {
    icon: IconBrandAws,
    title: 'AWS Tools',
  },
  {
    icon: IconGitFork,
    title: 'Git, CI/CD',
  },
];

export const softSkillsData = [
  {
    icon: IconMessage,
    title: 'Communication',
  },
  {
    icon: IconMoodNerd,
    title: 'Problem-Solving Abilities',
  },
  {
    icon: IconTransform,
    title: 'Adaptability',
  },
  {
    icon: IconTransform,
    title: 'Teamwork',
  },
  {
    icon: IconBooks,
    title: 'Continuous Learning',
  },
  {
    icon: IconBulb,
    title: 'Creativity',
  },
  {
    icon: IconLanguage,
    title: 'Portuguese - Native',
  },
  {
    icon: IconLanguage,
    title: 'English - Advanced',
  },
  {
    icon: IconLanguage,
    title: 'Norwegian - Basic',
  },
];

export interface FeatureProps {
  icon: any;
  title: string;
}

export function Feature({ icon: Icon, title }: FeatureProps) {
  return (
    <div className={classes.tech}>
      <ThemeIcon
        variant="gradient"
        gradient={{ from: 'yellow', to: 'pink' }}
        size={40}
        radius={40}
      >
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mx={6} my="auto" className={classes.techTitle}>
        {title}
      </Text>
    </div>
  );
}
export function Tech() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Container className={classes.wrapper} id="tech">
      <Text
        className={classes.title}
        inherit
        variant="gradient"
        gradient={{ from: 'pink', to: 'yellow' }}
      >
        Skills & Technologies
      </Text>

      <Container size={900} py={2}>
        <Text size="sm" className={classes.description}>
          I possess expertise across various technologies, encompassing both
          frontend and backend domains. While the following list showcases the
          key skills and technologies I excel in, it's important to note that I
          am continuously expanding my knowledge and eagerly embrace new
          opportunities for growth and learning.
        </Text>
      </Container>
      <Tabs color="orange" radius="xs" defaultValue="frontend" py={20}>
        <Tabs.List>
          <Tabs.Tab
            value="frontend"
            leftSection={<IconBrowser style={iconStyle} />}
          >
            Frontend
          </Tabs.Tab>
          <Tabs.Tab
            value="backend"
            leftSection={<IconServerCog style={iconStyle} />}
          >
            Backend
          </Tabs.Tab>
          <Tabs.Tab
            value="softskills"
            leftSection={<IconDotsVertical style={iconStyle} />}
          >
            Soft Skills
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="frontend">
          <SimpleGrid
            mt={20}
            cols={{ base: 1, sm: 2, md: 3 }}
            spacing={{ base: 'sm' }}
            verticalSpacing={{ base: 'lg' }}
          >
            {frontendData.map((feature, index) => (
              <Feature {...feature} key={index} />
            ))}
          </SimpleGrid>
        </Tabs.Panel>

        <Tabs.Panel value="backend">
          <SimpleGrid
            mt={20}
            cols={{ base: 1, sm: 2, md: 3 }}
            spacing={{ base: 'sm' }}
            verticalSpacing={{ base: 'lg' }}
          >
            {backendData.map((feature, index) => (
              <Feature {...feature} key={index} />
            ))}
          </SimpleGrid>
        </Tabs.Panel>
        <Tabs.Panel value="softskills">
          <SimpleGrid
            mt={20}
            cols={{ base: 1, sm: 2, md: 3 }}
            spacing={{ base: 'sm' }}
            verticalSpacing={{ base: 'lg' }}
          >
            {softSkillsData.map((feature, index) => (
              <Feature {...feature} key={index} />
            ))}
          </SimpleGrid>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}
