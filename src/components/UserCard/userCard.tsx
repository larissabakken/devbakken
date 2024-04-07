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
  { value: <IconDownload />, label: 'Resume', link: './resume.pdf' },
];

export function UserCard() {
  return (
    <Card withBorder radius="md" className={classes.card} id="about">
      <Card.Section
        h={200}
        style={{
          backgroundImage: 'url(./bg.png)',
        }}
      />
      <Avatar
        src="./profile.jpeg"
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
          Software Engineer - Greater Oslo Region, Norway
        </Text>
      </Box>

      <Group mt="md" justify="center" gap={30}>
        {infos.map((info) => (
          <div key={info.label}>
            {info.label === 'Resume' ? (
              <a
                href={info.link}
                className={classes.link}
                target="_blank"
                download
              >
                <Text ta="center" fz="lg" fw={500}>
                  {info.value}
                </Text>
                <Text ta="center" fz="sm" c="dimmed" lh={1}>
                  {info.label}
                </Text>
              </a>
            ) : (
              <Link to={info.link} className={classes.link} target="_blank">
                <Text ta="center" fz="lg" fw={500}>
                  {info.value}
                </Text>
                <Text ta="center" fz="sm" c="dimmed" lh={1}>
                  {info.label}
                </Text>
              </Link>
            )}
          </div>
        ))}
      </Group>
    </Card>
  );
}
