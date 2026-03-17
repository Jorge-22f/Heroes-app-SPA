import { Link, useLocation } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { cn } from '@/lib/utils';

export const CustomMenu = () => {

    const { pathname} = useLocation();

    const isActive = (path: string) => {
        return pathname === path;
    }

    // para clases dinamicas de tailwind usar la funcion cn() de shadcn

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild 
          className={cn(isActive('/') && 'bg-slate-200', 'rounded-md p-2')}
          >
            <Link to="/">Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* Search */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={cn(isActive('/seach') && 'bg-slate-200', 'rounded-md p-2')}>
            <Link to="/search">Buscar</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
