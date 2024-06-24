import CareerRecord from "./components/CareerRecord";
import { career } from "./data/career";

function App() {
  return (
    <main>
      <section className="container">
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
