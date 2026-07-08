'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { units } from '@/data/animerngdefense/database';
import { relatedRouteLabels } from '@/data/animerngdefense/guides';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle2, Circle, Star } from 'lucide-react';
import { useMemo, useState } from 'react';

function getRouteLabel(route: string) {
  return relatedRouteLabels[route] ?? route.replace(/^\/+/, '');
}

export function RollTrackerTool() {
  const [checkedUnitIds, setCheckedUnitIds] = useState<string[]>([]);
  const completedCount = checkedUnitIds.length;
  const nextUnitRole = useMemo(
    () => units.find((unit) => !checkedUnitIds.includes(unit.id)),
    [checkedUnitIds]
  );

  function toggleUnit(id: string) {
    setCheckedUnitIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
      <section className="rounded-lg border border-[#4A254F] bg-[#120915] p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Badge className="bg-[#FFB703] text-[#241007]">Unit Roles</Badge>
            <h2 className="mt-3 font-display text-3xl font-black">
              Roll progress tracker
            </h2>
          </div>
          <div className="rounded-md border border-[#4A254F] bg-[#09060F] px-4 py-3 text-right">
            <p className="font-display text-2xl font-black text-[#6EE7B7]">
              {completedCount}/{units.length}
            </p>
            <p className="text-[#E6D7EC] text-xs">roles solved</p>
          </div>
        </div>

        <div className="mt-5 h-3 overflow-hidden rounded-full bg-[#09060F]">
          <div
            className="h-full bg-[#6EE7B7] transition-all"
            style={{
              width: `${Math.round((completedCount / units.length) * 100)}%`,
            }}
          />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {units.map((unit) => {
            const isChecked = checkedUnitIds.includes(unit.id);

            return (
              <button
                key={unit.id}
                type="button"
                onClick={() => toggleUnit(unit.id)}
                className={cn(
                  'rounded-lg border p-4 text-left transition',
                  isChecked
                    ? 'border-[#6EE7B7] bg-[#0B2A1D]'
                    : 'border-[#4A254F] bg-[#09060F] hover:border-[#FFB703]'
                )}
              >
                <div className="flex items-start gap-3">
                  {isChecked ? (
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#6EE7B7]" />
                  ) : (
                    <Circle className="mt-1 size-5 shrink-0 text-[#FFB703]" />
                  )}
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-[#FFE7A8] text-xl">
                      {unit.name}
                    </h3>
                    <p className="mt-2 text-[#E6D7EC] text-sm leading-6">
                      {unit.unlockMethod}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="border-[#4A254F] text-[#E6D7EC]"
                      >
                        {unit.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-[#4A254F] text-[#E6D7EC]"
                      >
                        {unit.stage}
                      </Badge>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <aside className="space-y-4">
        <div className="rounded-lg border border-[#4A254F] bg-[#120915] p-5">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-md bg-[#FFB703] text-[#241007]">
              <Star className="size-5" />
            </span>
            <div>
              <p className="font-semibold text-[#6EE7B7] text-xs uppercase">
                Next Focus
              </p>
              <h3 className="font-display text-xl font-bold text-[#FFE7A8]">
                {nextUnitRole?.name ?? 'Core roles solved'}
              </h3>
            </div>
          </div>
          {nextUnitRole ? (
            <>
              <p className="mt-4 text-[#E6D7EC] text-sm leading-6">
                {nextUnitRole.routeHint}
              </p>
              <ul className="mt-4 space-y-2 text-[#E6D7EC] text-sm leading-6">
                {nextUnitRole.trackerTasks.map((task) => (
                  <li key={task}>- {task}</li>
                ))}
              </ul>
            </>
          ) : (
            <p className="mt-4 text-[#E6D7EC] text-sm leading-6">
              Core roles are covered. Move to traits, update rewards, and map
              progression next.
            </p>
          )}
        </div>

        <div className="rounded-lg border border-[#4A254F] bg-[#120915] p-5">
          <h3 className="font-display text-xl font-bold text-[#FFE7A8]">
            Useful routes
          </h3>
          <div className="mt-3 grid gap-2">
            {['/guides/unit-tier-list-guide', '/summons', '/teams'].map(
              (route) => (
                <Button
                  key={route}
                  asChild
                  variant="outline"
                  className="h-auto justify-between whitespace-normal border-[#4A254F] bg-[#09060F] text-left text-white hover:border-[#FFB703]"
                >
                  <LocaleLink href={route}>
                    {getRouteLabel(route)}
                    <ArrowRight className="size-4 shrink-0" />
                  </LocaleLink>
                </Button>
              )
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
