import { Group, useMantineColorScheme, ActionIcon } from '@mantine/core';
import { IconMoonStars, IconSun, IconSunMoon } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="start" my="auto">
      <ActionIcon
        variant="light"
        color="orange"
        radius="lg"
        aria-label="Light theme"
        onClick={() => setColorScheme('light')}
      >
        <IconSun style={{ width: '70%', height: '70%' }} stroke={2.5} />
      </ActionIcon>
      <ActionIcon
        variant="light"
        color="blue"
        radius="lg"
        aria-label="Light theme"
        onClick={() => setColorScheme('dark')}
      >
        <IconMoonStars style={{ width: '70%', height: '70%' }} stroke={2.5} />
      </ActionIcon>
      <ActionIcon
        variant="light"
        color="green"
        radius="lg"
        aria-label="Light theme"
        onClick={() => setColorScheme('auto')}
      >
        <IconSunMoon style={{ width: '70%', height: '70%' }} stroke={2.5} />
      </ActionIcon>
    </Group>
  );
}
