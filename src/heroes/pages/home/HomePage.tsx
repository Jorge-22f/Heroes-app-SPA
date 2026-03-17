"use client";

import { useState } from "react";
import { Search, Zap, Shield, Heart } from "lucide-react";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeroGrid } from "@/heroes/components/HeroGrid";

interface Hero {
  id: string;
  name: string;
  alias: string;
  powers: string[];
  description: string;
  strength: number;
  team: string;
  image: string;
}

const initialHeroes: Hero[] = [
  {
    id: "1",
    name: "Clark Kent",
    alias: "Superman",
    powers: ["Super Strength", "Flight", "Heat Vision", "X-Ray Vision"],
    description:
      "The Last Son of Krypton, protector of Earth and symbol of hope.",
    strength: 10,
    team: "Justice League",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    name: "Bruce Wayne",
    alias: "Batman",
    powers: ["Martial Arts", "Detective Skills", "Advanced Technology"],
    description:
      "The Dark Knight of Gotham City, using fear as a weapon against crime.",
    strength: 8,
    team: "Justice League",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "3",
    name: "Diana Prince",
    alias: "Wonder Woman",
    powers: ["Super Strength", "Flight", "Lasso of Truth", "Combat Skills"],
    description:
      "Amazonian princess and warrior, champion of truth and justice.",
    strength: 9,
    team: "Justice League",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "4",
    name: "Barry Allen",
    alias: "The Flash",
    powers: ["Super Speed", "Time Travel", "Speed Force"],
    description: "The Fastest Man Alive, protector of Central City.",
    strength: 7,
    team: "Justice League",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "5",
    name: "Peter Parker",
    alias: "Spider-Man",
    powers: ["Wall Crawling", "Spider Sense", "Web Shooting", "Super Agility"],
    description:
      "Your friendly neighborhood Spider-Man, with great power comes great responsibility.",
    strength: 7,
    team: "Avengers",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "6",
    name: "Tony Stark",
    alias: "Iron Man",
    powers: ["Powered Armor", "Genius Intellect", "Advanced Technology"],
    description:
      "Billionaire genius inventor who uses his technology to protect the world.",
    strength: 8,
    team: "Avengers",
    image: "/placeholder.svg?height=200&width=200",
  },
];

export const HomePage = () => {
  const [heroes, setHeroes] = useState<Hero[]>(initialHeroes);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newHero, setNewHero] = useState<Omit<Hero, "id">>({
    name: "",
    alias: "",
    powers: [],
    description: "",
    strength: 5,
    team: "",
    image: "/placeholder.svg?height=200&width=200",
  });

  const filteredHeroes = heroes.filter(
    (hero) =>
      hero.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hero.alias.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hero.powers.some((power) =>
        power.toLowerCase().includes(searchTerm.toLowerCase()),
      ) ||
      hero.team.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleAddHero = () => {
    if (newHero.name && newHero.alias) {
      const hero: Hero = {
        ...newHero,
        id: Date.now().toString(),
        powers: newHero.powers.length > 0 ? newHero.powers : ["Unknown Power"],
      };
      setHeroes([...heroes, hero]);
      setNewHero({
        name: "",
        alias: "",
        powers: [],
        description: "",
        strength: 5,
        team: "",
        image: "/placeholder.svg?height=200&width=200",
      });
      setIsDialogOpen(false);
    }
  };

  const handlePowerInput = (powerString: string) => {
    const powers = powerString
      .split(",")
      .map((power) => power.trim())
      .filter((power) => power.length > 0);
    setNewHero({ ...newHero, powers });
  };

  const getStrengthColor = (strength: number) => {
    if (strength >= 9) return "text-red-500";
    if (strength >= 7) return "text-orange-500";
    if (strength >= 5) return "text-yellow-500";
    return "text-green-500";
  };

  const getStrengthIcon = (strength: number) => {
    if (strength >= 9) return <Zap className="h-4 w-4" />;
    if (strength >= 7) return <Shield className="h-4 w-4" />;
    return <Heart className="h-4 w-4" />;
  };

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de SuperHéroes"
          description="Descubre, explora sus superhéroes y villanos favoritos"
        />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes">Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains">Villains (2)</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Character Grid */}
        <HeroGrid />

        {/* No Results */}
        {filteredHeroes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No heroes found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms or add a new hero to the database.
            </p>
          </div>
        )}
      </>
    </>
  );
};
