'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { teamChecks } from '@/data/animerngdefense/database';
import { relatedRouteLabels } from '@/data/animerngdefense/guides';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle2, Circle } from 'lucide-react';
import { useMemo, useState } from 'react';

function getRouteLabel(route: string) {
  return relatedRouteLabels[route] ?? route.replace(/^\/+/, '');
}

export function TeamBuilderTool() {
  const [selectedId, setSelectedId] = useState(teamChecks[0]?.id ?? '');
  const [checkedTasks, setCheckedTasks] = useState<string[]>([]);

  const selectedTeam =
    teamChecks.find((team) => team.id === selectedId) ?? teamChecks[0];
  const tasks = useMemo(
    () =>
      selectedTeam
        ? [
            ...selectedTeam.prerequisites.map((task) => `Prereq: ${task}`),
            ...selectedTeam.recommendedPrep.map((task) => `Prep: ${task}`),
          ]
        : [],
    [selectedTeam]
  );
  const completedCount = tasks.filter((task) =>
    checkedTasks.includes(task)
  ).length;

  function toggleTask(task: string) {
    setCheckedTasks((current) =>
      current.includes(task)
        ? current.filter((item) => item !== task)
        : [...current, task]
    );
  }

  function selectTeam(id: string) {
    setSelectedId(id);
    setCheckedTasks([]);
  }

  if (!selectedTeam) {
    return null;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
      <aside className="space-y-3">
        {teamChecks.map((team) => (
          <button
            key={team.id}
            type="button"
            onClick={() => selectTeam(team.id)}
            className={cn(
              'w-full rounded-lg border p-4 text-left transition',
              team.id === selectedTeam.id
                ? 'border-[#FFB703] bg-[#472000] text-[#FFE7A8]'
                : 'border-[#4A254F] bg-[#120915] text-white hover:border-[#FFB703]'
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-display font-bold">{team.name}</span>
              <Badge
                variant="outline"
                className="border-[#4A254F] text-[#E6D7EC]"
              >
                {team.stage}
              </Badge>
            </div>
            <p className="mt-2 line-clamp-2 text-[#E6D7EC] text-sm leading-6">
              {team.location}
            </p>
          </button>
        ))}
      </aside>

      <section className="rounded-lg border border-[#4A254F] bg-[#120915] p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Badge className="bg-[#FFB703] text-[#241007]">
              {selectedTeam.category}
            </Badge>
            <h2 className="mt-3 font-display text-3xl font-black">
              {selectedTeam.name}
            </h2>
            <p className="mt-3 max-w-3xl text-[#E6D7EC] leading-7">
              {selectedTeam.summary}
            </p>
          </div>
          <div className="rounded-md border border-[#4A254F] bg-[#09060F] px-4 py-3 text-right">
            <p className="font-display text-2xl font-black text-[#6EE7B7]">
              {completedCount}/{tasks.length}
            </p>
            <p className="text-[#E6D7EC] text-xs">checks ready</p>
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          {tasks.map((task) => {
            const isChecked = checkedTasks.includes(task);

            return (
              <button
                key={task}
                type="button"
                onClick={() => toggleTask(task)}
                className={cn(
                  'flex items-start gap-3 rounded-md border p-3 text-left transition',
                  isChecked
                    ? 'border-[#6EE7B7] bg-[#0B2A1D] text-white'
                    : 'border-[#4A254F] bg-[#09060F] text-[#E6D7EC] hover:border-[#FFB703]'
                )}
              >
                {isChecked ? (
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#6EE7B7]" />
                ) : (
                  <Circle className="mt-0.5 size-5 shrink-0 text-[#FFB703]" />
                )}
                <span className="leading-6">{task}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 rounded-md border border-[#4A254F] bg-[#09060F] p-4">
          <h3 className="font-display text-xl font-bold text-[#FFE7A8]">
            Team note
          </h3>
          <p className="mt-2 text-[#E6D7EC] leading-7">
            {selectedTeam.routeHint}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {selectedTeam.relatedRoutes.map((route) => (
            <Button
              key={route}
              asChild
              variant="outline"
              className="h-auto whitespace-normal border-[#4A254F] bg-[#09060F] text-left text-white hover:border-[#FFB703] hover:bg-[#25102B]"
            >
              <LocaleLink href={route}>
                {getRouteLabel(route)}
                <ArrowRight className="size-4 shrink-0" />
              </LocaleLink>
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
}
