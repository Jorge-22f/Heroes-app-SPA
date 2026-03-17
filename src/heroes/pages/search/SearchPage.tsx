import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busca a tus favoritos"
        description="Descubra y explore sus superhéroes y villanos favoritos"
      />

      <CustomBreadcrumbs
        currentPage="Buscador de héroes"
        // breadcrumbs={[
        //   { label: 'Home1', to: '/' },
        //   { label: 'Home2', to: '/' },
        //   { label: 'Home3', to: '/' },
        // ]}
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and seach */}
      <SearchControls />
    </>
  );
};

export default SearchPage;
