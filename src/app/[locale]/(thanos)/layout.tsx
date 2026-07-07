import {
  AdsterraNativeBanner,
  AdsterraTopBanner,
} from '@/components/ads/adsterra-ad';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { ThanosPageShell } from '@/components/thanos/wiki-navigation';
import type { ReactNode } from 'react';

export const dynamic = 'force-dynamic';

export default function ThanosLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#080611]">
      <Navbar scroll={true} />
      <AdsterraTopBanner />
      <main className="flex-1">
        <ThanosPageShell>{children}</ThanosPageShell>
      </main>
      <AdsterraNativeBanner className="border-[#3A2D4E] border-t bg-[#080611]" />
      <Footer />
    </div>
  );
}
