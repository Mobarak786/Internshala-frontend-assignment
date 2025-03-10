import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">
                Communion
              </span>
            </Link>
          </div>
          <div className="flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }: { isActive: boolean }) =>
                `${
                  isActive
                    ? "inline-flex items-center px-1  text-sm font-medium text-sky-500"
                    : "inline-flex items-center px-1  text-sm font-medium text-gray-900"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }: { isActive: boolean }) =>
                `${
                  isActive
                    ? "inline-flex items-center px-1  text-sm font-medium text-sky-500"
                    : "inline-flex items-center px-1  text-sm font-medium text-gray-900"
                }`
              }
            >
              Events
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }: { isActive: boolean }) =>
                `${
                  isActive
                    ? "inline-flex items-center px-1  text-sm font-medium text-sky-500"
                    : "inline-flex items-center px-1  text-sm font-medium text-gray-900"
                }`
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
