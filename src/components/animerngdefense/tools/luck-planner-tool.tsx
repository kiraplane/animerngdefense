'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { rewardItems } from '@/data/animerngdefense/database';
import { relatedRouteLabels } from '@/data/animerngdefense/guides';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle2, Circle } from 'lucide-react';
import { useState } from 'react';

function getRouteLabel(route: string) {
  return relatedRouteLabels[route] ?? route.replace(/^\/+/, '');
}

export function LuckPlannerTool() {
  const [selectedId, setSelectedId] = useState('luck-boosts');
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const selectedReward =
    rewardItems.find((reward) => reward.id === selectedId) ?? rewardItems[0];
  const steps = [...selectedReward.prerequisites, ...selectedReward.unlockPath];
  const progress = steps.filter((step) => completedSteps.includes(step)).length;

  function selectReward(id: string) {
    setSelectedId(id);
    setCompletedSteps([]);
  }

  function toggleStep(step: string) {
    setCompletedSteps((current) =>
      current.includes(step)
        ? current.filter((item) => item !== step)
        : [...current, step]
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {rewardItems.map((reward) => (
          <button
            key={reward.id}
            type="button"
            onClick={() => selectReward(reward.id)}
            className={cn(
              'rounded-lg border p-4 text-left transition',
              reward.id === selectedReward.id
                ? 'border-[#FFB703] bg-[#472000]'
                : 'border-[#4A254F] bg-[#120915] hover:border-[#FFB703]'
            )}
          >
            <p className="font-display font-bold text-[#FFE7A8]">
              {reward.name}
            </p>
            <p className="mt-2 text-[#E6D7EC] text-xs leading-5">
              {reward.stage} · {reward.category}
            </p>
          </button>
        ))}
      </div>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="rounded-lg border border-[#4A254F] bg-[#120915] p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <Badge className="bg-[#FFB703] text-[#241007]">
                {selectedReward.role}
              </Badge>
              <h2 className="mt-3 font-display text-3xl font-black">
                {selectedReward.name}
              </h2>
              <p className="mt-3 text-[#E6D7EC] leading-7">
                {selectedReward.summary}
              </p>
            </div>
            <div className="rounded-md border border-[#4A254F] bg-[#09060F] px-4 py-3 text-right">
              <p className="font-display text-2xl font-black text-[#6EE7B7]">
                {progress}/{steps.length}
              </p>
              <p className="text-[#E6D7EC] text-xs">plan steps</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            {steps.map((step, index) => {
              const isChecked = completedSteps.includes(step);

              return (
                <button
                  key={`${step}-${index}`}
                  type="button"
                  onClick={() => toggleStep(step)}
                  className={cn(
                    'flex items-start gap-3 rounded-md border p-3 text-left transition',
                    isChecked
                      ? 'border-[#6EE7B7] bg-[#0B2A1D]'
                      : 'border-[#4A254F] bg-[#09060F] hover:border-[#FFB703]'
                  )}
                >
                  {isChecked ? (
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#6EE7B7]" />
                  ) : (
                    <Circle className="mt-0.5 size-5 shrink-0 text-[#FFB703]" />
                  )}
                  <span className="text-white leading-6">{step}</span>
                </button>
              );
            })}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-lg border border-[#4A254F] bg-[#120915] p-5">
            <h3 className="font-display text-xl font-bold text-[#FFE7A8]">
              Useful for
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {selectedReward.usefulFor.map((item) => (
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

          <div className="rounded-lg border border-[#4A254F] bg-[#120915] p-5">
            <h3 className="font-display text-xl font-bold text-[#FFE7A8]">
              Planner note
            </h3>
            <p className="mt-3 text-[#E6D7EC] text-sm leading-6">
              {selectedReward.routeHint}
            </p>
          </div>

          <div className="rounded-lg border border-[#4A254F] bg-[#120915] p-5">
            <h3 className="font-display text-xl font-bold text-[#FFE7A8]">
              Related routes
            </h3>
            <div className="mt-3 grid gap-2">
              {selectedReward.relatedRoutes.map((route) => (
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
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
