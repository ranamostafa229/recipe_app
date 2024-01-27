import { useEffect } from "react";
import { useLocation } from "react-router-dom";

let savedPosition = 0;

function savePosition() {
  savedPosition = window.pageYOffset;
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    savePosition();
    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, savedPosition);
    };
  }, [pathname]);

  return null;
}
