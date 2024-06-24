import CareerRecord from "../components/CareerRecord";
import { career } from "../data/career";

export default function About() {
  return (
    <main>
      <section className="mb-[100px]">
        <h2 className="text-[20px] leading-[35px] border-b-[6px] border-b-black mb-[35px] font-medium mb-[35px]">
          About
        </h2>
        <div className="flex gap-x-[25px]">
          <div className="w-[200px] h-[250px] bg-gray-500"></div>
          <p className="text-[15px]">
            I'm a web developer based in Auckland, NZ. I've been working with
            the web since 2021.
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-[20px] leading-[35px] border-b-[6px] border-b-black font-medium mb-[35px]">
          Career
        </h2>
        {career.map((record, index) => (
          <CareerRecord
            key={index}
            date={record.date}
            title={record.title}
            company={record.company}
            description={record.description}
            AccordionItems={record.AccordionItems}
          />
        ))}
      </section>
    </main>
  );
}
