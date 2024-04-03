"use client";
import clsx from "clsx";
import { useCallback, useEffect } from "react";
import { useCookies } from "react-cookie";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const TOGGLE_THEME_ID = "theme-toggle";

export function ToggleTheme() {
  const [cookies, setCookie] = useCookies(["theme"]);
  const isDarkMode = cookies.theme === "night";

  useEffect(() => {
    const theme = isDarkMode ? "night" : "corporate";
    const root = document.querySelector("html");
    if (root) {
      root.setAttribute("data-theme", theme);
    }
    setCookie("theme", theme);
  }, [isDarkMode, setCookie]);

  const toggleDarkMode = useCallback(() => {
    setCookie("theme", isDarkMode ? "corporate" : "night");
  }, [isDarkMode, setCookie]);

  return (
    <>
      <input
        className="invisible"
        id={TOGGLE_THEME_ID}
        name={TOGGLE_THEME_ID}
        type="checkbox"
        onChange={toggleDarkMode}
        checked={isDarkMode}
      />
      <label
        className={clsx(
          "cursor-pointer flex bordere w-10 h-10 border-opacity-10 border border-solid rounded-full items-center justify-center hover:bg-opacity-10",
          isDarkMode
            ? "border-neutral-200 hover:bg-neutral-100"
            : "border-base-300 hover:bg-base-300"
        )}
        htmlFor={TOGGLE_THEME_ID}
      >
        {isDarkMode ? (
          <MdOutlineDarkMode className="text-primary" size={22} />
        ) : (
          <MdOutlineLightMode className="text-primary" size={22} />
        )}
      </label>
    </>
  );
}
