export default function Layout() {
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className={"btn btn-ghost text-5xl"}>Rohit Saxena</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Work Experience</a>
          </li>
          <li>
            <a>CAD</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Articles</a>
          </li>
          <li>
            <a>Contact Me!</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
