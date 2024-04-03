import { Tabs, rem, ThemeIcon, Text, Title, Container, SimpleGrid } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings, IconGauge, IconCookie, IconUser, IconMessage2, IconLock } from '@tabler/icons-react';
import classes from './tech.module.css';
export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Extreme performance',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
  },
  {
    icon: IconUser,
    title: 'Privacy focused',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
  },
  {
    icon: IconCookie,
    title: 'No third parties',
    description: 'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
  },
  {
    icon: IconLock,
    title: 'Secure by default',
    description: 'Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right',
  },
  {
    icon: IconMessage2,
    title: '24/7 Support',
    description: 'Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail',
  },
];

export function Feature({ icon: Icon, title, description }: never) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}
export function Tech() {
  const iconStyle = { width: rem(12), height: rem(12) };
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Integrate effortlessly with any technology stack</Title>

      <Container size={560} py={2}>
        <Text size="sm" className={classes.description}>
          Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon.
        </Text>
      </Container>
      <Tabs color="orange" radius="xs" defaultValue="frontend" py={20}>
        <Tabs.List>
          <Tabs.Tab value="frontend" leftSection={<IconPhoto style={iconStyle} />}>
            Frontend
          </Tabs.Tab>
          <Tabs.Tab value="backend" leftSection={<IconMessageCircle style={iconStyle} />}>
            Backend
          </Tabs.Tab>
          <Tabs.Tab value="softskills" leftSection={<IconSettings style={iconStyle} />}>
            Soft Skills
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="frontend">
          <SimpleGrid mt={60} cols={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 'xl', md: 50 }} verticalSpacing={{ base: 'xl', md: 50 }}>
            {features}
          </SimpleGrid>
        </Tabs.Panel>

        <Tabs.Panel value="backend">Messages tab content</Tabs.Panel>

        <Tabs.Panel value="softskills">Settings tab content</Tabs.Panel>
      </Tabs>
    </Container>
  );
}
