import { links } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="mt-[75px] pb-[50px] text-[13px]">
      This website was built with <br />
      <ul className="text-blue-800 underline">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
