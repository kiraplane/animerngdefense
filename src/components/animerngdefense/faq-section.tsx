import type { GuideFaq } from '@/data/animerngdefense/types';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export function FaqSection({
  title = 'FAQ',
  items,
  className,
}: {
  title?: string;
  items: GuideFaq[];
  className?: string;
}) {
  return (
    <section
      id="faq"
      className={cn(
        'rounded-lg border border-[#4A254F] bg-[#120915] p-6 shadow-sm',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-[#FFE7A8]">
        {title}
      </h2>
      <Accordion
        type="single"
        collapsible
        className="mt-6 w-full rounded-lg border border-[#4A254F] bg-[#09060F] px-5"
      >
        {items.map((item, index) => (
          <AccordionItem
            key={item.question}
            value={`faq-${index}`}
            className="border-[#4A254F]"
          >
            <AccordionTrigger className="cursor-pointer py-4 text-left text-base font-semibold text-white hover:text-[#FFB703] hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-[#E6D7EC] text-sm leading-7">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
