import { useEffect, useState } from "react";

export default function useIsDesktop(breakpoint = 760) {
  const query = `(min-width: ${breakpoint}px)`;
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handleChange = (event) => setIsDesktop(event.matches);

    mql.addEventListener("change", handleChange);
    setIsDesktop(mql.matches);

    return () => mql.removeEventListener("change", handleChange);
  }, [query]);

  return isDesktop;
}
