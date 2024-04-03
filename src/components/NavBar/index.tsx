import clsx from "clsx";
import Link from "next/link";
import { SearchBar } from "../SearchBar";
import { ToggleTheme } from "../ToggleTheme";

export interface NavBarProps {}

export function NavBar() {
  return (
    <nav
      className={clsx(
        "flex w-full items-center justify-between border-b border-solid border-base-200 p-4"
      )}
    >
      <Link
        href="/"
        className="font-medium text-sm italic text-center flex items-center gap-2"
      >
        @amvasdev/usehooks
      </Link>
      <div className="flex gap-8 items-center">
        <ToggleTheme />
        <SearchBar />
      </div>
    </nav>
  );
}
