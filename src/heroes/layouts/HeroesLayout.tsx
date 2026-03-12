import { Outlet } from "react-router"

export const HeroesLayout = () => {
  return (
    <div className="bg-blue-500">
        <Outlet />
    </div>
  )
}
