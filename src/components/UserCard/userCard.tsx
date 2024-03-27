import { Card, Avatar, Text, Group, Box, NavLink, SimpleGrid } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconDownload } from '@tabler/icons-react';
import classes from './userCard.module.css';

const stats = [
  { value: <IconBrandGithub />, label: 'Github' },
  { value: <IconBrandLinkedin />, label: 'Linkedin' },
  { value: <IconMail />, label: 'Email' },
  { value: <IconDownload />, label: 'Resume' },
];

export function UserCard() {
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" lh={1}>
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section
        h={150}
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)',
        }}
      />
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
        size={170}
        radius={90}
        mx="auto"
        mt={-120}
        className={classes.avatar}
      />
      <Box ta="start">
        <Text ta="center" fz="xl" fw={500}>
          Larissa Bakken
        </Text>
        <Text ta="center" fz="lg" c="dimmed">
          Fullstack Engineer
        </Text>
      </Box>

      <Group mt="md" justify="center" gap={30}>
        {items}
      </Group>
    </Card>
  );
}
