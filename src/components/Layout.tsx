import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-900 text-white p-5">
        <h1 className="text-xl font-bold">My Website</h1>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
