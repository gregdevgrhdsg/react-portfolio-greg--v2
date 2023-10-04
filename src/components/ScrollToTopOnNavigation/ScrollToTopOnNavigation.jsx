import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopOnNavigation() {
  const { location,pathname } = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      // Défilement vers le haut uniquement pour la page d'accueil
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}
