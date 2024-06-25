import { Link, useLoaderData, LoaderFunction } from "react-router-dom";

interface Project {
  title: string;
  slug: string;
  thumbnail: string;
}

const projectsAPI = import.meta.env.VITE_PROJECTS_API_URL;

export const projectsLoader: LoaderFunction = async () => {
  const response = await fetch(projectsAPI, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("failed to fetch Projects");
  }
  const projects: Project[] = await response.json();
  return projects;
};

export default function Projects() {
  const projects = useLoaderData() as Project[];
  return (
    <main>
      <h2 className="text-[20px] leading-[35px] border-b-[6px] border-b-black mb-[35px] font-medium mb-[35px]">
        Projects
      </h2>
      <ul className="">
        {projects.map((project: Project) => (
          <li
            key={project.title}
            className="mt-[40px] pb-[20px] border-b-[1px] border-b-black"
          >
            <Link
              to={`/projects/${project.slug}`}
              className="flex gap-x-[15px] items-center w-max pr-[15px] hover:opacity-80"
            >
              <img src={project.thumbnail} height="40" width="40" alt="" />
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
