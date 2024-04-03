import { ReactNode } from "react";
import Link from "next/link";
import { HOOKS } from "@/data/hooks";

export default function HookPageLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="max-w-6xl m-auto flex items-start">
      <ul className="w-fit min-w-full md:min-w-80 min-h-svh flex flex-col border-r border-solid border-base-200 p-0 m-0 gap-2 py-2">
        {HOOKS.map((hook, idx) => (
          <li key={hook + idx} className="w-full px-4 m-0 flex">
            <Link
              className="w-full text-right border-b hover:bg-black hover:bg-opacity-5 border-solid border-neutral-content py-4 px-4 rounded-md shadow-sm text-secondary font-medium"
              href={`/${hook}`}
            >
              {hook}
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
