'use client';

import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import type { DatabaseTableRecord } from '@/data/animerngdefense/database';
import { relatedRouteLabels } from '@/data/animerngdefense/guides';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { ArrowRight, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

function getRouteLabel(route: string) {
  return relatedRouteLabels[route] ?? route.replace(/^\/+/, '');
}

function buildSearchText(record: DatabaseTableRecord) {
  return [
    record.name,
    ...record.aliases,
    record.category,
    record.stage,
    record.summary,
    ...record.details,
    ...record.prerequisites,
    record.routeHint,
    ...record.relatedEntities,
    ...record.sourcePages,
  ]
    .join(' ')
    .toLowerCase();
}

export function DatabaseTable({
  records,
  label,
}: {
  records: DatabaseTableRecord[];
  label: string;
}) {
  const [query, setQuery] = useState('');
  const [stage, setStage] = useState('All');
  const [category, setCategory] = useState('All');

  const stages = useMemo(
    () => [
      'All',
      ...Array.from(new Set(records.map((record) => record.stage))),
    ],
    [records]
  );
  const categories = useMemo(
    () => [
      'All',
      ...Array.from(new Set(records.map((record) => record.category))),
    ],
    [records]
  );
  const filteredRecords = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return records.filter((record) => {
      const matchesStage = stage === 'All' || record.stage === stage;
      const matchesCategory =
        category === 'All' || record.category === category;
      const matchesQuery =
        !normalizedQuery || buildSearchText(record).includes(normalizedQuery);

      return matchesStage && matchesCategory && matchesQuery;
    });
  }, [category, query, records, stage]);

  return (
    <div className="space-y-5">
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_220px_220px]">
        <label htmlFor="database-search" className="relative block">
          <span className="sr-only">Search {label}</span>
          <Search className="-translate-y-1/2 absolute top-1/2 left-3 size-4 text-[#C6BCD8]" />
          <Input
            id="database-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={`Search ${label}`}
            className="border-[#4A254F] bg-[#09060F] pl-9 text-white placeholder:text-[#B99BC3]"
          />
        </label>
        <select
          value={stage}
          onChange={(event) => setStage(event.target.value)}
          className="rounded-md border border-[#4A254F] bg-[#09060F] px-3 py-2 text-white"
          aria-label="Filter by stage"
        >
          {stages.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="rounded-md border border-[#4A254F] bg-[#09060F] px-3 py-2 text-white"
          aria-label="Filter by category"
        >
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <p className="text-[#E6D7EC] text-sm">
        Showing {filteredRecords.length} of {records.length} entries.
      </p>

      <div className="grid gap-4">
        {filteredRecords.map((record) => (
          <article
            key={record.id}
            id={record.id}
            className="rounded-lg border border-[#4A254F] bg-[#120915] p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-[#FFB703] text-[#241007]">
                    {record.stage}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-[#4A254F] text-[#E6D7EC]"
                  >
                    {record.category}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={cn(
                      'border-[#4A254F]',
                      record.confidence === 'watch'
                        ? 'text-[#FFB703]'
                        : 'text-[#6EE7B7]'
                    )}
                  >
                    {record.confidence}
                  </Badge>
                </div>
                <h2 className="mt-3 font-display text-2xl font-bold text-[#FFE7A8]">
                  {record.name}
                </h2>
                {record.aliases.length > 0 ? (
                  <p className="mt-1 text-[#E6D7EC] text-sm">
                    Also: {record.aliases.join(', ')}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-wrap gap-2">
                {record.relatedRoutes.slice(0, 2).map((route) => (
                  <LocaleLink
                    key={route}
                    href={route}
                    className="inline-flex items-center gap-2 rounded-md border border-[#4A254F] bg-[#09060F] px-3 py-2 text-white text-sm transition hover:border-[#FFB703]"
                  >
                    {getRouteLabel(route)}
                    <ArrowRight className="size-3" />
                  </LocaleLink>
                ))}
              </div>
            </div>

            <p className="mt-4 text-[#E6D7EC] leading-7">{record.summary}</p>

            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              <div>
                <h3 className="font-semibold text-[#6EE7B7] text-sm uppercase">
                  Details
                </h3>
                <ul className="mt-2 space-y-1 text-[#E6D7EC] text-sm leading-6">
                  {record.details.map((detail) => (
                    <li key={detail}>- {detail}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#6EE7B7] text-sm uppercase">
                  Prerequisites
                </h3>
                <ul className="mt-2 space-y-1 text-[#E6D7EC] text-sm leading-6">
                  {record.prerequisites.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#6EE7B7] text-sm uppercase">
                  Evidence Signals
                </h3>
                <p className="mt-2 text-[#B99BC3] text-xs leading-5">
                  These labels explain what kind of source shaped the row; they
                  do not imply an official stat table exists.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {record.sourcePages.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="border-[#4A254F] text-[#E6D7EC]"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-md border border-[#4A254F] bg-[#09060F] p-4">
              <h3 className="font-display font-bold text-[#FFE7A8]">
                Route hint
              </h3>
              <p className="mt-2 text-[#E6D7EC] text-sm leading-6">
                {record.routeHint}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
