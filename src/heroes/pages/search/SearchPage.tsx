import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from '@/heroes/components/HeroStats';

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda tus favoritos"
        description="Descubre, explora sus superhéroes y villanos favoritos"
      />

      {/* Stats Dashboard */}
      <HeroStats />
    </>
  );
};

export default SearchPage;
