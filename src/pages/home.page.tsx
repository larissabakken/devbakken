import { Welcome } from '../components/Welcome/welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/colorSchemeToggle';
import { HeroBullets } from '../components/HeroBullets/heroBullets';
import { UserCard } from '../components/UserCard/userCard';

export function HomePage() {
  return (
    <>
      <UserCard />
      <Welcome />
      <ColorSchemeToggle />
      <HeroBullets />
    </>
  );
}
