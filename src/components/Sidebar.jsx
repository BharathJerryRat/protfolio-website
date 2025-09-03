import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Education", "/education"],
    ["Skills", "/skills"],
    ["Projects", "/projects"],
    ["Achievements", "/achievements"],
    ["Contact", "/contact"],
  ];

  return (
    <aside className="w-72 sticky top-8 glass p-6 rounded-2xl shadow-lg h-fit">
      <div className="flex flex-col items-center">
        {/* Rotated Avatar (90 degrees) */}
        <img
          src="/images/avatar-dark.JPG"
          alt="Avatar"
          className="w-32 h-32 rounded-full border-2 border-white shadow-md 
                     transform rotate-90 hover:rotate-0 transition-transform duration-500"
        />

        <h3 className="mt-4 text-xl font-bold">Bharath S</h3>
        <p className="text-sm text-muted">Full-Stack Developer</p>
        <a
          href="mailto:bharathsenthil567@gmail.com"
          className="btn-gradient mt-4 text-sm"
        >
          Hire Me
        </a>
      </div>

      {/* Navigation */}
      <nav className="mt-6 space-y-2">
        {links.map(([label, to]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              "block px-3 py-2 rounded-md " +
              (isActive ? "bg-surface font-semibold" : "hover:bg-surface/60")
            }
          >
            <span className="nav-underline">{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Contact Info */}
      <div className="mt-6 text-sm text-muted text-center">
        <p>📧 bharathsenthil567@gmail.com</p>
        <p>📱 +91 9994598497</p>
        <p className="mt-2 text-xs text-gray-400">
          19, Ramaswamy St, Peddur PO, Tirupattur - 635701
        </p>
      </div>
    </aside>
  );
}
