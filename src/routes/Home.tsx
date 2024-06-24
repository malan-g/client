import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <nav className="flex flex-col gap-y-4 text-[20px]">
        <Link to="/about" className="underline hover:no-underline">
          About
        </Link>
        <Link to="/projects" className="underline hover:no-underline">
          Projects
        </Link>
      </nav>
    </main>
  );
}
