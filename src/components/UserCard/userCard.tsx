import { Card, Avatar, Text, Group, Box } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconDownload,
} from '@tabler/icons-react';
import classes from './userCard.module.css';
import { Link } from 'react-router-dom';

const infos = [
  {
    value: <IconBrandGithub />,
    label: 'Github',
    link: 'https://github.com/larissabakken/',
  },
  {
    value: <IconBrandLinkedin />,
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/larissabakken/',
  },
  {
    value: <IconMail />,
    label: 'Email',
    link: 'mailto:larissabakken@gmail.com',
  },
  { value: <IconDownload />, label: 'Resume', link: './resume' },
];

export function UserCard() {
  return (
    <Card withBorder radius="md" className={classes.card} id="about">
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
        {infos.map((info) => (
          <div key={info.label}>
            <Link to={info.link} className={classes.link}>
              <Text ta="center" fz="lg" fw={500}>
                {info.value}
              </Text>
              <Text ta="center" fz="sm" c="dimmed" lh={1}>
                {info.label}
              </Text>
            </Link>
          </div>
        ))}
      </Group>
    </Card>
  );
}
