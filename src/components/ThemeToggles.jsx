import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        onChange={handleToggle}
        checked={theme === "dark"}
      />

      {/* sun icon */}
      <svg
        className="swap-on fill-current w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64 17.657l-1.414-1.414L4.222 16.243l1.414 1.414zm12.02-12.02l1.414-1.414L18.364 4.222l-1.414 1.414zM12 18a6 6 0 100-12 6 6 0 000 12zm0 4a1 1 0 011-1h-2a1 1 0 011 1zm0-20a1 1 0 011 1h-2a1 1 0 011-1zm10 10a1 1 0 01-1 1v-2a1 1 0 011 1zm-20 0a1 1 0 011 1v-2a1 1 0 01-1 1zm15.657 5.657l1.414 1.414-1.414-1.414zM4.222 4.222l1.414-1.414L4.222 4.222zm12.02 12.02l1.414 1.414-1.414-1.414zM5.64 6.343L4.222 4.929l1.414 1.414z" />
      </svg>

      {/* moon icon */}
      <svg
        className="swap-off fill-current w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.752 15.002A9.718 9.718 0 0112 22c-5.523 0-10-4.477-10-10 0-4.084 2.444-7.594 5.953-9.05a.75.75 0 01.91.316.75.75 0 01-.146.953A8.225 8.225 0 004.5 12c0 4.411 3.589 8 8 8 2.146 0 4.09-.844 5.576-2.221a.75.75 0 01.953-.147.75.75 0 01.316.91z" />
      </svg>
    </label>
  );
};

export default ThemeToggle;
