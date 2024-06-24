import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CareerRecordProps } from "./types";
import { fmtYear } from "../../lib/utils";

const CareerRecord: React.FC<CareerRecordProps> = ({
  date,
  title,
  company,
  description,
  AccordionItems,
}) => {
  const fmtYeardate = fmtYear(date);
  return (
    <section className="flex gap-x-[40px] mt-[25px] mb-[50px]">
      <time dateTime="year" className="text-[22px]">
        {fmtYeardate}
      </time>
      <div className="article">
        <h3 className="text-[25px] leading-[30px]">{title}</h3>
        <h4 className="text-[18px] leading-[22px]">{company}</h4>
        <div className="mt-[15px] border-t-[1px] border-black">
          <div className="text-[15px] pt-[5px]">Description</div>
          <p className="pt-[20px] text-[15px]">{description}</p>
          <Accordion type="single" collapsible className="mt-[15px]">
            {AccordionItems.map((item) => (
              <AccordionItem value={item.key} key={item.key}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>
                  {item.skills.map((skill) => (
                    <article className="flex mt-[25px]" key={skill.key}>
                      <div className="w-1/3 font-bold">{skill.title}</div>
                      <div className="w-2/3">{skill.description}</div>
                    </article>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CareerRecord;
