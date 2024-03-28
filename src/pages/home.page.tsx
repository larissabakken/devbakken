import { Welcome } from '../components/Welcome/welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/colorSchemeToggle';
import { HeroBullets } from '../components/HeroBullets/heroBullets';
import { UserCard } from '../components/UserCard/userCard';
import { Experience } from '../components/Experience/experience';

export function HomePage() {
  return (
    <>
      <UserCard />
      <Welcome />
      <ColorSchemeToggle />
      <HeroBullets />
      <Experience />
    </>
  );
}
