import {
  AdsterraNativeBanner,
  AdsterraTopBanner,
} from '@/components/ads/adsterra-ad';
import { AnimeRngDefensePageShell } from '@/components/animerngdefense/wiki-navigation';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import type { ReactNode } from 'react';

export const dynamic = 'force-dynamic';

export default function AnimeRngDefenseLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#09060F]">
      <Navbar scroll={true} />
      <AdsterraTopBanner />
      <main className="flex-1">
        <AnimeRngDefensePageShell>{children}</AnimeRngDefensePageShell>
      </main>
      <AdsterraNativeBanner className="border-[#4A254F] border-t bg-[#09060F]" />
      <Footer />
    </div>
  );
}
