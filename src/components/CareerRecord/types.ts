export interface CareerRecordProps {
  date: string;
  title: string;
  company: string;
  description: string;
  AccordionItems: Array<AccordionItem>;
}

type AccordionItem = {
  key: string;
  title: string;
  skills: Array<Skill>;
};

type Skill = {
  key: string;
  title: string;
  description: string;
};
