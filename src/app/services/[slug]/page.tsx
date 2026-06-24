import { notFound } from "next/navigation";
import { services } from "@/src/data/services";
import { ServiceDetailHero } from "@/src/components/pages/services/services-detail-page/ServiceDetailHero";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* 1. The Reusable Details Component */}
      <ServiceDetailHero service={service} />
    </main>
  );
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}
