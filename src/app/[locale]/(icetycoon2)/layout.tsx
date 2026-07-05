import {
  AdsterraNativeBanner,
  AdsterraTopBanner,
} from '@/components/ads/adsterra-ad';
import { IceTycoon2PageShell } from '@/components/icetycoon2/wiki-navigation';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import type { ReactNode } from 'react';

export default function IceTycoon2Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#07111F]">
      <Navbar scroll={true} />
      <AdsterraTopBanner />
      <main className="flex-1">
        <IceTycoon2PageShell>{children}</IceTycoon2PageShell>
      </main>
      <AdsterraNativeBanner className="border-[#263B4D] border-t bg-[#07111F]" />
      <Footer />
    </div>
  );
}
