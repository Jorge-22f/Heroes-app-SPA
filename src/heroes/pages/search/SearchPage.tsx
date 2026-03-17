import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda tus favoritos"
        description="Descubre, explora sus superhéroes y villanos favoritos"
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and seach */}
      <SearchControls />
    </>
  );
};

export default SearchPage;
