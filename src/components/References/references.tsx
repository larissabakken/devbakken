import { Text, Avatar, Group, TypographyStylesProvider, Paper, useMantineTheme, rem } from '@mantine/core';
import classes from './references.module.css';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';

const data = [
  {
    user: 'Jacob Warnhalter',
    date: '10 minutes ago',
    title: 'Heroku vs Digital Ocean',
    content:
      'I use Heroku to host my Node.js application, but MongoDB add-on appears to be too expensive. I consider switching to Digital Ocean VPS to save some cash.',
  },
  {
    user: 'New User',
    date: '10 days ago',
    title: 'Heroku vs Digital Ocean',
    content:
      'I use Heroku to host my Node.js application, but MongoDB add-on appears to be too expensive. I consider switching to Digital Ocean VPS to save some cash.',
  },
  {
    user: 'Novo user',
    date: '10 years ago',
    title: 'Digital Ocean',
    content:
      'I use Heroku to host my Node.js application, but MongoDB add-on appears to be too expensive. I consider switching to Digital Ocean VPS to save some cash.',
  },
  {
    user: 'teste de user',
    date: '2 seconds ago',
    title: 'Ocean title',
    content:
      'I use Heroku to host my Node.js application, but MongoDB add-on appears to be too expensive. I consider switching to Digital Ocean VPS to save some cash.',
  },
];

export function References() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Paper withBorder radius="md" className={classes.comment}>
        <Group>
          <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png" alt="Jacob Warnhalter" radius="xl" />
          <div>
            <Text fz="sm">{item.user}</Text>
            <Text fz="xs" c="dimmed">
              {item.date}
            </Text>
          </div>
        </Group>
        <TypographyStylesProvider className={classes.body}>{item.content}</TypographyStylesProvider>
      </Paper>
    </Carousel.Slide>
  ));
  return (
    <Carousel slideSize={{ base: '100%', sm: '50%' }} slideGap={{ base: rem(2), sm: 'xl' }} align="start" slidesToScroll={mobile ? 1 : 2}>
      {slides}
    </Carousel>
  );
}
