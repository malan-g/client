import CareerRecord from "./components/CareerRecord";
import { career } from "./data/career";

function App() {
  return (
    <main className="container">
      <section className="mb-[100px]">
        <h2 className="text-[35px] leading-[45px] border-b-[4px] border-b-black mb-[35px]">
          About
        </h2>
        <p className="ml-[100px]">
          I'm a web developer based in Auckland, NZ. I've been working with the
          web since 2021.
        </p>
      </section>
      <section>
        <h2 className="text-[30px] leading-[45px] border-b-[4px] border-b-black font-semibold mb-[35px]">
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

export default App;
