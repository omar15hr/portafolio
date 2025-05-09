import { ReactNode } from "react";

interface ActionButtonProps {
  icon: ReactNode;
  label: string;
  href: string;
}

export function ActionButton({ icon, label, href }: ActionButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="inline-flex bg-blue-600 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white border text-md hover:bg-blue-800 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none cursor-pointer"
    >
      {icon} {label}
    </a>
  );
}
