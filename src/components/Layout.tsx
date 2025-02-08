import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-base-100 z-50">
        <div className="navbar">
          <div className="flex-1">
            <a className="btn btn-ghost text-5xl">Rohit Saxena</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="#work-experience">Work Experience</a>
              </li>
              <li>
                <a href="cad">CAD</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#articles">Articles</a>
              </li>
              <li>
                <a>Contact Me!</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider with Direct Shadow */}
        <hr className="w-full border-t-8 border-accent shadow-md m-0 p-0" />
      </div>

      {/* Page Content (Push Content Below Sticky Header) */}
      <div className="pt-[5rem]">{children}</div>
    </>
  );
}
