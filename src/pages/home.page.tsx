import { Welcome } from '../components/Welcome/welcome';
import { HeroBullets } from '../components/HeroBullets/heroBullets';
import { UserCard } from '../components/UserCard/userCard';
import { Experience } from '../components/Experience/experience';
import { References } from '../components/References/references';
import { Tech } from '../components/Tech/tech';

export function HomePage() {
  return (
    <>
      <UserCard />
      <Welcome />
      <HeroBullets />
      <Tech />
      <Experience />
      <References />
    </>
  );
}
