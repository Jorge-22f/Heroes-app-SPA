import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Button } from "@/components/ui/button";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1 className="text-3xl font-bold underline">pagina principal</h1>
    <Button>Boton</Button>
    <h2 className="text-2xl font-semibold tracking-tight text-blue-600 border-b pb-2">
      Probando Configuración
    </h2>

    <p className="text-sm text-slate-500 italic">
      Si ves este texto azul y con borde, Tailwind está activo.
    </p>
  </StrictMode>,
);
