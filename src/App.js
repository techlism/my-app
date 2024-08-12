import { AccordionDemo } from "./Accordion";
import { CardWithForm } from "./Card";
export default function App() {
  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto border p-4 rounded-lg space-y-5">
      <h1 className="text-lg font-bold">App</h1>
      <AccordionDemo />
      <CardWithForm />
    </div>
  );
}
