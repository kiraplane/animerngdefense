import { CalendarDays } from 'lucide-react';

export function LastUpdated({ date }: { date: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-[#3A2D4E] bg-[#151024] px-3 py-2 font-medium text-[#C6BCD8] text-xs">
      <CalendarDays className="size-4 text-[#F6C453]" />
      Last checked {date}
    </div>
  );
}
