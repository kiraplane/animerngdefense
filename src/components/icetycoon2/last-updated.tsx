import { CalendarDays } from 'lucide-react';

export function LastUpdated({ date }: { date: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-[#263B4D] bg-[#0D1A2B] px-3 py-2 font-medium text-[#B8CEDB] text-xs">
      <CalendarDays className="size-4 text-[#8BE9FD]" />
      Last checked {date}
    </div>
  );
}
