import { NavBarDemo } from "./components/nav";
import { TextBoxDemo } from "./components/textbox";
import { useRef, useState } from "react";

function App() {
  const darkTheme = localStorage.getItem("darkTheme") == "true";
  const [isDarkMode, setDarkMode] = useState<boolean>(darkTheme);
  const mainRef = useRef<HTMLElement>(null);

  if (isDarkMode) {
    if (mainRef.current?.classList.contains("dark") == false) {
      mainRef.current?.classList.add("dark");
    }
  } else {
    if (mainRef.current?.classList.contains("dark") == true) {
      mainRef.current?.classList.remove("dark");
    }
  }

  const handleDarkModeToggle = () => {
    const state = !isDarkMode;
    setDarkMode(state);
    localStorage.setItem("darkMode", state.toString());
  };

  return (
    <main
      ref={mainRef}
      className="flex h-screen w-full flex-col overflow-hidden"
    >
      <div className="flex h-full w-full flex-col items-center justify-start bg-primary-100 transition-all dark:bg-primary-800">
        <NavBarDemo />
        <section className="flex h-full w-full flex-col items-center justify-evenly">
          <TextBoxDemo />
        </section>
        <footer className="flex w-full flex-row justify-start p-4">
          <div
            className="flex cursor-pointer flex-row gap-4 rounded-lg bg-accent-400 p-4 shadow-lg transition-all dark:bg-accent-500"
            onClick={handleDarkModeToggle}
          >
            <div>Dark Mode</div>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
