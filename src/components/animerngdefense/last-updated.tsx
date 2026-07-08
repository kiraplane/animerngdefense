import { CalendarDays } from 'lucide-react';

export function LastUpdated({ date }: { date: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-[#4A254F] bg-[#120915] px-3 py-2 font-medium text-[#E6D7EC] text-xs">
      <CalendarDays className="size-4 text-[#FFB703]" />
      Last checked {date}
    </div>
  );
}
