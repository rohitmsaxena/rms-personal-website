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
                <a
                  href="https://www.linkedin.com/in/rohitsaxena42/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.75 3a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 0 1 4.75 3zM3 8.25h3.5v12.5H3V8.25zM8.75 8.25H12v1.526c.534-.978 1.942-2.026 3.934-2.026 4.2 0 4.966 2.71 4.966 6.235v6.765h-3.5v-6.125c0-1.462-.026-3.34-2.05-3.34-2.053 0-2.37 1.605-2.37 3.22v6.245h-3.5V8.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {/*<span>My LinkedIn</span>*/}
                </a>
              </li>
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
