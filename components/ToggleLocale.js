import React from "react";
import { useRouter } from "next/router";

export const ToggleLocale = () => {
  const { push, pathname, query, asPath } = useRouter();

  function switchLocale(nextLocale) {
    return () => push({ pathname, query }, asPath, { locale: nextLocale });
  }

  return (
    <nav>
      <button onClick={switchLocale("en")}>English</button>
      <button onClick={switchLocale("pt")}>Portuguese</button>
    </nav>
  );
};
