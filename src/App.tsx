import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function App() {
  return (
    <main>
      <h2 className="text-[30px]">Career</h2>
      <section>
        <div>
          <h3>Web Developer</h3>
          <h4>Theia Design and Marketing Solutions</h4>
          <p>
            I was hired to help develop multi-page websites and content
            management systems. I was provided designs{" "}
          </p>
        </div>
        <Accordion type="single" collapsible className="mt-[15px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>Programming Languages</AccordionTrigger>
            <AccordionContent>
              <article className="flex mt-[15px]">
                <div className="w-1/3">JavaScript</div>
                <div className="w-2/3">Description</div>
              </article>
              <article className="flex mt-[15px]">
                <div className="w-1/3">PHP</div>
                <div className="w-2/3">Description</div>
              </article>
              <article className="flex mt-[15px]">
                <div className="w-1/3">Bash</div>
                <div className="w-2/3">Description</div>
              </article>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Markup and Style Languages</AccordionTrigger>
            <AccordionContent>
              <article className="flex mt-[10px]">
                <div className="w-1/3">Lang</div>
                <div className="w-2/3">Description</div>
              </article>
              <article className="flex mt-[10px]">
                <div className="w-1/3">Lang</div>
                <div className="w-2/3">Description</div>
              </article>
              <article className="flex mt-[10px]">
                <div className="w-1/3">Lang</div>
                <div className="w-2/3">Description</div>
              </article>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              JavaScript Frameworks and Libraries
            </AccordionTrigger>
            <AccordionContent>
              <article className="flex mt-[10px]">
                <div className="w-1/3">Lang</div>
                <div className="w-2/3">Description</div>
              </article>
              <article className="flex mt-[10px]">
                <div className="w-1/3">Lang</div>
                <div className="w-2/3">Description</div>
              </article>
              <article className="flex mt-[10px]">
                <div className="w-1/3">Lang</div>
                <div className="w-2/3">Description</div>
              </article>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
