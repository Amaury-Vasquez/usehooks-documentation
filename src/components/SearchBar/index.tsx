"use client";
import { useOnClickOutside, useToggleMenu } from "@amvasdev/usehooks";
import clsx from "clsx";
import Link from "next/link";
import { ChangeEvent, useCallback, useMemo, useRef, useState } from "react";
import { MdOutlineClear, MdOutlineSearch } from "react-icons/md";
import { HOOKS } from "@/data/hooks";
import { splitStringSearch } from "@/utils/string";

const defineColor = (isFocused: boolean) =>
  isFocused ? "text-primary" : "text-secondary";

export function SearchBar() {
  const [isFocused, setFocus] = useState(false);
  const [value, setValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const handleValueChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  }, []);

  const clearSearch = useCallback(() => {
    setValue("");
    setFocus(false);
  }, [setFocus]);

  const searchResults = useMemo(
    () =>
      HOOKS.filter(
        (hook) => value && hook.toLowerCase().includes(value.toLowerCase())
      ),
    [value]
  );

  useOnClickOutside(ref, () => setFocus(false));

  return (
    <div className="relative w-80" ref={ref}>
      <label className="input input-bordered flex items-center gap-2 rounded-2xl">
        <MdOutlineSearch className={clsx("text-lg", defineColor(isFocused))} />
        <input
          className={clsx("w-full", defineColor(isFocused))}
          placeholder="Search Documentation"
          onFocus={() => setFocus(true)}
          value={value}
          onChange={handleValueChange}
        />
        <button className="rounded-full p-1 btn-ghost flex items-center justify-center">
          <MdOutlineClear
            className={clsx("text-lg", defineColor(isFocused))}
            onClick={clearSearch}
          />
        </button>
      </label>
      {isFocused && searchResults.length > 0 ? (
        <div className="w-full absolute shadow-md rounded-xl bg-base-100 top-14 left-0  flex flex-col p-0 m-0 overflow-hidden border border-solid border-neutral-content">
          {searchResults.map((hook, idx) => {
            const { start, higlighted, end } = splitStringSearch(hook, value);
            return (
              <Link
                key={hook + idx}
                href={`/${hook}`}
                className="p-4 text-secondary hover:bg-black hover:bg-opacity-5 w-full flex rounded-sm"
                onClick={clearSearch}
              >
                {start}
                <span className="text-primary">{higlighted}</span>
                {end}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
