import { TopicPage } from '@/components/icetycoon2/topic-page';
import { getTopicPage } from '@/data/icetycoon2/topics';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const topic = getTopicPage('updates');

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: topic.seoTitle,
    description: topic.seoDescription,
    locale,
    pathname: topic.route,
    image: '/icetycoon2/og-image.png',
  });
}

export default function UpdatesPage() {
  return <TopicPage topic={topic} />;
}
